import { requireUser } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { createCheckoutSession } from '@/lib/stripe'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Check } from 'lucide-react'
import { redirect } from 'next/navigation'

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for getting started',
    features: [
      'Basic Analytics',
      '1 Team Member',
      'Email Support',
      '1GB Storage',
    ],
    planType: 'FREE' as const,
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'Best for growing businesses',
    features: [
      'Advanced Analytics',
      '5 Team Members',
      'Priority Support',
      'Custom Reports',
      '10GB Storage',
      'API Access',
    ],
    planType: 'PRO' as const,
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    description: 'For large organizations',
    features: [
      'Unlimited Everything',
      'Unlimited Team Members',
      '24/7 Dedicated Support',
      'Custom Integrations',
      'Unlimited Storage',
      'SLA',
      'Advanced Security',
    ],
    planType: 'ENTERPRISE' as const,
  },
]

export default async function PricingPage() {
  const user = await requireUser()
  
  const subscription = await prisma.subscription.findUnique({
    where: { userId: user.id },
  })

  async function handleSubscribe(formData: FormData) {
    'use server'
    
    const plan = formData.get('plan') as 'pro' | 'enterprise'
    
    const session = await createCheckoutSession({
      userId: user.id,
      email: user.email,
      plan,
      successUrl: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing?success=true`,
      cancelUrl: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
    })
    
    if (session.url) {
      redirect(session.url)
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Choose Your Plan</h1>
        <p className="text-gray-600">Select the perfect plan for your needs</p>
      </div>

      {subscription && subscription.status === 'active' && (
        <Card className="bg-green-50 border-green-200">
          <CardContent className="py-4">
            <p className="text-green-800">
              ✅ You&apos;re currently on the <strong>{subscription.plan}</strong> plan
            </p>
          </CardContent>
        </Card>
      )}

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card 
            key={plan.name} 
            className={`relative ${plan.popular ? 'border-blue-600 shadow-lg' : ''}`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            )}
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <form action={handleSubscribe}>
                <input type="hidden" name="plan" value={plan.planType.toLowerCase()} />
                <Button 
                  className="w-full" 
                  variant={plan.popular ? 'default' : 'outline'}
                  disabled={subscription?.plan === plan.planType}
                >
                  {subscription?.plan === plan.planType ? 'Current Plan' : 'Get Started'}
                </Button>
              </form>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
