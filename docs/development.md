# Development Guide

How to work with this codebase.

## Getting Started

### First Time Setup

```bash
# Clone and install
git clone https://github.com/zui-S/saas-dashboard.git
cd saas-dashboard
npm install

# Set up environment
cp .env.example .env.local
# Edit .env.local with your keys

# Initialize database
npx prisma generate
npx prisma db push
npx prisma db seed

# Start dev server
npm run dev
```

### Daily Development

```bash
# Start dev server (with hot reload)
npm run dev

# Run linting
npm run lint

# Format code
npx prettier --write .
```

## Available Scripts

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start dev server at localhost:3000 |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run db:push` | Sync Prisma schema to database |
| `npm run db:seed` | Add sample data to database |
| `npm run db:studio` | Open Prisma Studio (visual DB editor) |

## Code Style

### TypeScript

We use strict mode. No `any` types unless absolutely necessary.

```tsx
// ✅ Good
interface Props {
  userId: string
  onLoad?: () => void
}

// ❌ Avoid
function Component(props: any) {}
```

### Components

Server Components by default, Client Components when needed:

```tsx
// Server Component (default)
export async function Dashboard() {
  const data = await fetchData()
  return <div>{data}</div>
}

// Client Component (when you need interactivity)
'use client'

export function InteractiveChart() {
  const [state, setState] = useState()
  return <button onClick={() => setState()}>Click</button>
}
```

### File Naming

- Components: `PascalCase.tsx` (e.g., `UserProfile.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Pages: `kebab-case.tsx` in route folders

## Working with Server Actions

All data mutations use Server Actions:

```ts
// app/actions.ts
'use server'

export async function updateProfile(formData: FormData) {
  const name = formData.get('name') as string
  
  // Validate
  if (!name) throw new Error('Name is required')
  
  // Update database
  await prisma.user.update({ ... })
  
  // Revalidate cache
  revalidatePath('/dashboard')
}
```

Call from Client Components:

```tsx
'use client'

import { updateProfile } from '@/app/actions'

export function ProfileForm() {
  return (
    <form action={updateProfile}>
      <input name="name" />
      <button type="submit">Save</button>
    </form>
  )
}
```

## Database Changes

When you modify `prisma/schema.prisma`:

```bash
# Generate Prisma Client
npx prisma generate

# Push changes to database (development)
npx prisma db push

# Create migration (production)
npx prisma migrate dev --name add_user_field
```

## Debugging Tips

### React DevTools

Install the [React DevTools](https://react.dev/learn/react-developer-tools) extension to inspect components.

### Network Tab

Check the Network tab in your browser to see:
- API calls
- Server Actions
- Stripe webhook events

### Server Logs

Dev server logs show:
- Route requests
- Server Action calls
- Database queries (with Prisma logging)

Enable verbose Prisma logging in `.env.local`:

```
PRISMA_DMMF=1
```

## Common Tasks

### Add a New Page

1. Create folder in `app/`: `app/my-page/page.tsx`
2. Add component:
   ```tsx
   export default function MyPage() {
     return <h1>My Page</h1>
   }
   ```
3. Visit `/my-page`

### Add a New API Route

1. Create file: `app/api/my-route/route.ts`
2. Add handler:
   ```ts
   export async function GET() {
     return Response.json({ message: 'Hello' })
   }
   ```

### Add a New Component

1. Create file: `components/my-component.tsx`
2. Export component:
   ```tsx
   export function MyComponent() {
     return <div>My Component</div>
   }
   ```
3. Import where needed:
   ```tsx
   import { MyComponent } from '@/components/my-component'
   ```

## Testing

Run the test suite:

```bash
npm test
```

Write tests in `*.test.ts` files next to the code they test.

## Need Help?

- Check the [Next.js docs](https://nextjs.org/docs)
- Read `docs/database.md` for schema details
- Email ginoshaw1991@hotmail.com

---

Happy coding! 🚀
