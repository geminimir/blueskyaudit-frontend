'use client'

import { useState } from 'react'
import Toast from '@/components/Toast'
import HeroSection from '@/components/landing/HeroSection'

export default function Home() {
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null)

  return (
    <div className="min-h-screen bg-white">
      <HeroSection/>

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
