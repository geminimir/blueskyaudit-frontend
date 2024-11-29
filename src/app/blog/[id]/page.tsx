import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getBlogPost } from '@/data/blogPosts'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { parseContent } from '@/data/blogPosts'
import type { Components } from 'react-markdown'
import { Navbar } from '@/components/Navbar'

// Updated components with proper TypeScript types
const components: Components = {
  h1: ({ node, children, ...props }: React.PropsWithChildren<{ node?: any }>) => (
    <h1 className="text-4xl font-extrabold mt-16 mb-8 text-gray-800 tracking-tight" {...props}>{children}</h1>
  ),
  h2: ({ node, children, ...props }: React.PropsWithChildren<{ node?: any }>) => (
    <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 tracking-tight" {...props}>{children}</h2>
  ),
  h3: ({ node, children, ...props }: React.PropsWithChildren<{ node?: any }>) => (
    <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 tracking-tight" {...props}>{children}</h3>
  ),
  p: ({ node, children, ...props }: React.PropsWithChildren<{ node?: any }>) => (
    <p className="mb-6 leading-7 text-gray-600" {...props}>{children}</p>
  ),
  ul: ({ node, children, ...props }: React.PropsWithChildren<{ node?: any }>) => (
    <ul className="list-disc list-inside mb-6 text-gray-600" {...props}>{children}</ul>
  ),
  ol: ({ node, children, ...props }: React.PropsWithChildren<{ node?: any }>) => (
    <ol className="list-decimal list-inside mb-6 text-gray-600" {...props}>{children}</ol>
  ),
  li: ({ node, children, ...props }: React.PropsWithChildren<{ node?: any }>) => (
    <li className="mb-2" {...props}>{children}</li>
  ),
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a 
      href={href || ''} 
      className="text-indigo-600 hover:text-indigo-700 font-medium underline decoration-indigo-300 decoration-2 underline-offset-2 hover:decoration-indigo-500 transition-colors"
      {...props}
    >
      {children}
    </a>
  ),
  blockquote: ({ node, children, ...props }: React.PropsWithChildren<{ node?: any }>) => (
    <blockquote className="border-l-4 border-indigo-500 pl-6 my-8 italic text-gray-700 text-xl font-serif" {...props}>
      {children}
    </blockquote>
  ),
  code: ({ node, children, ...props }: React.PropsWithChildren<{ node?: any }>) => (
    <code className="bg-gray-50 rounded-md px-2 py-1 text-sm font-mono text-indigo-600 border border-gray-200" {...props}>
      {children}
    </code>
  ),
  pre: ({ node, children, ...props }: React.PropsWithChildren<{ node?: any }>) => (
    <pre className="bg-gray-50 rounded-lg p-6 overflow-x-auto my-8 text-sm font-mono border border-gray-200" {...props}>
      {children}
    </pre>
  ),
  img: ({ src, alt, ...props }) => (
    <div className="my-8">
      <Image
        src={src || ''}
        alt={alt || ''}
        width={1280}
        height={720}
        className="rounded-lg w-full h-auto"
      />
    </div>
  ),
}

type Props = {
  params: { id: string }
}

export default function BlogPost({ params }: Props) {
  const post = getBlogPost(params.id)
  
  if (!post) {
    notFound()
  }

  const processedContent = parseContent(post.content, post.images)

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-50">
        <Navbar />
        <div className="h-1 bg-gray-100">
          <div
            id="reading-progress"
            className="h-full bg-indigo-600 transition-all duration-150"
            style={{ width: '0%' }}
          />
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 pt-24 pb-16">
        {/* Floating Waitlist Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <Link
            href="/"
            className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span className="font-medium">Join Waitlist</span>
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-x-4 text-sm mb-6">
            <span className="text-indigo-600 font-semibold">{post.category}</span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-600">{post.date}</span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-600">{post.readTime}</span>
          </div>
            
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
            {post.title}
          </h1>
            
          <p className="text-xl text-gray-600 leading-relaxed">
            {post.description}
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <Image
              src={post.thumbnail}
              alt={post.title}
              width={1280}
              height={720}
              className="rounded-xl w-full h-auto"
              priority
            />
          </div>

          <article className="prose prose-lg max-w-none">
            <ReactMarkdown 
              components={{
                ...components,
                img: ({ src, alt }) => (
                  <div className="my-8">
                    <Image
                      src={src || ''}
                      alt={alt || ''}
                      width={1280}
                      height={720}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                ),
              }}
              remarkPlugins={[remarkGfm]}
            >
              {processedContent}
            </ReactMarkdown>

            {/* Updated Inline Waitlist CTA */}
            <div className="my-16 p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Want to stay updated?
              </h3>
              <p className="text-gray-600 mb-6">
                Join our waitlist to get early access and exclusive updates about our platform.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Join the Waitlist
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

// Update the script to account for navbar height
const script = `
  document.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav')
    const navbarHeight = navbar ? navbar.offsetHeight : 0
    const winScroll = document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = (winScroll / height) * 100
    const progressBar = document.getElementById('reading-progress')
    if (progressBar) {
      progressBar.style.width = scrolled + '%'
    }
  })
` 