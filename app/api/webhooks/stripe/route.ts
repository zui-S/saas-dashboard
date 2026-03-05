import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe'
import { prisma } from '@/lib/db'
import type Stripe from 'stripe'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const headersList = await headers()
  const signature = headersList.get('stripe-signature')!
  
  let event: Stripe.Event
  
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Webhook signature verification failed', err)
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    )
  }
  
  // 处理不同的事件类型
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      
      if (session.mode === 'subscription') {
        const userId = session.metadata?.userId
        const plan = session.metadata?.plan?.toUpperCase() as 'PRO' | 'ENTERPRISE'
        
        if (userId && plan) {
          // 获取订阅 ID
          const subscription = await stripe.subscriptions.retrieve(
            session.subscription as string
          )
          
          // 更新或创建用户订阅
          await prisma.subscription.upsert({
            where: { userId },
            update: {
              plan,
              status: 'active',
              stripeCustomerId: session.customer as string,
              stripeSubscriptionId: session.subscription as string,
              stripePriceId: plan === 'PRO' 
                ? process.env.STRIPE_PRO_PRICE_ID 
                : process.env.STRIPE_ENTERPRISE_PRICE_ID,
              stripeCurrentPeriodEnd: new Date(
                subscription.current_period_end * 1000
              ),
            },
            create: {
              userId,
              plan,
              status: 'active',
              stripeCustomerId: session.customer as string,
              stripeSubscriptionId: session.subscription as string,
              stripePriceId: plan === 'PRO'
                ? process.env.STRIPE_PRO_PRICE_ID
                : process.env.STRIPE_ENTERPRISE_PRICE_ID,
              stripeCurrentPeriodEnd: new Date(
                subscription.current_period_end * 1000
              ),
            },
          })
        }
      }
      break
    }
    
    case 'customer.subscription.updated': {
      const subscription = event.data.object as Stripe.Subscription
      
      await prisma.subscription.update({
        where: { stripeSubscriptionId: subscription.id },
        data: {
          status: subscription.status,
          stripeCurrentPeriodEnd: new Date(
            subscription.current_period_end * 1000
          ),
        },
      }).catch(() => {
        // 订阅可能不存在，忽略错误
      })
      break
    }
    
    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription
      
      await prisma.subscription.update({
        where: { stripeSubscriptionId: subscription.id },
        data: {
          status: 'cancelled',
          stripeSubscriptionId: null,
          stripeCurrentPeriodEnd: null,
        },
      }).catch(() => {
        // 订阅可能不存在，忽略错误
      })
      break
    }
  }
  
  return NextResponse.json({ received: true })
}
