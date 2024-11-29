'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'

interface ToastProps {
  message: string
  type: 'success' | 'error'
  onClose: () => void
}

const Toast = ({ message, type, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000) // Auto-dismiss after 5 seconds
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
      } text-white flex items-center gap-2`}
    >
      {message}
      <button
        onClick={onClose}
        className="ml-2 hover:opacity-80 transition-opacity"
      >
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  )
}

export default Toast