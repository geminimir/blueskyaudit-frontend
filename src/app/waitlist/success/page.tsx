'use client'

import { useEffect, useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Check, Loader2 } from 'lucide-react'

function SuccessContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isProcessing, setIsProcessing] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true;

    async function processPayment() {
      try {
        const sessionId = searchParams.get('session_id')
        if (!sessionId) throw new Error('No session ID found')

        // Verify the session with Stripe
        const response = await fetch('/api/verify-session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId })
        })

        const { session } = await response.json()
        if (!session || session.payment_status !== 'paid') {
          throw new Error('Payment not confirmed')
        }

        // Only proceed if component is still mounted
        if (mounted) {
          // Create waitlist entry
          await fetch('/api/waitlist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: session.customer_email,
              status: 'confirmed'
            })
          })

          setIsProcessing(false)

          // Redirect after success
          setTimeout(() => {
            if (mounted) {
              router.push('/')
            }
          }, 3000)
        }
      } catch (err) {
        if (mounted) {
          setError((err as Error).message)
          setIsProcessing(false)
        }
      }
    }

    processPayment()

    // Cleanup function
    return () => {
      mounted = false
    }
  }, [router, searchParams])

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">Error: {error}</p>
          <button 
            onClick={() => router.push('/')}
            className="mt-4 text-blue-600 hover:underline"
          >
            Return home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
          {isProcessing ? (
            <Loader2 className="h-6 w-6 text-green-600 animate-spin" />
          ) : (
            <Check className="h-6 w-6 text-green-600" />
          )}
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {isProcessing ? 'Confirming Payment...' : 'Payment Successful!'}
        </h1>
        <p className="text-gray-600">
          {isProcessing 
            ? 'Please wait while we confirm your payment...'
            : "Thank you for joining the waitlist. We'll be in touch soon!"}
        </p>
      </div>
    </div>
  )
}

export default function Success() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
            <Loader2 className="h-6 w-6 text-green-600 animate-spin" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Loading...</h1>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  )
} 