# Development Guide

This guide covers the development workflow for the SaaS Dashboard project.

## Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env.local

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push Prisma schema to database
- `npm run db:seed` - Seed database with sample data

## Code Style

- TypeScript strict mode enabled
- ESLint with Next.js recommended config
- Prettier for code formatting
- Tailwind CSS for styling

## Component Structure

Components follow this pattern:
```tsx
'use client'

import React from 'react'

interface Props {
  // Props definition
}

export function Component({}: Props) {
  return (
    // JSX
  )
}
```

## Server Actions

All data mutations use Server Actions:
```ts
async function serverAction(formData: FormData) {
  'use server'
  // Server-side logic
}
```

## Testing

Run tests with:
```bash
npm test
```

## Debugging

- Use React DevTools for component inspection
- Check Network tab for API calls
- Review server logs in terminal

---

**Contact**: ginoshaw1991@hotmail.com
