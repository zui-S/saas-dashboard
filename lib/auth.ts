import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/db'

export async function getCurrentUser() {
  const { userId } = await auth()
  
  if (!userId) {
    return null
  }
  
  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    include: {
      subscription: true,
    },
  })
  
  return user
}

export async function requireUser() {
  const user = await getCurrentUser()
  
  if (!user) {
    redirect('/sign-in')
  }
  
  return user
}

export async function requireProUser() {
  const user = await requireUser()
  
  if (user.subscription?.plan === 'FREE') {
    redirect('/pricing')
  }
  
  return user
}
