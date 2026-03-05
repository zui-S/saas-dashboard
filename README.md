# 📊 SaaS Dashboard - Next.js 15 + TypeScript + Stripe

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Prisma](https://img.shields.io/badge/Prisma-5.22-blue?logo=prisma)](https://www.prisma.io)
[![Stripe](https://img.shields.io/badge/Stripe-Payments-635bff?logo=stripe)](https://stripe.com)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

> A real-world SaaS dashboard with auth, payments, and analytics. Built with Next.js 15, TypeScript, Prisma, and Stripe.

---

## What This Is

This is a production-ready SaaS dashboard that I built to learn modern full-stack development. It handles everything you'd expect from a real SaaS product:

- User authentication (Clerk)
- Subscription payments (Stripe)
- Data visualization (Recharts)
- Multi-team support
- Responsive design

I've used this as a starting point for several client projects. Feel free to use it for your own projects or as a learning resource.

---

## Quick Start

### What You'll Need

Before running this locally, you'll need:

- Node.js 18+ installed
- A PostgreSQL database (I use Supabase for development)
- A Stripe account (free tier works fine)
- A Clerk account (free tier works fine)

### Getting It Running

```bash
# Clone the repo
git clone https://github.com/zui-S/saas-dashboard.git
cd saas-dashboard

# Install dependencies
npm install

# Set up your environment variables
cp .env.example .env.local

# Edit .env.local and add your keys:
# - DATABASE_URL (your PostgreSQL connection string)
# - CLERK_SECRET_KEY and NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
# - STRIPE_SECRET_KEY and NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
# - STRIPE_WEBHOOK_SECRET

# Set up the database
npx prisma generate
npx prisma db push
npx prisma db seed

# Start the dev server
npm run dev
```

Head over to http://localhost:3000 and you should see it running.

---

## What's Under the Hood

### Tech Stack

**Frontend:**
- Next.js 15 with App Router
- TypeScript (strict mode)
- Tailwind CSS for styling
- Radix UI for components
- Recharts for data viz

**Backend:**
- Next.js Server Actions for mutations
- Prisma ORM for database
- PostgreSQL for data storage
- Clerk for authentication
- Stripe for payments

**Infrastructure:**
- Deployed on Vercel (recommended)
- Database on Supabase/Railway/Neon
- Stripe webhooks for payment events

### Project Layout

```
saas-dashboard/
├── app/                          # Next.js app router pages
│   ├── (auth)/                   # Login/signup pages
│   ├── (dashboard)/              # Protected dashboard pages
│   ├── (marketing)/              # Public landing pages
│   └── api/                      # API routes and webhooks
│
├── components/                   # React components
│   ├── dashboard/                # Dashboard-specific components
│   └── ui/                       # Reusable UI components
│
├── lib/                          # Utility functions
│   ├── auth.ts                   # Clerk auth helpers
│   ├── db.ts                     # Prisma client
│   ├── stripe.ts                 # Stripe setup
│   └── utils.ts                  # General helpers
│
├── prisma/                       # Database schema
│   ├── schema.prisma             # Data models
│   └── seed.ts                   # Sample data
│
└── docs/                         # Documentation
    ├── development.md            # Dev setup guide
    ├── deployment.md             # Production deployment
    ├── database.md               # Database schema docs
    ├── api.md                    # API reference
    └── business.md               # Pricing and business logic
```

---

## Features Worth Mentioning

### Authentication

I went with Clerk because it's way easier than rolling your own auth. You get:
- Email/password login out of the box
- Social login (Google, GitHub, etc.)
- Password reset flows
- Protected routes via middleware

### Payments

Stripe integration includes:
- Three pricing tiers (Free, Pro, Enterprise)
- Stripe Checkout for secure payments
- Customer portal for subscription management
- Webhook handling for payment events
- Automatic prorating for plan changes

### Multi-tenant Architecture

The database supports teams:
- Users can belong to teams
- Teams have separate data
- Role-based access (Admin/Member)
- Perfect for B2B SaaS

### Data Visualization

The dashboard shows:
- Revenue tracking over time
- User metrics and growth
- Recent activity feed
- Custom date range selection

---

## Database Schema

Here's what the database looks like:

**Users** - Store user info synced from Clerk
**Subscriptions** - Track Stripe subscription status
**Teams** - Support for multi-tenant setup
**TeamMembers** - Team membership and roles
**Metrics** - Analytics data for dashboards

Check out `docs/database.md` for the full schema.

---

## Deployment

### Easiest: Vercel

```bash
npm i -g vercel
vercel
```

That's it. Vercel auto-detects Next.js and deploys it.

Just remember to add your environment variables in the Vercel dashboard:
- DATABASE_URL
- CLERK_SECRET_KEY
- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
- STRIPE_SECRET_KEY
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
- STRIPE_WEBHOOK_SECRET

### Database Options

For production, I recommend:
- **Vercel Postgres** - Easiest, integrated with Vercel
- **Supabase** - Free tier, great DX
- **Neon** - Serverless Postgres, generous free tier
- **Railway** - Simple setup, affordable

See `docs/deployment.md` for detailed deployment instructions.

---

## Common Issues

### "Module not found" errors
Run `npm install` again and make sure node_modules exists.

### Database connection errors
Double-check your DATABASE_URL in .env.local. Make sure your PostgreSQL database is running and accessible.

### Clerk authentication not working
Verify both CLERK_SECRET_KEY and NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY are set correctly. The publishable key starts with `pk_test_` or `pk_live_`.

### Stripe webhook not firing
Make sure STRIPE_WEBHOOK_SECRET is set. For local testing, use the Stripe CLI: `stripe listen --forward-to localhost:3000/api/webhooks/stripe`

---

## What I'd Add Next

If I had more time, here's what I'd build:

- [ ] Email notifications (SendGrid or Resend)
- [ ] Export data to CSV/PDF
- [ ] Dark mode toggle
- [ ] More chart types in the dashboard
- [ ] Advanced filtering and date ranges
- [ ] API rate limiting
- [ ] Admin dashboard for managing users

---

## Commercial Use

### Personal Projects - Free

Go ahead and use this for:
- Learning Next.js
- Building your own projects
- Portfolio pieces
- Client work (with attribution)

### Commercial License - $3,000-10,000

If you want to use this as a white-label solution or resell it, I offer commercial licenses that include:
- Production deployment rights
- Remove attribution requirement
- Priority support via email
- Custom feature development available

**Interested?** Email me at ginoshaw1991@hotmail.com

---

## Questions? Issues?

- **Found a bug?** Open an issue on GitHub
- **Have a question?** Email me at ginoshaw1991@hotmail.com
- **Want to contribute?** Pull requests are welcome!

---

## Thanks

This project was built with some amazing tools:

- [Next.js](https://nextjs.org) - The React framework
- [Prisma](https://prisma.io) - Makes databases bearable
- [Stripe](https://stripe.com) - Payments without the headache
- [Clerk](https://clerk.com) - Auth that just works
- [Recharts](https://recharts.org) - Beautiful charts
- [Radix UI](https://radix-ui.com) - Accessible components
- [Tailwind CSS](https://tailwindcss.com) - CSS that makes sense

---

**Built with ☕ and TypeScript by zui-S**

**Contact**: ginoshaw1991@hotmail.com

**GitHub**: https://github.com/zui-S/saas-dashboard
