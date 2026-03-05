# API 文档

## 认证 API

### 获取当前用户

**路径**: `GET /api/user`

**描述**: 获取当前登录用户的信息

**响应**:
```json
{
  "id": "user_123",
  "clerkId": "user_abc",
  "email": "user@example.com",
  "name": "John Doe",
  "subscription": {
    "plan": "PRO",
    "status": "active"
  }
}
```

---

## 指标 API

### 获取用户指标

**路径**: `GET /api/metrics`

**查询参数**:
- `days` (可选): 获取最近 N 天的数据，默认 30
- `name` (可选): 过滤特定指标名称

**响应**:
```json
[
  {
    "id": "metric_123",
    "name": "revenue",
    "value": 1500.50,
    "date": "2024-01-15T00:00:00Z"
  }
]
```

### 创建指标

**路径**: `POST /api/metrics`

**请求体**:
```json
{
  "name": "revenue",
  "value": 1500.50,
  "date": "2024-01-15"
}
```

**响应**:
```json
{
  "id": "metric_123",
  "name": "revenue",
  "value": 1500.50,
  "date": "2024-01-15T00:00:00Z"
}
```

### 批量创建指标

**路径**: `POST /api/metrics/bulk`

**请求体**:
```json
{
  "metrics": [
    { "name": "revenue", "value": 1500, "date": "2024-01-15" },
    { "name": "users", "value": 500, "date": "2024-01-15" }
  ]
}
```

---

## 订阅 API

### 获取订阅状态

**路径**: `GET /api/subscription`

**响应**:
```json
{
  "plan": "PRO",
  "status": "active",
  "currentPeriodEnd": "2024-02-15T00:00:00Z",
  "features": {
    "analytics": true,
    "teamMembers": 5,
    "storage": "10GB"
  }
}
```

### 创建结账会话

**路径**: `POST /api/checkout`

**请求体**:
```json
{
  "plan": "pro"
}
```

**响应**:
```json
{
  "url": "https://checkout.stripe.com/..."
}
```

### 创建门户会话

**路径**: `POST /api/portal`

**描述**: 创建 Stripe 客户门户会话，用于管理订阅

**响应**:
```json
{
  "url": "https://billing.stripe.com/..."
}
```

---

## 团队 API

### 获取团队成员

**路径**: `GET /api/team`

**响应**:
```json
{
  "id": "team_123",
  "name": "My Team",
  "members": [
    {
      "id": "user_1",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "ADMIN"
    }
  ]
}
```

### 邀请团队成员

**路径**: `POST /api/team/invite`

**请求体**:
```json
{
  "email": "newmember@example.com",
  "role": "MEMBER"
}
```

### 移除团队成员

**路径**: `DELETE /api/team/members/:memberId`

---

## Webhook API

### Stripe Webhook

**路径**: `POST /api/webhooks/stripe`

**处理事件**:
- `checkout.session.completed` - 订阅购买完成
- `customer.subscription.updated` - 订阅更新
- `customer.subscription.deleted` - 订阅取消

**响应**:
```json
{
  "received": true
}
```

---

## 错误响应

### 400 Bad Request

```json
{
  "error": "Invalid request",
  "message": "Missing required field: name"
}
```

### 401 Unauthorized

```json
{
  "error": "Unauthorized",
  "message": "You must be logged in to access this resource"
}
```

### 403 Forbidden

```json
{
  "error": "Forbidden",
  "message": "This feature requires a PRO subscription"
}
```

### 404 Not Found

```json
{
  "error": "Not Found",
  "message": "Resource not found"
}
```

### 500 Internal Server Error

```json
{
  "error": "Internal Server Error",
  "message": "Something went wrong"
}
```

---

## 使用示例

### 使用 fetch 获取指标

```typescript
async function getMetrics(days = 30) {
  const response = await fetch(`/api/metrics?days=${days}`)
  
  if (!response.ok) {
    throw new Error('Failed to fetch metrics')
  }
  
  return response.json()
}
```

### 使用 fetch 创建指标

```typescript
async function createMetric(name: string, value: number) {
  const response = await fetch('/api/metrics', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, value }),
  })
  
  if (!response.ok) {
    throw new Error('Failed to create metric')
  }
  
  return response.json()
}
```

### 使用 Server Action

```typescript
// app/actions.ts
'use server'

import { requireUser } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function createMetricAction(name: string, value: number) {
  const user = await requireUser()
  
  return prisma.metric.create({
    data: {
      userId: user.id,
      name,
      value,
      date: new Date(),
    },
  })
}
```

---

## 速率限制

- 免费计划：100 请求/小时
- Pro 计划：1000 请求/小时
- Enterprise 计划：10000 请求/小时

---

## 认证

所有 API 端点 (除了 webhook) 都需要通过 Clerk 认证。

认证通过中间件自动处理，无需手动添加 token。

---

## 最佳实践

1. **始终检查响应状态**
2. **处理错误情况**
3. **使用适当的 HTTP 方法**
4. **验证输入数据**
5. **限制请求频率**
