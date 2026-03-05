import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Metric {
  id: string
  name: string
  value: number
  date: Date
}

interface RecentActivityProps {
  metrics: Metric[]
}

export function RecentActivity({ metrics }: RecentActivityProps) {
  const recentMetrics = metrics.slice(0, 10)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        {recentMetrics.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No recent activity</p>
        ) : (
          <div className="space-y-4">
            {recentMetrics.map((metric) => (
              <div key={metric.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium capitalize">{metric.name}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(metric.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-lg font-semibold">
                  {metric.name === 'revenue' 
                    ? `$${metric.value.toLocaleString()}`
                    : Math.round(metric.value).toLocaleString()
                  }
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
