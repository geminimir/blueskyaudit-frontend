import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-10-28.acacia'
})

export async function POST(request: Request) {
  try {
    const { sessionId } = await request.json()
    
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    
    return NextResponse.json({ session })
  } catch (error) {
    console.error('Session verification failed:', error)
    return NextResponse.json(
      { error: 'Failed to verify session' },
      { status: 500 }
    )
  }
} 