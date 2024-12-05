'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold text-gray-900">
                            BlueSkyAudit
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center">
                        <Link
                            href="https://bsky.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 hover:opacity-80 transition-opacity"
                        >
                            <Image 
                                src="/logos/bluesky.svg" 
                                alt="Open in Bluesky" 
                                width={32} 
                                height={32}
                            />
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-gray-600 hover:text-gray-900"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden border-t border-gray-100 bg-white"
                >
                    <div className="space-y-1 px-6 py-4 flex justify-center">
                        <Link
                            href="https://bsky.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 hover:opacity-80 transition-opacity"
                        >
                            <Image 
                                src="/logos/bluesky.svg" 
                                alt="Open in Bluesky" 
                                width={32} 
                                height={32}
                            />
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    )
}
