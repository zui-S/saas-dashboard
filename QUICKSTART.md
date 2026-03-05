# 快速开始指南

欢迎使用 SaaS 仪表盘项目！本指南将帮助你在 5 分钟内完成设置并开始开发。

## 🚀 5 分钟快速启动

### 步骤 1: 安装依赖 (1 分钟)

```bash
cd "团队知识库/03-来财官/全栈实战项目/SaaS 仪表盘"
pnpm install
```

### 步骤 2: 配置环境变量 (1 分钟)

```bash
# 复制示例配置
cp .env.example .env.local
```

**快速测试配置 (使用示例密钥):**
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/saas_dashboard"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_xxx"
CLERK_SECRET_KEY="sk_test_xxx"
STRIPE_SECRET_KEY="sk_test_xxx"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_xxx"
STRIPE_WEBHOOK_SECRET="whsec_xxx"
STRIPE_PRO_PRICE_ID="price_xxx"
STRIPE_ENTERPRISE_PRICE_ID="price_xxx"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

> ⚠️ **注意**: 这些是示例密钥，实际使用需要申请真实密钥

### 步骤 3: 获取真实密钥 (2 分钟)

#### Clerk (认证)
1. 访问 https://clerk.com
2. 注册账号
3. 创建新应用
4. 复制 API Keys 到 `.env.local`

#### Stripe (支付)
1. 访问 https://dashboard.stripe.com/test/apikeys
2. 复制测试密钥到 `.env.local`
3. 创建测试产品获取 Price ID

### 步骤 4: 初始化数据库 (1 分钟)

```bash
# 本地 PostgreSQL 连接字符串示例:
# postgresql://用户名：密码@localhost:5432/数据库名

# 推送数据库结构
pnpm db:push
```

### 步骤 5: 启动开发服务器

```bash
pnpm dev
```

访问 http://localhost:3000 🎉

---

## 📦 使用 Docker 快速设置数据库 (可选)

如果没有本地 PostgreSQL:

```bash
# 使用 Docker 运行 PostgreSQL
docker run -d \
  --name saas-db \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=saas_dashboard \
  -p 5432:5432 \
  postgres:15

# 然后运行
pnpm db:push
```

---

## 🎯 下一步

### 开发功能

1. **添加新页面**: 在 `app/(dashboard)/dashboard/` 下创建
2. **添加新组件**: 在 `components/` 下创建
3. **添加 API**: 在 `app/api/` 下创建

### 学习资源

- [开发指南](./docs/development.md) - 详细开发文档
- [API 文档](./docs/api.md) - 所有 API 端点
- [数据库设计](./docs/database.md) - 数据模型说明
- [部署指南](./docs/deployment.md) - 上线部署步骤

### 常见问题

**Q: 遇到 "module not found" 错误？**
```bash
pnpm install
```

**Q: 数据库连接失败？**
检查 `DATABASE_URL` 是否正确，确保 PostgreSQL 正在运行

**Q: Clerk 认证不工作？**
确认 Clerk 密钥正确，检查 `middleware.ts` 配置

---

## 📞 需要帮助？

- 查看 [完整文档](./docs/)
- 检查 GitHub Issues
- 联系技术支持

祝你开发顺利！💪
