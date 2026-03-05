# Deployment Guide

This guide covers deployment options for the SaaS Dashboard.

## Vercel Deployment (Recommended)

### Prerequisites
- Vercel account (free tier available)
- GitHub repository connected
- Environment variables configured

### Steps

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Configure Environment Variables**
   
   In Vercel dashboard, add:
   - `DATABASE_URL` - PostgreSQL connection string
   - `CLERK_SECRET_KEY`
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_WEBHOOK_SECRET`

4. **Production Deployment**
   ```bash
   vercel --prod
   ```

## Alternative Platforms

### Railway

1. Connect GitHub repository
2. Add environment variables
3. Deploy automatically on push

### Render

1. Create new Web Service
2. Connect repository
3. Configure build command: `npm run build`
4. Configure start command: `npm start`

## Database Setup

### PostgreSQL Options

- **Vercel Postgres** - Integrated with Vercel
- **Supabase** - Free tier available
- **Railway** - Easy setup
- **Neon** - Serverless Postgres

## Stripe Configuration

1. Create Stripe account
2. Get API keys from dashboard
3. Configure webhook endpoint: `/api/webhooks/stripe`
4. Set webhook secret in environment

## Clerk Configuration

1. Create Clerk application
2. Get keys from API keys page
3. Configure OAuth providers (optional)
4. Set up webhook endpoints (optional)

## Post-Deployment Checklist

- [ ] All environment variables set
- [ ] Database migrations applied
- [ ] Stripe webhook configured
- [ ] Clerk authentication working
- [ ] HTTPS enabled
- [ ] Custom domain configured (optional)

## Monitoring

- Use Vercel Analytics for performance
- Check logs in dashboard
- Set up error tracking (Sentry recommended)

---

**Contact**: ginoshaw1991@hotmail.com
