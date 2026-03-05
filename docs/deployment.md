# 部署指南

## 部署到 Vercel (推荐)

### 1. 准备工作

确保你已经:
- ✅ 代码推送到 GitHub
- ✅ 创建 PostgreSQL 数据库 (Vercel Postgres / Neon / Supabase)
- ✅ 获取 Clerk API 密钥
- ✅ 获取 Stripe API 密钥

### 2. 连接 Vercel

```bash
# 安装 Vercel CLI
pnpm i -g vercel

# 登录 Vercel
vercel login

# 初始化项目
vercel
```

### 3. 配置环境变量

在 Vercel Dashboard 中添加以下环境变量:

```bash
# 数据库
DATABASE_URL=postgresql://...

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Stripe
STRIPE_SECRET_KEY=sk_live_... (生产环境)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PRO_PRICE_ID=price_...
STRIPE_ENTERPRISE_PRICE_ID=price_...

# 应用配置
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
NODE_ENV=production
```

### 4. 部署

```bash
# 生产部署
vercel --prod
```

### 5. 数据库迁移

```bash
# 在 Vercel 中运行迁移
vercel env pull .env.production.local
npx prisma migrate deploy
```

---

## 部署到 Railway

### 1. 创建 Railway 项目

1. 访问 https://railway.app
2. 点击 "New Project"
3. 选择 "Deploy from GitHub repo"

### 2. 配置数据库

```bash
# 在 Railway 中添加 PostgreSQL
# 复制 DATABASE_URL 到环境变量
```

### 3. 配置环境变量

在 Railway Dashboard 中添加所有必需的环境变量 (参考 Vercel 部分)

### 4. 部署

Railway 会自动构建和部署，无需额外命令

---

## 部署到 Render

### 1. 创建 Web Service

1. 访问 https://render.com
2. 点击 "New +" → "Web Service"
3. 连接 GitHub 仓库

### 2. 配置

- **Build Command**: `pnpm install && pnpm build`
- **Start Command**: `pnpm start`

### 3. 添加数据库

1. 创建 PostgreSQL 数据库
2. 复制连接字符串到环境变量

### 4. 环境变量

添加所有必需的环境变量

---

## 生产环境配置

### Clerk 配置

1. 在 Clerk Dashboard 切换到 "Production" 模式
2. 获取生产环境的 API 密钥
3. 配置生产域名

### Stripe 配置

1. 切换到生产模式
2. 创建生产产品
3. 配置生产 webhook:
   - URL: `https://your-domain.com/api/webhooks/stripe`
   - 事件：`checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`

### 数据库配置

推荐使用托管数据库服务:
- **Vercel Postgres** - 与 Vercel 深度集成
- **Neon** - Serverless PostgreSQL
- **Supabase** - 功能丰富的 PostgreSQL 平台
- **Railway** - 简单易用

### 域名配置

1. 在 Vercel 添加自定义域名
2. 配置 DNS 记录
3. 启用 HTTPS (自动)

---

## 监控和维护

### 日志查看

```bash
# Vercel 日志
vercel logs

# Railway 日志
# 在 Dashboard 查看
```

### 性能监控

- 使用 Vercel Analytics
- 集成 Sentry 错误追踪
- 设置 uptime 监控 (UptimeRobot / Pingdom)

### 备份策略

- 数据库自动备份 (大多数托管服务提供)
- 定期导出重要数据
- 版本控制代码和 schema

---

## 常见问题

### Q: 部署后出现 500 错误？

检查:
1. 环境变量是否正确配置
2. 数据库连接是否正常
3. 查看部署日志

### Q: Webhook 不工作？

确保:
1. Webhook URL 是公开的 (不是 localhost)
2. Stripe 中的 webhook URL 正确
3. Webhook 签名密钥正确

### Q: 如何回滚部署？

```bash
# Vercel 回滚到上一个版本
vercel rollback
```

---

## 部署检查清单

- [ ] 所有环境变量已配置
- [ ] 数据库已迁移
- [ ] Clerk 已切换到生产模式
- [ ] Stripe 已切换到生产模式
- [ ] Webhook 已配置
- [ ] 自定义域名已设置
- [ ] HTTPS 已启用
- [ ] 监控已设置
- [ ] 备份策略已配置

---

## 下一步

部署完成后:
1. 测试所有功能
2. 创建用户文档
3. 设置客户支持渠道
4. 开始营销推广

祝部署顺利！🚀
