# Database Schema

This document describes the database schema and data models.

## Overview

The application uses PostgreSQL with Prisma ORM for type-safe database access.

## Data Models

### User

Represents a user in the system.

```prisma
model User {
  id             String    @id @default(cuid())
  clerkId        String    @unique
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

### Subscription

Manages user subscriptions and billing.

```prisma
model Subscription {
  id             String    @id @default(cuid())
  userId         String    @unique
  user           User      @relation(fields: [userId], references: [id])
  
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

### Team

Supports multi-tenant architecture.

```prisma
model Team {
  id             String    @id @default(cuid())
  name           String
  createdAt      DateTime  @default(now())
  updatedAt      DateTime  @updatedAt
  
  users          User[]
  members        TeamMember[]
  metrics        Metric[]
}
```

### TeamMember

Manages team membership and roles.

```prisma
model TeamMember {
  id             String    @id @default(cuid())
  userId         String
  user           User      @relation(fields: [userId], references: [id])
  teamId         String
  team           Team      @relation(fields: [teamId], references: [id])
  role           Role      @default(MEMBER)
  
  @@unique([userId, teamId])
}

enum Role {
  ADMIN
  MEMBER
}
```

### Metric

Stores analytics data.

```prisma
model Metric {
  id             String    @id @default(cuid())
  userId         String
  user           User      @relation(fields: [userId], references: [id])
  teamId         String?
  team           Team?     @relation(fields: [teamId], references: [id])
  
  name           String    // Metric name (e.g., "revenue", "users")
  value          Float     // Metric value
  date           DateTime  // Data date
  
  metadata       Json?     // Additional metadata
  
  createdAt      DateTime  @default(now())
  
  @@index([userId, date])
  @@index([teamId, date])
}
```

## Relationships

```
User ──┬── Subscription (1:1)
       ├── Metric (1:N)
       ├── Team (N:1 via teamId)
       └── TeamMember (1:N)

Team ──┬── User (1:N)
       ├── TeamMember (1:N)
       └── Metric (1:N)
```

## Indexes

- `User.clerkId` - Unique index for Clerk integration
- `User.email` - Unique index for authentication
- `Subscription.userId` - Unique index for user subscription
- `Metric.userId` + `Metric.date` - Composite index for queries
- `Metric.teamId` + `Metric.date` - Composite index for team queries

## Migrations

Run migrations with:
```bash
npx prisma migrate dev
```

## Seeding

Seed database with sample data:
```bash
npx prisma db seed
```

## Queries

### Get user with subscription
```ts
const user = await prisma.user.findUnique({
  where: { clerkId },
  include: { subscription: true }
})
```

### Get team metrics
```ts
const metrics = await prisma.metric.findMany({
  where: { teamId, date: { gte: startDate } }
})
```

---

**Contact**: ginoshaw1991@hotmail.com
