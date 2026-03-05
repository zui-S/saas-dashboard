# 数据库设计

## 概述

本项目使用 PostgreSQL 数据库，通过 Prisma ORM 进行数据管理。

## 数据模型

### User (用户)

核心用户模型，与 Clerk 认证系统同步。

```prisma
model User {
  id             String    @id @default(cuid())
  clerkId        String    @unique        // Clerk 用户 ID
  email          String    @unique
  name           String?
  imageUrl       String?
  createdAt      DateTime  @default(now())
  updatedAt      DateTime  @updatedAt
  
  subscription   Subscription?
  metrics        Metric[]
  teamId         String?
  team           Team?
  teamMembers    TeamMember[]
}
```

**字段说明**:
- `clerkId`: Clerk 提供的唯一用户标识
- `email`: 用户邮箱，唯一
- `imageUrl`: 用户头像 URL

---

### Subscription (订阅)

用户订阅信息，与 Stripe 集成。

```prisma
model Subscription {
  id             String    @id @default(cuid())
  userId         String    @unique
  user           User      @relation(...)
  
  stripeCustomerId String? @unique
  stripeSubscriptionId String? @unique
  stripePriceId  String?
  stripeCurrentPeriodEnd DateTime?
  
  plan           Plan      @default(FREE)
  status         String    @default("active")
  
  createdAt      DateTime  @default(now())
  updatedAt      DateTime  @updatedAt
}

enum Plan {
  FREE
  PRO
  ENTERPRISE
}
```

**订阅状态流转**:
```
FREE → PRO/ENTERPRISE (用户购买)
PRO/ENTERPRISE → active (支付成功)
PRO/ENTERPRISE → cancelled (用户取消)
```

---

### Team (团队)

多租户支持，团队模型。

```prisma
model Team {
  id             String    @id @default(cuid())
  name           String
  createdAt      DateTime  @default(now())
  updatedAt      DateTime  @updatedAt
  
  members        TeamMember[]
  metrics        Metric[]
}
```

---

### TeamMember (团队成员)

团队与用户的关联表。

```prisma
model TeamMember {
  id             String    @id @default(cuid())
  userId         String
  user           User      @relation(...)
  teamId         String
  team           Team      @relation(...)
  role           Role      @default(MEMBER)
  
  @@unique([userId, teamId])
}

enum Role {
  ADMIN
  MEMBER
}
```

---

### Metric (指标数据)

核心业务数据，存储各类指标。

```prisma
model Metric {
  id             String    @id @default(cuid())
  userId         String
  user           User      @relation(...)
  teamId         String?
  team           Team?     @relation(...)
  
  name           String    // 指标名称
  value          Float     // 指标值
  date           DateTime  // 数据日期
  
  metadata       Json?     // 额外元数据
  
  createdAt      DateTime  @default(now())
  
  @@index([userId, date])
  @@index([teamId, date])
}
```

**常用指标名称**:
- `revenue`: 收入
- `users`: 用户数
- `pageviews`: 页面浏览量
- `sessions`: 会话数
- `conversions`: 转化数

---

## 实体关系图

```
┌─────────────┐
│    User     │
└──────┬──────┘
       │
       ├───┬───────────────┐
       │   │               │
       ▼   ▼               ▼
┌─────────────┐    ┌─────────────┐
│Subscription │    │  TeamMember │
└─────────────┘    └──────┬──────┘
                          │
                          ▼
                    ┌─────────────┐
                    │    Team     │
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │   Metric    │
                    └─────────────┘
```

---

## 索引优化

### 默认索引

- `User.clerkId`: 唯一索引，快速查找用户
- `User.email`: 唯一索引
- `Subscription.userId`: 唯一索引
- `Subscription.stripeCustomerId`: 唯一索引

### 复合索引

```prisma
@@index([userId, date])  // Metric 表
@@index([teamId, date])  // Metric 表
@@unique([userId, teamId])  // TeamMember 表
```

---

## 常用查询

### 获取用户最近 N 天的指标

```typescript
const metrics = await prisma.metric.findMany({
  where: {
    userId: user.id,
    date: {
      gte: new Date(Date.now() - days * 24 * 60 * 60 * 1000),
    },
  },
  orderBy: { date: 'asc' },
})
```

### 按指标名称分组统计

```typescript
const stats = await prisma.metric.groupBy({
  by: ['name'],
  where: { userId: user.id },
  _avg: { value: true },
  _sum: { value: true },
  _count: true,
})
```

### 获取团队所有成员的数据

```typescript
const teamMetrics = await prisma.metric.findMany({
  where: { teamId: team.id },
  include: { user: true },
})
```

---

## 数据迁移

### 创建迁移

```bash
pnpm prisma migrate dev --name add_new_field
```

### 应用迁移

```bash
# 开发环境
pnpm prisma migrate dev

# 生产环境
pnpm prisma migrate deploy
```

### 重置数据库

```bash
pnpm prisma migrate reset
```

---

## 数据库连接池配置

生产环境建议配置连接池:

```typescript
// lib/db.ts
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
  log: ['query', 'info', 'warn', 'error'],
})
```

---

## 备份策略

### 自动备份

大多数托管数据库服务提供自动备份:
- Vercel Postgres: 每日自动备份
- Neon: 时间点恢复
- Supabase: 每日备份 + PITR

### 手动备份

```bash
# 导出数据库
pg_dump $DATABASE_URL > backup.sql

# 导入数据库
psql $DATABASE_URL < backup.sql
```

---

## 性能优化

### 查询优化

1. **使用索引**: 确保查询字段有索引
2. **限制结果**: 使用 `take` 限制返回数量
3. **选择性加载**: 只 `include` 需要的关联数据
4. **批量操作**: 使用 `createMany` 代替多次 `create`

### 示例

```typescript
// ❌ 慢查询
const metrics = await prisma.metric.findMany({
  where: { userId: user.id },
})

// ✅ 优化后
const metrics = await prisma.metric.findMany({
  where: { 
    userId: user.id,
    date: { gte: startDate },
  },
  take: 100,
  orderBy: { date: 'desc' },
})
```

---

## 安全考虑

1. **数据隔离**: 用户只能访问自己的数据
2. **输入验证**: 所有输入必须验证
3. **SQL 注入防护**: Prisma 自动参数化查询
4. **敏感数据**: 不存储密码等敏感信息 (由 Clerk 处理)

---

## 扩展建议

### 添加新模型

1. 在 `schema.prisma` 中定义模型
2. 运行 `pnpm db:push` 或创建迁移
3. 更新类型定义
4. 添加相关 API 端点

### 添加新字段

1. 修改 `schema.prisma`
2. 创建迁移
3. 更新相关代码

---

## 故障排查

### 常见问题

**Q: 连接超时**
- 检查 DATABASE_URL 是否正确
- 确认数据库服务运行正常
- 检查防火墙设置

**Q: 迁移失败**
- 查看错误日志
- 回滚迁移：`prisma migrate resolve`
- 手动修复后重新应用

**Q: 查询慢**
- 使用 `prisma query` 查看执行计划
- 添加适当索引
- 优化查询逻辑
