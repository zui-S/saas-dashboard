import Link from 'next/link'
import { ArrowRight, BarChart3, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* 导航栏 */}
      <nav className="border-b bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            📊 SaaS Dashboard
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/sign-in">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* 英雄区域 */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Build Beautiful Data Dashboards
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Professional SaaS analytics platform with real-time data visualization, 
          user management, and subscription billing.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/sign-up">
            <Button size="lg" className="gap-2">
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="#features">
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* 功能特性 */}
      <section id="features" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Everything You Need</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<BarChart3 className="w-8 h-8 text-blue-600" />}
            title="Data Visualization"
            description="Beautiful charts and graphs powered by Recharts"
          />
          <FeatureCard
            icon={<Shield className="w-8 h-8 text-green-600" />}
            title="Secure Authentication"
            description="Enterprise-grade security with Clerk"
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8 text-yellow-600" />}
            title="Fast Performance"
            description="Built with Next.js 15 for optimal speed"
          />
        </div>
      </section>

      {/* 数据统计 */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Stat number="10K+" label="Active Users" />
            <Stat number="99.9%" label="Uptime" />
            <Stat number="24/7" label="Support" />
          </div>
        </div>
      </section>

      {/* 定价预览 */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Simple Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Free"
            price="$0"
            features={['Basic Analytics', '1 Team Member', 'Email Support']}
          />
          <PricingCard
            title="Pro"
            price="$29"
            features={['Advanced Analytics', '5 Team Members', 'Priority Support', 'Custom Reports']}
            popular
          />
          <PricingCard
            title="Enterprise"
            price="$99"
            features={['Unlimited Everything', 'Custom Integrations', 'Dedicated Support', 'SLA']}
          />
        </div>
      </section>

      {/* 页脚 */}
      <footer className="border-t bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 SaaS Dashboard. Built with Next.js 15 + TypeScript</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="p-6 rounded-lg border bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-4xl font-bold mb-2">{number}</div>
      <div className="text-blue-100">{label}</div>
    </div>
  )
}

function PricingCard({ title, price, features, popular }: {
  title: string
  price: string
  features: string[]
  popular?: boolean
}) {
  return (
    <div className={`p-8 rounded-lg border ${popular ? 'border-blue-600 shadow-lg' : 'bg-white'}`}>
      {popular && (
        <div className="text-blue-600 text-sm font-semibold mb-2">Most Popular</div>
      )}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="text-4xl font-bold mb-6">
        {price}<span className="text-lg font-normal text-gray-600">/month</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <Link href="/sign-up">
        <Button className="w-full" variant={popular ? 'default' : 'outline'}>
          Get Started
        </Button>
      </Link>
    </div>
  )
}
