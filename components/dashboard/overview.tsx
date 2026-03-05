'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign, Users, ArrowUpRight, ArrowDownRight } from 'lucide-react'

interface Metric {
  id: string
  name: string
  value: number
  date: Date
}

interface DashboardOverviewProps {
  metrics: Metric[]
}

export function DashboardOverview({ metrics }: DashboardOverviewProps) {
  // 计算关键指标
  const totalRevenue = metrics
    .filter(m => m.name === 'revenue')
    .reduce((sum, m) => sum + m.value, 0)
  
  const totalUsers = metrics
    .filter(m => m.name === 'users')
    .reduce((sum, m) => sum + m.value, 0)
  
  const growth = metrics.length > 0 ? 12.5 : 0
  
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">
            Total Revenue
          </CardTitle>
          <DollarSign className="w-4 h-4 text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${totalRevenue.toLocaleString()}
          </div>
          <div className="flex items-center text-sm text-green-600 mt-1">
            <ArrowUpRight className="w-4 h-4" />
            <span>+{growth}% from last month</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">
            Active Users
          </CardTitle>
          <Users className="w-4 h-4 text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {Math.round(totalUsers)}
          </div>
          <div className="flex items-center text-sm text-green-600 mt-1">
            <ArrowUpRight className="w-4 h-4" />
            <span>+{growth}% from last month</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">
            Conversion Rate
          </CardTitle>
          <ArrowUpRight className="w-4 h-4 text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {growth.toFixed(1)}%
          </div>
          <div className="flex items-center text-sm text-red-600 mt-1">
            <ArrowDownRight className="w-4 h-4" />
            <span>-2.1% from last month</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
