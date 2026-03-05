# 📚 SaaS 仪表盘项目索引

## 快速导航

### 🏁 开始
- [README.md](./README.md) - 项目概述
- [QUICKSTART.md](./QUICKSTART.md) - 5 分钟快速启动
- [DELIVERY.md](./DELIVERY.md) - 交付清单

### 📖 文档

#### 开发相关
- [开发指南](./docs/development.md) - 环境设置、项目结构、核心功能开发
- [API 文档](./docs/api.md) - 所有 API 端点、使用示例
- [数据库设计](./docs/database.md) - 数据模型、查询优化、迁移指南

#### 部署运维
- [部署指南](./docs/deployment.md) - Vercel/Railway/Render部署步骤
- [商业指南](./docs/business.md) - 定价策略、营销方案、收入预测

### 📂 核心文件

#### 配置文件
- `package.json` - 依赖管理
- `tsconfig.json` - TypeScript 配置
- `tailwind.config.js` - Tailwind CSS 配置
- `next.config.js` - Next.js 配置
- `.env.example` - 环境变量模板
- `middleware.ts` - 认证中间件

#### 核心代码
- `app/layout.tsx` - 根布局
- `app/(dashboard)/layout.tsx` - 仪表盘布局
- `lib/db.ts` - 数据库连接
- `lib/stripe.ts` - Stripe 配置
- `lib/auth.ts` - 认证工具
- `prisma/schema.prisma` - 数据模型

---

## 功能模块

### 1️⃣ 认证系统 (Clerk)

**文件位置**: 
- `app/(auth)/` - 认证页面
- `middleware.ts` - 路由保护
- `lib/auth.ts` - 认证工具

**功能**:
- 用户注册/登录
- 会话管理
- 路由保护
- 用户信息同步

### 2️⃣ 数据仪表盘

**文件位置**:
- `app/(dashboard)/dashboard/page.tsx` - 主页面
- `components/dashboard/` - 仪表盘组件

**功能**:
- 关键指标卡片
- 收入趋势图表
- 最近活动列表
- 实时数据更新

### 3️⃣ 订阅支付 (Stripe)

**文件位置**:
- `app/(dashboard)/dashboard/pricing/` - 定价页面
- `app/(dashboard)/dashboard/billing/` - 账单管理
- `app/api/webhooks/stripe/` - Webhook 处理
- `lib/stripe.ts` - Stripe 工具

**功能**:
- 订阅计划展示
- Stripe Checkout 集成
- 客户门户
- Webhook 自动处理

### 4️⃣ 数据库 (Prisma + PostgreSQL)

**文件位置**:
- `prisma/schema.prisma` - 数据模型
- `lib/db.ts` - Prisma 客户端

**模型**:
- User - 用户
- Subscription - 订阅
- Team - 团队
- TeamMember - 团队成员
- Metric - 指标数据

---

## 技术架构

```
┌─────────────────────────────────────────┐
│           Frontend (Next.js 15)         │
│  ┌──────────┐  ┌──────────┐  ┌───────┐ │
│  │  Pages   │  │Components│  │ Hooks │ │
│  └──────────┘  └──────────┘  └───────┘ │
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│         Backend (API Routes)            │
│  ┌──────────┐  ┌──────────┐  ┌───────┐ │
│  │  Auth    │  │  Metrics │  │ Stripe│ │
│  └──────────┘  └──────────┘  └───────┘ │
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│          Database (PostgreSQL)          │
│  ┌──────────┐  ┌──────────┐  ┌───────┐ │
│  │  Users   │  │Subscript.│  │Metrics│ │
│  └──────────┘  └──────────┘  └───────┘ │
└─────────────────────────────────────────┘

第三方服务:
- Clerk (认证)
- Stripe (支付)
- Vercel (部署)
```

---

## 开发工作流

### 添加新功能

1. **创建组件** → `components/`
2. **创建页面** → `app/(dashboard)/`
3. **添加 API** → `app/api/`
4. **更新数据库** → `prisma/schema.prisma`
5. **测试功能** → 本地验证
6. **提交代码** → Git commit

### 数据库变更

```bash
# 修改 schema.prisma
pnpm db:push          # 开发环境
pnpm db:migrate       # 创建迁移
pnpm prisma migrate deploy  # 生产环境
```

### 部署上线

```bash
# 推送到 GitHub
git push

# Vercel 自动部署
# 或手动部署
vercel --prod
```

---

## 常用命令

```bash
# 开发
pnpm dev                    # 启动开发服务器
pnpm build                  # 构建生产版本
pnpm start                  # 启动生产服务器
pnpm lint                   # 代码检查

# 数据库
pnpm db:push               # 推送 schema
pnpm db:seed               # 种子数据
pnpm db:studio             # Prisma Studio
pnpm db:migrate            # 创建迁移

# Stripe
pnpm stripe:listen         # 监听 webhook
```

---

## 项目约定

### 代码风格

- 使用 TypeScript 严格模式
- 组件使用函数式 + Hooks
- 使用 Server Components 优先
- Client Components 添加 `'use client'`

### 文件命名

- 组件：PascalCase (e.g., `RevenueChart.tsx`)
- 工具：camelCase (e.g., `utils.ts`)
- 页面：`page.tsx`
- 布局：`layout.tsx`

### 目录约定

- `(name)` - 路由组 (不影响 URL)
- `api/` - API 路由
- `components/` - React 组件
- `lib/` - 工具函数
- `prisma/` - 数据库配置

---

## 故障排查

### 常见问题速查

| 问题 | 解决方案 |
|------|---------|
| 模块未找到 | `pnpm install` |
| 数据库连接失败 | 检查 `DATABASE_URL` |
| Clerk 不工作 | 验证 API 密钥 |
| Stripe webhook 失败 | 检查签名密钥 |
| 构建失败 | 删除 `.next` 后重试 |

---

## 学习路径

### 新手路线

1. ✅ 阅读 README.md
2. ✅ 完成 QUICKSTART.md
3. ✅ 运行项目
4. ✅ 修改首页文案
5. ✅ 添加新指标卡片
6. ✅ 部署到 Vercel

### 进阶路线

1. ✅ 理解数据模型
2. ✅ 添加自定义 API
3. ✅ 集成第三方服务
4. ✅ 优化性能
5. ✅ 白标定制
6. ✅ 商业化部署

---

## 资源链接

### 官方文档

- [Next.js](https://nextjs.org/docs)
- [TypeScript](https://www.typescriptlang.org/docs)
- [Prisma](https://www.prisma.io/docs)
- [Clerk](https://clerk.com/docs)
- [Stripe](https://stripe.com/docs)
- [Recharts](https://recharts.org)

### 社区支持

- GitHub Issues
- Discord 社区
- Stack Overflow

---

**最后更新**: 2024-03-05  
**版本**: 1.0.0  
**状态**: ✅ 生产就绪
