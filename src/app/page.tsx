'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check, ChevronDown, Users2, Code2, Target } from 'lucide-react'
import Toast from '@/components/Toast'
import HeroSection from '@/components/landing/HeroSection'
import HowItWorks from '@/components/landing/HowItWorks'
import Features from '@/components/landing/Features'
import UseCases from '@/components/landing/UseCases'
import Faq from '@/components/landing/Faq'
import Footer from '@/components/landing/Footer'

// Types for form handling
type WaitlistFormData = {
  email: string
  status: 'idle' | 'loading' | 'processing-payment' | 'success' | 'error'
  message?: string
}

export default function Home() {
  const [formData, setFormData] = useState<WaitlistFormData>({
    email: '',
    status: 'idle'
  })
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null)

  const handleJoinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormData(prev => ({ ...prev, status: 'loading' }))

    try {
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!formData.email || !emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address')
      }

      // Send to API
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email }),
      })

      if (!response.ok) {
        throw new Error('Failed to join waitlist. Please try again.')
      }

      // Track signup event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'waitlist_signup', {
          email: formData.email,
        })
      }

      // Success
      setFormData(prev => ({
        ...prev,
        status: 'success',
        email: ''
      }))
      setToast({
        message: 'Successfully joined the waitlist! We\'ll be in touch soon.',
        type: 'success'
      })

    } catch (error) {
      console.error('Waitlist error:', error)
      setFormData(prev => ({
        ...prev,
        status: 'error'
      }))
      setToast({
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
        type: 'error'
      })
    } finally {
      setFormData(prev => ({ ...prev, status: 'idle' }))
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <HeroSection 
        formData={formData}
        onEmailChange={(email) => setFormData(prev => ({ ...prev, email }))}
        onSubmit={handleJoinWaitlist}
      />
      <HowItWorks />
      <UseCases />
      <Features />
      <Faq />
      <Footer 
        formData={formData}
        onEmailChange={(email) => setFormData(prev => ({ ...prev, email }))}
        onSubmit={handleJoinWaitlist}
      />

      {/* Add Toast at the end */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  )
}
