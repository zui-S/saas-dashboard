import { requireUser } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { createPortalSession } from '@/lib/stripe'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, X } from 'lucide-react'
import { redirect } from 'next/navigation'

export default async function BillingPage() {
  const user = await requireUser()
  
  const subscription = await prisma.subscription.findUnique({
    where: { userId: user.id },
  })

  async function handleManageBilling(formData: FormData) {
    'use server'
    
    if (!subscription?.stripeCustomerId) {
      return
    }
    
    const session = await createPortalSession({
      customerId: subscription.stripeCustomerId,
      returnUrl: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing`,
    })
    
    redirect(session.url)
  }

  const features = {
    FREE: {
      analytics: false,
      teamMembers: 1,
      storage: '1GB',
      support: 'Email',
      api: false,
    },
    PRO: {
      analytics: true,
      teamMembers: 5,
      storage: '10GB',
      support: 'Priority',
      api: true,
    },
    ENTERPRISE: {
      analytics: true,
      teamMembers: 'Unlimited',
      storage: 'Unlimited',
      support: '24/7 Dedicated',
      api: true,
    },
  }

  const currentPlan = subscription?.plan || 'FREE'
  const currentFeatures = features[currentPlan as keyof typeof features]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Billing & Subscription</h1>
        <p className="text-gray-600">Manage your subscription and billing details</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
          <CardDescription>Your current subscription details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold capitalize">{currentPlan}</p>
              <p className="text-gray-600">
                {subscription?.status === 'active' ? 'Active' : 'No active subscription'}
              </p>
            </div>
            {subscription?.stripeCustomerId && (
              <form action={handleManageBilling}>
                <Button variant="outline">Manage Billing</Button>
              </form>
            )}
          </div>

          {subscription?.stripeCurrentPeriodEnd && (
            <p className="text-sm text-gray-600">
              Next billing date: {new Date(subscription.stripeCurrentPeriodEnd).toLocaleDateString()}
            </p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Plan Features</CardTitle>
          <CardDescription>What&apos;s included in your plan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <FeatureRow 
              label="Advanced Analytics" 
              enabled={currentFeatures.analytics} 
            />
            <FeatureRow 
              label="Team Members" 
              value={currentFeatures.teamMembers.toString()} 
            />
            <FeatureRow 
              label="Storage" 
              value={currentFeatures.storage} 
            />
            <FeatureRow 
              label="Support" 
              value={currentFeatures.support} 
            />
            <FeatureRow 
              label="API Access" 
              enabled={currentFeatures.api} 
            />
          </div>
        </CardContent>
      </Card>

      {currentPlan === 'FREE' && (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-blue-900">
                  Upgrade to unlock all features
                </p>
                <p className="text-sm text-blue-700">
                  Get access to advanced analytics, more team members, and priority support
                </p>
              </div>
              <a href="/dashboard/pricing">
                <Button>Upgrade Now</Button>
              </a>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

function FeatureRow({ 
  label, 
  enabled, 
  value 
}: { 
  label: string
  enabled?: boolean
  value?: string
}) {
  return (
    <div className="flex items-center justify-between py-2 border-b last:border-0">
      <span className="text-gray-600">{label}</span>
      {enabled !== undefined ? (
        enabled ? (
          <Check className="w-5 h-5 text-green-600" />
        ) : (
          <X className="w-5 h-5 text-gray-400" />
        )
      ) : (
        <span className="font-medium">{value}</span>
      )}
    </div>
  )
}
