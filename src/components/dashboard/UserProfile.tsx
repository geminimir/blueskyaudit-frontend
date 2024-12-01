'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ChevronDown, 
  Settings, 
  LogOut, 
  User,
  Bell,
  HelpCircle,
  Building2,
  Shield 
} from 'lucide-react'

type UserProfileProps = {
  user?: {
    name: string;
    role: string;
    email: string;
    avatar?: string;
    organization?: string;
  }
}

export function UserProfile({ 
  user = {
    name: 'Sarah Chen',
    role: 'Engineering Manager',
    email: 'sarah@company.com',
    organization: 'TechCorp',
    avatar: '/avatars/default.png'
  }
}: UserProfileProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center gap-3 group rounded-lg p-2 hover:bg-gray-50 transition-colors"
        aria-expanded={isMenuOpen}
        aria-haspopup="true"
        aria-label="User menu"
      >
        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gray-100 group-hover:border-indigo-100 transition-colors">
          <Image
            src={user.avatar || '/avatars/default.svg'}
            alt={`${user.name}'s profile`}
            width={40}
            height={40}
            className="object-cover"
            priority
          />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full" />
        </div>
        <div className="text-left">
          <h2 className="text-sm font-semibold text-gray-900 group-hover:text-gray-700">
            {user.name}
          </h2>
          <p className="text-xs text-gray-500 group-hover:text-gray-600">
            {user.role}
          </p>
        </div>
        <ChevronDown 
          className={`w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-transform duration-200 ${
            isMenuOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
          role="menu"
        >
          {/* User Info Section */}
          <div className="px-4 py-2 border-b border-gray-100">
            <p className="text-xs text-gray-500">{user.email}</p>
            <div className="flex items-center gap-1 mt-1">
              <Building2 className="w-3 h-3 text-gray-400" />
              <p className="text-xs text-gray-500">{user.organization}</p>
            </div>
          </div>

          {/* Main Menu Items */}
          <div className="py-1">
            <Link
              href="/profile"
              className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
              role="menuitem"
            >
              <User className="w-4 h-4" />
              Profile
            </Link>
            <Link
              href="/settings"
              className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
              role="menuitem"
            >
              <Settings className="w-4 h-4" />
              Settings
            </Link>
            <Link
              href="/notifications"
              className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
              role="menuitem"
            >
              <Bell className="w-4 h-4" />
              Notifications
            </Link>
          </div>

          {/* Support Section */}
          <div className="py-1 border-t border-gray-100">
            <Link
              href="/help"
              className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
              role="menuitem"
            >
              <HelpCircle className="w-4 h-4" />
              Help & Support
            </Link>
            <Link
              href="/privacy"
              className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
              role="menuitem"
            >
              <Shield className="w-4 h-4" />
              Privacy & Security
            </Link>
          </div>

          {/* Sign Out */}
          <div className="py-1 border-t border-gray-100">
            <button
              onClick={() => {/* Add sign out logic */}}
              className="w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
              role="menuitem"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
