import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
  typescript: true,
})

// 获取产品价格 ID
export async function getPriceId(plan: 'pro' | 'enterprise'): Promise<string> {
  if (plan === 'pro') {
    return process.env.STRIPE_PRO_PRICE_ID!
  }
  return process.env.STRIPE_ENTERPRISE_PRICE_ID!
}

// 创建结账会话
export async function createCheckoutSession(params: {
  userId: string
  email: string
  plan: 'pro' | 'enterprise'
  successUrl: string
  cancelUrl: string
}) {
  const priceId = await getPriceId(params.plan)
  
  const session = await stripe.checkout.sessions.create({
    customer_email: params.email,
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: params.successUrl,
    cancel_url: params.cancelUrl,
    metadata: {
      userId: params.userId,
      plan: params.plan,
    },
    allow_promotion_codes: true,
  })
  
  return session
}

// 创建客户门户会话
export async function createPortalSession(params: {
  customerId: string
  returnUrl: string
}) {
  const session = await stripe.billingPortal.sessions.create({
    customer: params.customerId,
    return_url: params.returnUrl,
  })
  
  return session
}

// 验证 webhook 签名
export function verifyWebhookSignature(body: string, signature: string) {
  return stripe.webhooks.constructEvent(
    body,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET!
  )
}
