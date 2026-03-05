# 📊 SaaS Dashboard - Next.js 15 + TypeScript + Stripe

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Prisma](https://img.shields.io/badge/Prisma-5.22-blue?logo=prisma)](https://www.prisma.io)
[![Stripe](https://img.shields.io/badge/Stripe-Payments-635bff?logo=stripe)](https://stripe.com)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

> 专业级 SaaS 数据仪表盘 - 包含用户认证、数据可视化、订阅支付、多租户架构

---

## ✨ 功能特性

### 核心功能
- 🔐 **用户认证** - Clerk 集成，支持邮箱/社交登录
- 📊 **数据仪表盘** - Recharts 实时数据可视化
- 💳 **订阅支付** - Stripe 完整支付流程
- 👥 **多租户架构** - 团队数据隔离
- 📱 **响应式设计** - 完美支持移动端
- 🎨 **现代 UI** - Tailwind CSS + Radix UI

### 技术亮点
- Next.js 15 App Router
- TypeScript 严格模式
- Prisma ORM + PostgreSQL
- Server Actions 数据处理
- Stripe Webhooks 异步处理
- SEO 优化

---

## 🚀 快速开始

### 环境要求
- Node.js 18+
- PostgreSQL 数据库
- Stripe 账号
- Clerk 账号

### 安装步骤

```bash
# 1. 克隆项目
git clone https://github.com/zui-S/saas-dashboard.git
cd saas-dashboard

# 2. 安装依赖
npm install

# 3. 复制环境变量
cp .env.example .env.local

# 4. 配置环境变量
# 编辑 .env.local 填入你的配置

# 5. 初始化数据库
npx prisma generate
npx prisma db push
npx prisma db seed

# 6. 启动开发服务器
npm run dev
```

访问 http://localhost:3000

---

## 📁 项目结构

```
saas-dashboard/
├── app/                    # Next.js App Router
│   ├── (auth)/            # 认证页面 (登录/注册)
│   ├── (dashboard)/       # 仪表盘页面
│   ├── (marketing)/       # 营销页面
│   ├── api/               # API 路由
│   └── layout.tsx         # 根布局
├── components/            # React 组件
│   ├── ui/               # UI 基础组件
│   ├── charts/           # 图表组件
│   └── dashboard/        # 仪表盘组件
├── lib/                   # 工具函数
│   ├── db.ts             # 数据库连接
│   ├── stripe.ts         # Stripe 配置
│   └── utils.ts          # 通用工具
├── prisma/               # Prisma 配置
│   ├── schema.prisma     # 数据模型
│   └── seed.ts           # 种子数据
└── middleware.ts         # 中间件
```

---

## 🛠️ 技术栈

| 类别 | 技术 |
|------|------|
| **框架** | Next.js 15 (App Router) |
| **语言** | TypeScript 5 |
| **数据库** | PostgreSQL |
| **ORM** | Prisma 5.22 |
| **认证** | Clerk |
| **支付** | Stripe |
| **图表** | Recharts |
| **UI** | Tailwind CSS + Radix UI |
| **部署** | Vercel |

---

## 📸 功能截图

### 仪表盘首页
![Dashboard](./docs/screenshots/dashboard.png)

### 数据可视化
![Analytics](./docs/screenshots/analytics.png)

### 订阅管理
![Billing](./docs/screenshots/billing.png)

### 用户认证
![Sign In](./docs/screenshots/signin.png)

---

## 💰 商业授权

### 个人使用 (免费)
- ✅ 学习使用
- ✅ 个人项目
- ✅ 修改源码

### 商业使用 ($3,000-10,000)
- ✅ 生产环境部署
- ✅ 客户项目使用
- ✅ 技术支持
- ✅ 定制开发

**联系**: ginoshaw1991@hotmail.com

---

## 🔒 安全性

- ✅ Clerk 认证 (OAuth 2.0)
- ✅ Stripe PCI DSS 合规
- ✅ Prisma SQL 注入防护
- ✅ Server Actions 服务端验证
- ✅ 多租户数据隔离

---

## 📊 性能指标

| 指标 | 得分 |
|------|------|
| Lighthouse Performance | 95+ |
| First Contentful Paint | <1s |
| Time to Interactive | <2s |
| Bundle Size | ~100KB |

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

---

## 📝 更新日志

### v1.0.0 (2026-03-05)
- ✅ 初始版本发布
- ✅ Next.js 15 集成
- ✅ Stripe 支付完成
- ✅ Clerk 认证完成
- ✅ 数据仪表盘完成

---

## 📧 联系方式

- **作者**: zui-S
- **邮箱**: ginoshaw1991@hotmail.com
- **项目**: SaaS Dashboard
- **定价**: $3,000-10,000 (商业授权)

---

## 📄 许可证

MIT License - 查看 [LICENSE](LICENSE) 文件

---

## 🙏 致谢

感谢以下开源项目：
- [Next.js](https://nextjs.org)
- [Prisma](https://prisma.io)
- [Stripe](https://stripe.com)
- [Clerk](https://clerk.com)
- [Recharts](https://recharts.org)
- [Radix UI](https://radix-ui.com)

---

**⭐ 如果这个项目对你有帮助，请给个 Star！**
