import { NextResponse } from 'next/server'
import { BskyAgent } from '@atproto/api'

const agent = new BskyAgent({
    service: 'https://bsky.social'
})

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const handle = params.id
        console.log('API handle:', handle)

        // Connect to Bluesky
        await agent.login({
            identifier: process.env.BLUESKY_USERNAME!,
            password: process.env.BLUESKY_PASSWORD!
        })

        // Fetch profile data
        const profile = await agent.getProfile({ actor: handle })
        const follows = profile.data.follows
        const followers = profile.data.followers
        const posts = await agent.getAuthorFeed({ actor: handle, limit: 100 })

        // Calculate metrics
        const totalLikes = posts.data.feed.reduce((acc, post) => acc + (post.post.likeCount || 0), 0)
        const totalReposts = posts.data.feed.reduce((acc, post) => acc + (post.post.repostCount || 0), 0)
        const totalReplies = posts.data.feed.reduce((acc, post) => acc + (post.post.replyCount || 0), 0)
        const totalEngagements = totalLikes + totalReposts + totalReplies

        const averageEngagementsPerPost = posts.data.feed.length > 0 
            ? totalEngagements / posts.data.feed.length
            : 0

        const engagementRate = (followers as number > 0)
            ? ((averageEngagementsPerPost / (followers as number)) * 100).toFixed(1)
            : '0.0'

        // Calculate scores
        const activityScore = calculateActivityScore(posts.data.feed.length, profile.data.postsCount as number)
        const engagementScore = calculateEngagementScore(parseFloat(engagementRate))
        const authScore = calculateAuthScore(profile.data, followers as number)
        const badgeLevel = calculateBadgeLevel(authScore)

        return NextResponse.json({
            success: true,
            data: {
                profile: {
                    displayName: profile.data.displayName || handle,
                    description: profile.data.description || '',
                    avatar: profile.data.avatar || '/default-avatar.png',
                    banner: profile.data.banner,
                    followsCount: formatNumber(follows as number),
                    followersCount: formatNumber(followers as number),
                    postsCount: formatNumber(profile.data.postsCount as number),
                    engagementRate: `${engagementRate}%`,
                    handle: handle,
                    tags: extractTags(profile.data.description || '')
                },
                scores: {
                    profileCompleteness: activityScore,
                    engagementScore: engagementScore,
                    postingActivity: authScore
                },
                totalScore: Math.round((activityScore + engagementScore + authScore) / 3),
                title: getBadgeTitle(badgeLevel),
                recommendations: generateRecommendations(profile.data, activityScore, engagementScore, authScore)
            }
        })
    } catch (error) {
        console.error('Error fetching profile:', error)
        return NextResponse.json(
            { 
                success: false,
                error: 'Failed to fetch profile data'
            },
            { status: 500 }
        )
    }
}

function formatNumber(num: number): string {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M'
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k'
    }
    return num.toString()
}

function calculateActivityScore(recentPosts: number, totalPosts: number): number {
    const postsPerDay = recentPosts / 30
    const baseScore = Math.min((postsPerDay / 3) * 100, 100)
    return Math.round(baseScore)
}

function calculateEngagementScore(engagementRate: number): number {
    const score = Math.min((engagementRate / 3) * 100, 100)
    return Math.round(score)
}

function calculateAuthScore(profile: any, followerCount: number): number {
    let score = 0
    
    // Profile completeness (30 points)
    if (profile.avatar) score += 10
    if (profile.displayName) score += 10
    if (profile.description) score += 10
    
    // Follower score (40 points)
    const followerScore = Math.min((followerCount / 1000) * 40, 40)
    score += followerScore
    
    // Account age (30 points)
    const accountAge = (Date.now() - new Date(profile.indexedAt).getTime()) / (1000 * 60 * 60 * 24)
    const ageScore = Math.min((accountAge / 30) * 30, 30)
    score += ageScore
    
    return Math.round(score)
}

function extractTags(description: string): string[] {
    const tags = description.match(/#[\w]+/g) || []
    return tags
        .map(tag => tag.replace('#', ''))
        .slice(0, 4)
}

function calculateBadgeLevel(score: number) {
    if (score >= 90) return 'galaxy'
    if (score >= 70) return 'supernova'
    if (score >= 50) return 'nebula'
    return 'stardust'
}

function getBadgeTitle(level: string): string {
    const titles = {
        galaxy: 'Galactic Pioneer',
        supernova: 'Rising Star',
        nebula: 'Cosmic Explorer',
        stardust: 'Stellar Newcomer'
    }
    return titles[level as keyof typeof titles]
}

function generateRecommendations(profile: any, activityScore: number, engagementScore: number, authScore: number): string[] {
    const recommendations: string[] = []

    if (!profile.avatar || !profile.displayName || !profile.description) {
        recommendations.push('Complete your profile by adding missing elements (avatar, display name, or description)')
    }

    if (activityScore < 70) {
        recommendations.push('Increase your posting frequency to boost visibility')
    }

    if (engagementScore < 70) {
        recommendations.push('Engage more with other users through likes, reposts, and replies')
    }

    if (authScore < 70) {
        recommendations.push('Build your network by connecting with more users in your interest areas')
    }

    return recommendations
} 