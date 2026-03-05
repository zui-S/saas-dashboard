# Deployment Guide

How to put this into production.

## Quick Deploy: Vercel

Vercel is the easiest way to deploy Next.js apps. Here's how:

### Step 1: Push to GitHub

Make sure your code is on GitHub:

```bash
git push origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. That's it - Vercel deploys automatically

### Step 3: Add Environment Variables

In your Vercel project settings, add these:

```
DATABASE_URL=postgresql://...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### Step 4: Deploy to Production

```bash
vercel --prod
```

Or use the Vercel dashboard to promote from preview to production.

---

## Database Setup

You need a PostgreSQL database. Here are good options:

### Vercel Postgres (Easiest)

- Built into Vercel
- One-click setup
- Free tier available

```bash
vercel postgres create
```

### Supabase (Recommended)

- Free tier: 500MB database
- Great developer experience
- Built-in admin panel

1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Get connection string from Settings → Database
4. Add to `DATABASE_URL`

### Neon (Serverless)

- Free tier: 500MB storage
- Serverless architecture
- Branching support

1. Go to [neon.tech](https://neon.tech)
2. Create new project
3. Copy connection string
4. Add to `DATABASE_URL`

### Railway

- Simple setup
- $5/month for database
- Good performance

1. Go to [railway.app](https://railway.app)
2. Create new PostgreSQL database
3. Get connection string
4. Add to `DATABASE_URL`

---

## Stripe Setup

### Get Your Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Go to Developers → API Keys
3. Copy `Secret key` → `STRIPE_SECRET_KEY`
4. Copy `Publishable key` → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

### Set Up Webhooks

For production:

1. Go to Developers → Webhooks
2. Add endpoint: `https://your-domain.com/api/webhooks/stripe`
3. Select events:
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
4. Copy webhook secret → `STRIPE_WEBHOOK_SECRET`

For local testing, use Stripe CLI:

```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Login
stripe login

# Forward webhooks locally
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

---

## Clerk Setup

### Get Your Keys

1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Go to API Keys
3. Copy `Secret Key` → `CLERK_SECRET_KEY`
4. Copy `Publishable Key` → `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`

### Configure OAuth (Optional)

To enable social login:

1. Go to User & Authentication → Social Connections
2. Enable Google, GitHub, etc.
3. Follow the setup instructions for each provider

---

## Alternative Deployment Options

### Railway

1. Connect GitHub repository
2. Railway auto-detects Next.js
3. Add environment variables
4. Deploy happens automatically

### Render

1. Create new "Web Service"
2. Connect GitHub
3. Build command: `npm run build`
4. Start command: `npm start`
5. Add environment variables

### Self-Hosted (VPS)

```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone repo
git clone https://github.com/zui-S/saas-dashboard.git
cd saas-dashboard

# Install dependencies
npm install

# Build
npm run build

# Run with PM2
npm install -g pm2
pm2 start npm --name "saas-dashboard" -- start
pm2 save
pm2 startup
```

Use Nginx as reverse proxy:

```nginx
server {
  listen 80;
  server_name your-domain.com;

  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

---

## Post-Deployment Checklist

After deploying, verify:

- [ ] Site loads at your domain
- [ ] Authentication works (try signing up)
- [ ] Database connection works
- [ ] Stripe payments work (test mode)
- [ ] Webhooks are being received
- [ ] Environment variables are set correctly
- [ ] HTTPS is enabled (automatic on Vercel)
- [ ] Error tracking is set up (optional)

---

## Monitoring

### Vercel Analytics

If deployed on Vercel, analytics are automatic:
- Page views
- Performance metrics
- Core Web Vitals

### Error Tracking

I recommend setting up Sentry:

```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

### Uptime Monitoring

Use [UptimeRobot](https://uptimerobot.com) (free) to monitor your site:
- Check every 5 minutes
- Get email alerts when down
- Public status page

---

## Troubleshooting

### "Build failed" on Vercel

Check the build logs. Common issues:
- Missing environment variables
- TypeScript errors
- Prisma schema errors

### Database connection errors

- Verify DATABASE_URL is correct
- Make sure database allows connections from Vercel IPs
- Check if database is running out of connections

### Stripe webhooks not working

- Verify webhook URL is correct
- Check webhook secret matches
- Look at Stripe Dashboard → Webhooks → Events

---

## Questions?

Email me at ginoshaw1991@hotmail.com if you run into issues.

Good luck with your deployment! 🚀
