import { Search, Filter, Star } from 'lucide-react'
import { useState } from 'react'

interface Influencer {
  name: string
  handle: string
  avatar: string
  rating: number
  followers: string
  engagementRate: string
  authScore: number
  tags: string[]
}

const influencers: Influencer[] = [
  {
    name: "Sarah Chen",
    handle: "techsarah",
    avatar: "/avatars/sarah.png",
    rating: 4.9,
    followers: "28.5k",
    engagementRate: "6.8%",
    authScore: 96,
    tags: ["Tech", "AI", "Startups"]
  },
  {
    name: "Alex Rivera",
    handle: "alexcodes",
    avatar: "/avatars/alex.png",
    rating: 4.7,
    followers: "15.2k",
    engagementRate: "8.3%",
    authScore: 94,
    tags: ["Development", "Web3"]
  }
]

export default function InfluencerDiscovery() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredInfluencers = influencers.filter(influencer =>
    influencer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    influencer.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
      {/* Search and Filter Bar */}
      <div className="mb-6">
        <div className="flex gap-4 mb-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search influencers..."
              className="w-full px-4 py-2 border border-gray-200 rounded-lg pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
          <button className="px-4 py-2 bg-[#0185FF] text-white rounded-lg flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>
        {/* Filter Pills */}
        <div className="flex gap-2 flex-wrap">
          {['Tech', 'Fashion', '10k+ followers', 'High Engagement'].map((filter) => (
            <span key={filter} className="px-3 py-1 bg-[#E6F3FF] text-[#0185FF] text-sm rounded-full">
              {filter} ×
            </span>
          ))}
        </div>
      </div>

      {/* Influencer Cards */}
      <div className="space-y-4">
        {filteredInfluencers.map((creator) => (
          <div key={creator.handle} className="p-4 border border-gray-100 rounded-xl hover:border-[#0185FF]/30 transition-colors">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden">
                <img src={creator.avatar} alt={creator.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900">{creator.name}</h4>
                    <p className="text-sm text-gray-600">@{creator.handle}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-[#0185FF]">
                    <Star className="w-4 h-4 fill-[#0185FF]" />
                    <span>{creator.rating}</span>
                  </div>
                </div>
                {/* Stats */}
                <div className="mt-3 flex gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">{creator.followers}</span> Followers
                  </div>
                  <div>
                    <span className="font-medium">{creator.engagementRate}</span> Eng. Rate
                  </div>
                  <div>
                    <span className="font-medium">{creator.authScore}</span> Auth. Score
                  </div>
                </div>
                {/* Tags */}
                <div className="mt-3 flex gap-2 flex-wrap">
                  {creator.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-[#E6F3FF] text-[#0185FF] text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button className="w-full mt-4 py-2 text-[#0185FF] text-sm font-medium border border-[#0185FF]/20 rounded-lg hover:bg-[#0185FF]/5 transition-colors">
        View More Creators
      </button>
    </div>
  )
} 