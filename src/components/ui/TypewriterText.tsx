'use client'

import { useState, useEffect } from 'react'

export default function TypewriterText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[index])
        setIndex(index + 1)
      }, 30)

      return () => clearTimeout(timer)
    }
  }, [index, text])

  return (
    <div className="relative text-gray-600">
      <span className="invisible">{text}</span>
      <span className="absolute top-0 left-0">
        {displayedText}
      </span>
    </div>
  )
}
