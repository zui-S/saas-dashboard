import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')
  
  // 示例数据生成函数
  function generateMetrics(userId: string, days: number = 30) {
    const metrics = []
    const now = new Date()
    
    for (let i = days; i >= 0; i--) {
      const date = new Date(now)
      date.setDate(date.getDate() - i)
      
      // 收入数据 (随机波动)
      const baseRevenue = 1000
      const randomFactor = Math.random() * 500
      metrics.push({
        userId,
        name: 'revenue',
        value: baseRevenue + randomFactor,
        date,
      })
      
      // 用户数据 (增长趋势)
      const baseUsers = 500 + (days - i) * 10
      const randomUsers = Math.random() * 50
      metrics.push({
        userId,
        name: 'users',
        value: baseUsers + randomUsers,
        date,
      })
      
      // 页面浏览量
      const pageViews = baseUsers * (5 + Math.random() * 3)
      metrics.push({
        userId,
        name: 'pageviews',
        value: pageViews,
        date,
      })
    }
    
    return metrics
  }
  
  console.log('✅ Seed completed!')
  console.log('Note: Actual user data will be created when users sign up via Clerk')
  console.log('Run this after a user signs up to populate their dashboard with sample data')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
