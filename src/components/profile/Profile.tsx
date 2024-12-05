'use client'

import React, { useEffect, useState, useRef } from 'react';
import { Shield, Link as LinkIcon, Camera, Share, Rocket, Sparkles, Star } from 'lucide-react';
import { motion, animate, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import html2canvas from 'html2canvas';

type BadgeLevel = 'stardust' | 'nebula' | 'supernova' | 'galaxy';

interface ProfileApiResponse {
  success: boolean;
  data: {
    profile: {
      displayName: string;
      description: string;
      avatar: string;
      banner?: string;
      followsCount: string;
      followersCount: string;
      postsCount: string;
      engagementRate: string;
      handle: string;
      tags: string[];
    };
    scores: {
      profileCompleteness: number;
      engagementScore: number;
      postingActivity: number;
    };
    totalScore: number;
    title: string;
    recommendations: string[];
  };
}

interface ProfileProps {
  handle: string;
}

const getBadgeColors = (level: BadgeLevel) => {
  const colors = {
    stardust: { 
      bg: 'bg-gradient-to-r from-blue-400 to-purple-400',
      text: 'text-white',
      icon: '⭐',
      glow: 'shadow-[0_0_15px_rgba(59,130,246,0.5)]'
    },
    nebula: { 
      bg: 'bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500',
      text: 'text-white',
      icon: '🌌',
      glow: 'shadow-[0_0_20px_rgba(168,85,247,0.5)]'
    },
    supernova: { 
      bg: 'bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400',
      text: 'text-white',
      icon: '💫',
      glow: 'shadow-[0_0_25px_rgba(234,179,8,0.5)]'
    },
    galaxy: { 
      bg: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500',
      text: 'text-white',
      icon: '🌟',
      glow: 'shadow-[0_0_30px_rgba(139,92,246,0.6)]'
    }
  };
  return colors[level] || colors.stardust;
};

const calculateBadgeLevel = (score: number): BadgeLevel => {
  if (score >= 90) return 'galaxy';
  if (score >= 70) return 'supernova';
  if (score >= 50) return 'nebula';
  return 'stardust';
};

const getScoreDecorations = (score: number) => {
  if (score >= 90) {
    return (
      <>
        <motion.div 
          className="absolute -right-8 -top-8"
          initial={{ y: 0, opacity: 0 }}
          animate={{ 
            y: [-20, -120],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 4
          }}
        >
          <Rocket 
            className="w-6 h-6 text-[#0185FF] transform rotate-45" 
          />
        </motion.div>
        <motion.div 
          className="absolute -left-6 top-1/2"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <Sparkles className="w-5 h-5 text-yellow-400" />
        </motion.div>
      </>
    );
  }
  if (score >= 70) {
    return (
      <motion.div 
        className="absolute -right-6 top-1/2"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Star className="w-5 h-5 text-yellow-400" />
      </motion.div>
    );
  }
  return null;
};

const fetchProfileData = async (handle: string): Promise<ProfileApiResponse | null> => {
  try {
    const response = await fetch(`/api/score/${handle}`);
    if (!response.ok) {
      throw new Error('Failed to fetch profile data');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const Profile: React.FC<ProfileProps> = ({ handle }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [profileData, setProfileData] = useState<ProfileApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  
  const activityRef = useRef<HTMLDivElement>(null);
  const engagementRef = useRef<HTMLDivElement>(null);
  const authRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadProfileData = async () => {
      setIsLoading(true);
      setError(null);
      const data = await fetchProfileData(handle);
      if (data?.success) {
        setProfileData(data);
        setIsAnimated(true);
      } else {
        setError('Failed to load profile data');
      }
      setIsLoading(false);
    };
    loadProfileData();
  }, [handle]);

  useEffect(() => {
    if (isAnimated && profileData?.success) {
      const scores = profileData.data.scores;
      [
        { ref: activityRef, value: scores.profileCompleteness },
        { ref: engagementRef, value: scores.engagementScore },
        { ref: authRef, value: scores.postingActivity }
      ].forEach(({ ref, value }) => {
        if (ref.current) {
          animate(0, value, {
            duration: 1.5,
            onUpdate: (latest) => {
              if (ref.current) {
                ref.current.textContent = Math.round(latest).toString();
              }
            },
            ease: 'easeOut'
          });
        }
      });
    }
  }, [isAnimated, profileData]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0185FF]"></div>
      </div>
    );
  }

  if (error || !profileData?.success) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">{error || 'Something went wrong'}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-4 py-2 bg-[#0185FF] text-white rounded-lg hover:bg-[#0165CC]"
        >
          Try Again
        </button>
      </div>
    );
  }

  const {
    profile,
    scores,
    totalScore,
    title
  } = profileData.data;

  const mappedData = {
    name: profile.displayName,
    handle: profile.handle,
    avatar: profile.avatar,
    followers: profile.followersCount,
    following: profile.followsCount,
    posts: profile.postsCount,
    engagementRate: profile.engagementRate,
    activityScore: scores.profileCompleteness,
    engagementScore: scores.engagementScore,
    authScore: scores.postingActivity,
    badgeLevel: calculateBadgeLevel(totalScore),
    tags: profile.tags
  };

  const displayName = mappedData.name || "Anonymous";
  const displayHandle = mappedData.handle || "anonymous";
  const displayTags = Array.isArray(mappedData.tags) ? mappedData.tags : [];
  const calculatedBadgeLevel = calculateBadgeLevel(mappedData.authScore);
  const badgeColors = getBadgeColors(calculatedBadgeLevel);

  const getScoreCardStyle = (score: number) => {
    if (score >= 90) return 'from-green-50 to-green-100';
    if (score >= 70) return 'from-blue-50 to-blue-100';
    if (score >= 50) return 'from-yellow-50 to-yellow-100';
    return 'from-red-50 to-red-100';
  };

  const getScoreTextColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-blue-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const takeScreenshot = async () => {
    if (!profileRef.current || isCapturing) return;

    try {
      setIsCapturing(true);

      // Create a watermark element
      const watermark = document.createElement('div');
      watermark.textContent = '© BlueSkyAudit';
      watermark.style.cssText = `
        position: absolute;
        bottom: 12px;
        right: 12px;
        font-size: 12px;
        font-weight: 500;
        color: rgba(107, 114, 128, 0.6);
        background: rgba(255, 255, 255, 0.8);
        padding: 4px 8px;
        border-radius: 4px;
        pointer-events: none;
      `;

      // Append the watermark to the profileRef
      profileRef.current.appendChild(watermark);

      // Create a container that preserves all styles
      const container = document.createElement('div');
      container.style.cssText = `
        position: fixed;
        top: -10000px;
        left: -10000px;
        width: ${profileRef.current.offsetWidth + 128}px;
        height: ${profileRef.current.offsetHeight + 128}px;
        padding: 64px;
        background: linear-gradient(135deg, #FDB974 0%, #FB943E 50%, #F8726F 100%);
        box-shadow: 0 16px 64px 32px rgba(0, 0, 0, 0.35);
        pointer-events: none;
        z-index: -1;
      `;

      // Copy the element with all its classes
      container.innerHTML = profileRef.current.outerHTML;
      document.body.appendChild(container);

      // Remove the screenshot and view profile buttons from the cloned container
      const clonedButtons = container.querySelectorAll('.screenshot-button, .view-profile-button');
      clonedButtons.forEach(button => button.remove());

      const canvas = await html2canvas(container, {
        scale: 2,
        backgroundColor: null,
        logging: true,
        allowTaint: true,
        useCORS: true
      });

      // Cleanup
      document.body.removeChild(container);
      profileRef.current.removeChild(watermark); // Remove the watermark after capturing

      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `${mappedData.handle}-blueskyaudit.png`;
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
      }, 'image/png');

    } catch (error) {
      console.error('Screenshot failed:', error);
    } finally {
      setIsCapturing(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const badgeVariants = {
    hidden: { 
      scale: 0,
      rotate: -180,
      opacity: 0 
    },
    visible: { 
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.5
      }
    }
  };

  return (
    <div className="relative max-w-2xl mx-auto mb-12">
      <motion.div 
        ref={profileRef}
        className="relative max-w-2xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-[#0185FF]/10 to-[#00B4FF]/10 rounded-3xl"
          initial={{ rotate: -5, scale: 0.95 }}
          animate={{ rotate: 2, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        
        <motion.div 
          className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
          variants={itemVariants}
        >
          <div className="flex items-start gap-6">
            <motion.div className="relative">
              <div className="w-24 h-24 rounded-full bg-gray-100 overflow-hidden border-4 border-white shadow-lg">
                <motion.img 
                  src={mappedData.avatar} 
                  alt={displayName} 
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/default-avatar.png';
                  }}
                />
              </div>
              <motion.div 
                className={`absolute -bottom-2 -right-2 ${badgeColors.bg} ${badgeColors.text} ${badgeColors.glow} text-sm font-medium px-3 py-1 rounded-full shadow-md flex items-center gap-1.5`}
                variants={badgeVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ 
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <Shield className="w-3.5 h-3.5" />
                <span>{mappedData.authScore}</span>
                <motion.span
                  animate={mappedData.authScore >= 90 ? {
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  {badgeColors.icon}
                </motion.span>
              </motion.div>
            </motion.div>

            <div className="flex-1">
              <div className="flex justify-between items-start">
                <motion.div variants={itemVariants}>
                  <motion.h1 
                    className="text-2xl font-bold text-gray-900"
                    variants={itemVariants}
                  >
                    {displayName}
                  </motion.h1>
                  <motion.p 
                    className="text-gray-600 mb-2"
                    variants={itemVariants}
                  >
                    @{displayHandle}
                  </motion.p>
                  {displayTags.length > 0 && (
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      variants={itemVariants}
                    >
                      {displayTags.map((tag, index) => (
                        <motion.span 
                          key={tag} 
                          className="px-3 py-1 bg-[#E6F3FF] text-[#0185FF] text-xs rounded-full"
                          variants={tagVariants}
                          custom={index}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div 
            className="absolute top-6 right-6 flex items-center gap-3"
            variants={itemVariants}
          >
            <motion.button
              onClick={takeScreenshot}
              disabled={isCapturing}
              className={`screenshot-button p-2.5 bg-white/80 backdrop-blur-sm text-gray-600 hover:text-[#0185FF] transition-colors rounded-xl hover:bg-[#E6F3FF] border border-gray-100 shadow-sm ${
                isCapturing ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              title="Take Screenshot"
              whileHover={!isCapturing ? { 
                scale: 1.05,
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.5 }
              } : {}}
              whileTap={!isCapturing ? { scale: 0.95 } : {}}
            >
              <Camera className={`w-5 h-5 ${isCapturing ? 'animate-pulse' : ''}`} />
            </motion.button>

            <motion.a 
              href={`https://bsky.app/profile/${mappedData.handle}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="view-profile-button px-4 py-2.5 bg-white/80 backdrop-blur-sm border border-gray-100 text-gray-900 rounded-xl text-sm font-medium hover:bg-[#0185FF] hover:text-white hover:border-[#0185FF] transition-all flex items-center gap-2 shadow-sm"
              whileHover={{ 
                scale: 1.05,
                y: -1,
                transition: { type: "spring", stiffness: 400 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Profile
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <LinkIcon className="w-4 h-4" />
              </motion.div>
            </motion.a>
          </motion.div>

          <motion.div 
            className="grid grid-cols-4 gap-4 mt-6 p-4 bg-gray-50 rounded-xl"
            variants={itemVariants}
          >
            {[
              { label: "Followers", value: mappedData.followers },
              { label: "Following", value: mappedData.following },
              { label: "Posts", value: mappedData.posts },
              { label: "Eng. Rate", value: mappedData.engagementRate }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                variants={itemVariants}
                custom={index}
                whileHover={{ y: -2 }}
              >
                <motion.div 
                  className="text-xl font-bold text-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isAnimated ? 1 : 0, y: isAnimated ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`relative overflow-hidden bg-gradient-to-br ${getScoreCardStyle(mappedData.activityScore)} rounded-xl p-6 text-center transform transition-transform hover:scale-[1.02] hover:shadow-lg`}
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-full -mr-8 -mt-8" />
              <div className="relative">
                <div ref={activityRef} className={`text-3xl font-bold ${getScoreTextColor(mappedData.activityScore)} mb-1`}>
                  0
                </div>
                <div className="text-sm font-medium text-gray-800">Activity Score</div>
                <div className="text-xs text-gray-500 mt-2">Based on post frequency</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isAnimated ? 1 : 0, y: isAnimated ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`relative overflow-hidden bg-gradient-to-br ${getScoreCardStyle(mappedData.engagementScore)} rounded-xl p-6 text-center transform transition-transform hover:scale-[1.02] hover:shadow-lg`}
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/10 rounded-full -mr-8 -mt-8" />
              <div className="relative">
                <div ref={engagementRef} className={`text-3xl font-bold ${getScoreTextColor(mappedData.engagementScore)} mb-1`}>
                  0
                </div>
                <div className="text-sm font-medium text-gray-800">Engagement Score</div>
                <div className="text-xs text-gray-500 mt-2">Based on interactions</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isAnimated ? 1 : 0, y: isAnimated ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`relative overflow-hidden ${badgeColors.bg} ${badgeColors.glow} rounded-xl p-6 text-center transform transition-transform hover:scale-[1.02]`}
            >
              {getScoreDecorations(mappedData.authScore)}
              <motion.div 
                className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mr-8 -mt-8"
                animate={mappedData.authScore >= 90 ? {
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                } : {}}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <div className="relative">
                <motion.div 
                  ref={authRef} 
                  className={`text-3xl font-bold ${badgeColors.text} mb-1`}
                  onAnimationComplete={() => {
                    if (mappedData.authScore >= 90) {
                      // Add celebration particles or effects here
                      console.log('High score animation complete!');
                    }
                  }}
                >
                  0
                </motion.div>
                <div className={`text-sm font-medium ${badgeColors.text}`}>Overall Score</div>
                <div className={`text-xs ${badgeColors.text} mt-2 font-medium flex items-center justify-center gap-1`}>
                  {calculatedBadgeLevel.toUpperCase()} RANK
                  <motion.span
                    animate={mappedData.authScore >= 90 ? { 
                      rotate: 360,
                      scale: [1, 1.2, 1]
                    } : { 
                      rotate: 360 
                    }}
                    transition={{
                      rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                    }}
                    style={{ display: "inline-block" }}
                  >
                    {badgeColors.icon}
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Updated footer using the saved SVG */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.a
          href="https://bsky.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#0185FF] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Powered by</span>
          <Image
            src="/logos/bluesky.svg"
            alt="Bluesky"
            width={20}
            height={20}
            className="text-current"
          />
        </motion.a>
        <motion.p 
          className="mt-2 text-xs text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Made with 💙 by the community
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Profile;
