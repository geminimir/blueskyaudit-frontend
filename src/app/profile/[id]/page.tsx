'use client'

import { useParams } from 'next/navigation'
import Profile from '@/components/profile/Profile'

export default function ProfilePage() {
    const params = useParams()
    const handle = params.id as string

    console.log('ProfilePage handle:', handle)

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-[#eef7ff] mt-12">
            <Profile handle={handle} />
        </div>
    )
}
