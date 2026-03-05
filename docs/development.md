# 开发指南

## 环境设置

### 1. 安装依赖

```bash
pnpm install
```

### 2. 配置环境变量

复制 `.env.example` 到 `.env.local` 并填入你的密钥:

```bash
cp .env.example .env.local
```

#### 获取密钥

**Clerk (认证):**
1. 访问 https://clerk.com
2. 创建新应用
3. 在 API Keys 页面获取 `Publishable Key` 和 `Secret Key`

**Stripe (支付):**
1. 访问 https://dashboard.stripe.com/test/apikeys
2. 获取 `Publishable Key` 和 `Secret Key`
3. 创建产品并获取 Price ID

**PostgreSQL (数据库):**
- 本地开发推荐使用 Docker 或 Supabase
- 生产环境推荐使用 Vercel Postgres 或 Neon

### 3. 初始化数据库

```bash
# 推送 schema 到数据库
pnpm db:push

# (可选) 运行种子数据
pnpm db:seed
```

### 4. 启动开发服务器

```bash
pnpm dev
```

访问 http://localhost:3000

---

## 项目结构详解

```
saas-dashboard/
├── app/                      # Next.js App Router
│   ├── (auth)/              # 认证页面 (sign-in, sign-up)
│   ├── (dashboard)/         # 仪表盘页面 (需要登录)
│   ├── (marketing)/         # 营销页面 (首页、定价)
│   ├── api/                 # API 路由
│   │   ├── webhooks/        # Webhook 处理器
│   │   └── auth/            # 认证回调
│   └── layout.tsx           # 根布局
├── components/              # React 组件
│   ├── ui/                  # 基础 UI 组件 (Button, Card 等)
│   └── dashboard/           # 仪表盘专用组件
├── lib/                     # 工具函数和配置
│   ├── db.ts                # Prisma 客户端实例
│   ├── stripe.ts            # Stripe 配置
│   ├── auth.ts              # 认证工具
│   └── utils.ts             # 通用工具函数
├── prisma/                  # Prisma 配置
│   ├── schema.prisma        # 数据模型定义
│   └── seed.ts              # 种子数据脚本
└── middleware.ts            # Next.js 中间件 (认证保护)
```

---

## 核心功能开发

### 添加新的仪表盘页面

1. 在 `app/(dashboard)/dashboard/` 下创建新页面
2. 使用 `requireUser()` 确保用户已登录
3. 从数据库获取数据并展示

```typescript
// app/(dashboard)/dashboard/analytics/page.tsx
import { requireUser } from '@/lib/auth'
import { prisma } from '@/lib/db'

export default async function AnalyticsPage() {
  const user = await requireUser()
  
  const data = await prisma.metric.findMany({
    where: { userId: user.id },
  })
  
  return <div>...</div>
}
```

### 添加新的 API 端点

```typescript
// app/api/metrics/route.ts
import { NextResponse } from 'next/server'
import { requireUser } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function GET() {
  const user = await requireUser()
  
  const metrics = await prisma.metric.findMany({
    where: { userId: user.id },
  })
  
  return NextResponse.json(metrics)
}
```

### 添加新的图表组件

```typescript
// components/dashboard/my-chart.tsx
'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MyChart({ data }: { data: any[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
```

---

## 数据库操作

### 创建新用户

```typescript
import { prisma } from '@/lib/db'

async function createUser(clerkId: string, email: string, name: string) {
  return prisma.user.create({
    data: {
      clerkId,
      email,
      name,
      subscription: {
        create: {
          plan: 'FREE',
        },
      },
    },
  })
}
```

### 记录指标数据

```typescript
async function recordMetric(userId: string, name: string, value: number) {
  return prisma.metric.create({
    data: {
      userId,
      name,
      value,
      date: new Date(),
    },
  })
}
```

### 查询用户数据

```typescript
async function getUserMetrics(userId: string, days: number = 30) {
  const startDate = new Date()
  startDate.setDate(startDate.getDate() - days)
  
  return prisma.metric.findMany({
    where: {
      userId,
      date: { gte: startDate },
    },
    orderBy: { date: 'asc' },
  })
}
```

---

## 认证集成

### Clerk Webhook (可选)

自动同步 Clerk 用户到数据库:

```typescript
// app/api/webhooks/clerk/route.ts
import { Webhook } from 'svix'
import { prisma } from '@/lib/db'

export async function POST(req: Request) {
  const payload = await req.text()
  
  // 验证 webhook 签名
  // 处理 user.created, user.updated, user.deleted 事件
  
  return NextResponse.json({ success: true })
}
```

---

## 支付集成

### Stripe 产品设置

在 Stripe Dashboard 创建产品:

1. **Pro Plan**
   - 价格：$29/月
   - 类型：Recurring
   - 记录 Price ID 到 `.env.local`

2. **Enterprise Plan**
   - 价格：$99/月
   - 类型：Recurring
   - 记录 Price ID 到 `.env.local`

### 本地测试 Stripe Webhook

```bash
# 安装 Stripe CLI
brew install stripe/stripe-cli/stripe

# 登录
stripe login

# 转发 webhook 到本地
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

---

## 常见问题

### Q: 如何处理数据库迁移？

```bash
# 创建新迁移
pnpm db:migrate

# 应用到数据库
pnpm prisma migrate deploy
```

### Q: 如何在生产中同步 Clerk 用户？

使用 Clerk 的 `afterSignUp` hook 或 webhook 自动创建用户记录。

### Q: 如何添加更多图表类型？

安装 Recharts 组件并参考官方文档: https://recharts.org

---

## 下一步

- 阅读 [部署指南](./deployment.md) 学习如何上线
- 查看 [API 文档](./api.md) 了解所有 API 端点
- 参考 [数据库设计](./database.md) 理解数据模型
