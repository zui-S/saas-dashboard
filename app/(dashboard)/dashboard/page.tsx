import { requireUser } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { DashboardOverview } from '@/components/dashboard/overview'
import { RecentActivity } from '@/components/dashboard/recent-activity'
import { RevenueChart } from '@/components/dashboard/revenue-chart'

export default async function DashboardPage() {
  const user = await requireUser()
  
  // 获取示例数据
  const metrics = await prisma.metric.findMany({
    where: { userId: user.id },
    orderBy: { date: 'desc' },
    take: 30,
  })
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, {user.name || 'User'}!</h1>
        <p className="text-gray-600">Here&apos;s what&apos;s happening with your data today.</p>
      </div>

      <DashboardOverview metrics={metrics} />
      
      <div className="grid lg:grid-cols-2 gap-8">
        <RevenueChart metrics={metrics} />
        <RecentActivity metrics={metrics} />
      </div>
    </div>
  )
}
