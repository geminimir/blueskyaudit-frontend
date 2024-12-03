'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold text-gray-900">
                            BlueBrandly
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:gap-x-8">
                        <a href="/#howitworks" className="text-sm font-semibold text-gray-600 hover:text-gray-900">
                            How it works
                        </a>
                        <a href="/#usecases" className="text-sm font-semibold text-gray-600 hover:text-gray-900">
                            Use cases
                        </a>
                        <a href="/#features" className="text-sm font-semibold text-gray-600 hover:text-gray-900">
                            Features
                        </a>
                        <Link href="/blog" className="text-sm font-semibold text-gray-600 hover:text-gray-900">
                            Blog
                        </Link>
                        <a href="/#faq" className="text-sm font-semibold text-gray-600 hover:text-gray-900">
                            FAQ
                        </a>
                        <Link
                            href="/">
                            <span
                                className="flex items-center rounded-lg bg-[#0185FF] px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 text-center"
                            >
                                Join Waitlist
                            </span>
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
                    <div className="space-y-1 px-6 py-4">
                        <a href="/#features" className="block py-2 text-base font-medium text-gray-600 hover:text-gray-900">
                            Features
                        </a>
                        <a href="/#examples" className="block py-2 text-base font-medium text-gray-600 hover:text-gray-900">
                            Examples
                        </a>
                        <Link href="/blog" className="block py-2 text-base font-medium text-gray-600 hover:text-gray-900">
                            Blog
                        </Link>
                        <a href="/#faq" className="block py-2 text-base font-medium text-gray-600 hover:text-gray-900">
                            FAQ
                        </a>
                        <Link
                            href="/">
                            <span
                                className="flex items-center justify-center rounded-lg bg-[#6366F1] px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 text-center"
                            >
                                Join Waitlist
                            </span>
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    )
}
