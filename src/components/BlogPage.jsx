import React from 'react'
import { Link } from 'react-router-dom'

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Digital Skills: What Employers Really Want in 2025",
      excerpt: "As technology continues to evolve at breakneck speed, the digital skills landscape is shifting dramatically. Our latest research reveals the top skills employers are seeking and how bootcamps are adapting to meet these demands.",
      date: "December 10, 2024",
      category: "Industry Insights",
      readTime: "5 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Success Story: From Retail Manager to Software Developer in 12 Weeks",
      excerpt: "Meet Sarah, who transformed her career through our West Sussex Software Development Bootcamp. Discover how she went from managing a retail store to landing her dream job as a full-stack developer.",
      date: "December 5, 2024",
      category: "Success Stories",
      readTime: "4 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "AI in the Workplace: How Our AI for Business Bootcamp is Preparing the Next Generation",
      excerpt: "Artificial Intelligence is no longer a futuristic concept—it's here, and it's transforming how we work. Learn how our AI for Business bootcamp is equipping professionals with practical AI skills.",
      date: "November 28, 2024",
      category: "Technology",
      readTime: "6 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Building Inclusive Tech Communities: Our Approach to Diversity in Digital Skills",
      excerpt: "Diversity and inclusion aren't just buzzwords—they're essential for building stronger tech communities. Discover how TechNative Academy is creating pathways for underrepresented groups in technology.",
      date: "November 20, 2024",
      category: "Community",
      readTime: "7 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "The Rise of Data Analytics: Why Every Business Needs Data-Driven Decision Makers",
      excerpt: "Data is the new oil, but only if you know how to refine it. Explore why data analytics skills are in such high demand and how our bootcamps are meeting this critical need.",
      date: "November 15, 2024",
      category: "Industry Insights",
      readTime: "5 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Partner Spotlight: How Latest TV is Revolutionizing Video Production Education",
      excerpt: "Go behind the scenes with Latest TV to understand how industry partnerships are creating authentic, hands-on learning experiences for our video production students.",
      date: "November 8, 2024",
      category: "Partnerships",
      readTime: "4 min read",
      image: "/api/placeholder/400/250"
    }
  ]

  const categories = ["All", "Industry Insights", "Success Stories", "Technology", "Community", "Partnerships"]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              TechNative <span className="text-yellow-400">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Insights, stories, and updates from the forefront of digital skills education. 
              Stay informed about industry trends, success stories, and the future of tech careers.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Industry Insights
                  </span>
                  <span className="ml-4 text-gray-500 text-sm">December 10, 2024 • 5 min read</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  The Future of Digital Skills: What Employers Really Want in 2025
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  As technology continues to evolve at breakneck speed, the digital skills landscape is 
                  shifting dramatically. Our latest research reveals the top skills employers are seeking 
                  and how bootcamps are adapting to meet these demands.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Read Full Article
                </button>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Featured Research</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  category === "All" 
                    ? "bg-blue-600 text-white" 
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Blog Post</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with TechNative
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest insights, success stories, and industry updates delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't just read about success stories—become one. Explore our bootcamps and 
            take the first step towards your new career in tech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Bootcamps
            </Link>
            <Link 
              to="/apply" 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage

