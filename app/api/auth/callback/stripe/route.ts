import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const success = searchParams.get('success')
  
  if (success === 'true') {
    return NextResponse.redirect(new URL('/dashboard/billing?success=true', request.url))
  }
  
  return NextResponse.redirect(new URL('/dashboard', request.url))
}
