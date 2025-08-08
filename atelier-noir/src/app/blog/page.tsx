'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock, User, Tag, BookOpen, PenTool, Filter } from 'lucide-react'
import { 
  IconBrandSketch,
  IconDeviceDesktop,
  IconChartArcs3,
  IconUsers,
  IconBulb,
  IconAward,
  IconHeart,
  IconTarget
} from '@tabler/icons-react'
import Link from 'next/link'
import { useState } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02, 
    y: -4,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
}

const iconFloat = {
  rest: { rotate: 0, scale: 1 },
  hover: { 
    rotate: 360, 
    scale: 1.1,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
}

const glowEffect = {
  rest: { 
    boxShadow: "0 4px 20px rgba(17, 17, 17, 0.04)",
    scale: 1
  },
  hover: { 
    boxShadow: "0 20px 60px rgba(184, 154, 100, 0.15), 0 8px 32px rgba(17, 17, 17, 0.08)",
    scale: 1.02,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const blogPosts = [
  {
    id: 1,
    title: 'The Evolution of Brand Identity in South Asia',
    excerpt: 'How Bangladeshi and regional brands are adapting their visual identity to compete globally while maintaining cultural authenticity.',
    category: 'Brand Strategy',
    author: 'Erfan Alin',
    date: '2024-01-15',
    readTime: '8 min read',
    featured: true
  },
  {
    id: 2,
    title: 'Designing for Emotion: Psychology in Visual Communication',
    excerpt: 'Understanding how color, typography, and composition influence user behavior and emotional response in design.',
    category: 'Design Theory',
    author: 'Sadia Islam Shanta',
    date: '2024-01-08',
    readTime: '6 min read',
    featured: false
  },
  {
    id: 3,
    title: 'The Future of Web Design: Trends to Watch in 2024',
    excerpt: 'Exploring emerging design trends, from micro-interactions to AI-driven personalization in web experiences.',
    category: 'Web Design',
    author: 'Shahrukh Khan',
    date: '2024-01-02',
    readTime: '10 min read',
    featured: false
  },
  {
    id: 4,
    title: 'Building Sustainable Design Systems',
    excerpt: 'How to create design systems that scale with your organization while maintaining consistency and efficiency.',
    category: 'Design Systems',
    author: 'Erfan Alin',
    date: '2023-12-18',
    readTime: '12 min read',
    featured: false
  },
  {
    id: 5,
    title: 'Cultural Heritage in Modern Branding',
    excerpt: 'How to incorporate traditional Bengali design elements into contemporary brand identity without losing authenticity.',
    category: 'Brand Design',
    author: 'Sadia Islam Shanta',
    date: '2023-12-10',
    readTime: '7 min read',
    featured: false
  },
  {
    id: 6,
    title: 'Typography for Multilingual Brands',
    excerpt: 'Strategic typography choices for brands operating in Bengali, English, and other languages in the region.',
    category: 'Typography',
    author: 'Shahrukh Khan',
    date: '2023-12-03',
    readTime: '9 min read',
    featured: false
  }
]

const categories = ['All', 'Brand Strategy', 'Design Theory', 'Web Design', 'Design Systems', 'Brand Design', 'Typography']

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)
  
  const filteredPosts = activeCategory === 'All' 
    ? regularPosts 
    : regularPosts.filter(post => post.category === activeCategory)

  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return
    
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveCategory(category)
      setTimeout(() => setIsTransitioning(false), 100)
    }, 150)
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <motion.div 
          className="mx-auto max-w-7xl"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div variants={fadeInUp} className="text-center lg:text-left">
              <h1 className="text-5xl font-bold tracking-tight text-noir dark:text-pearl sm:text-6xl lg:text-7xl mb-8">
                Insights &
                <span className="block text-gold italic">Perspectives</span>
              </h1>
              <p className="text-2xl text-noir/80 dark:text-pearl/80 leading-relaxed mb-8">
                Thoughts on design, strategy, and the evolving landscape of creative work from our team.
              </p>
              <p className="text-lg text-noir/70 dark:text-pearl/70 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We share our learnings, observations, and expertise to help fellow creatives and brands navigate the complexities of modern design.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <motion.div 
                    className="group aspect-square bg-gradient-to-br from-gold/20 via-gold/15 to-gold/10 rounded-3xl p-8 flex items-center justify-center relative overflow-hidden border border-gold/20 hover:border-gold/40 transition-all duration-500"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 text-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <BookOpen className="h-16 w-16 text-gold drop-shadow-lg mx-auto mb-4" />
                      </motion.div>
                      <div className="text-2xl font-bold text-gold">{blogPosts.length}</div>
                      <p className="text-gold/80 text-sm">Articles</p>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gold/40 rounded-full"></div>
                  </motion.div>
                  
                  <motion.div 
                    className="h-32 bg-gradient-to-br from-noir/10 via-noir/8 to-noir/5 dark:from-pearl/20 dark:via-pearl/15 dark:to-pearl/10 rounded-3xl border border-noir/10 dark:border-pearl/30 relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent dark:via-pearl/20 animate-shimmer"></div>
                    <div className="absolute top-4 left-4 w-3 h-3 bg-gold/60 dark:bg-pearl/70 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 right-4 w-2 h-2 bg-noir/40 dark:bg-pearl/50 rounded-full"></div>
                  </motion.div>
                </div>
                
                <div className="space-y-6 mt-12">
                  <motion.div 
                    className="h-28 bg-gradient-to-br from-gold/15 via-gold/8 to-gold/5 rounded-3xl border border-gold/15 relative overflow-hidden"
                    whileHover={{ scale: 1.02, x: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gold/20 rounded-full -translate-y-10 translate-x-10"></div>
                    <div className="absolute bottom-3 left-3 w-4 h-4 bg-gold/50 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                  </motion.div>
                  
                  <motion.div 
                    className="group aspect-square bg-gradient-to-br from-noir/15 via-noir/10 to-noir/8 dark:from-pearl/20 dark:via-pearl/15 dark:to-pearl/10 rounded-3xl p-8 flex items-center justify-center relative overflow-hidden border border-noir/15 dark:border-pearl/30 hover:border-noir/30 dark:hover:border-pearl/50 transition-all duration-500"
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tl from-noir/20 via-transparent to-transparent dark:from-pearl/30 dark:via-transparent dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 text-center">
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <PenTool className="h-16 w-16 text-noir/70 dark:text-pearl/80 drop-shadow-lg mx-auto mb-4" />
                      </motion.div>
                      <div className="text-lg font-bold text-noir/70 dark:text-pearl/90">Insights</div>
                      <p className="text-noir/50 dark:text-pearl/70 text-sm">Weekly</p>
                    </div>
                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-noir/30 rounded-full"></div>
                  </motion.div>
                </div>
              </div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-gold/30 to-gold/20 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              
              <motion.div 
                className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-noir/20 to-noir/15 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              ></motion.div>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-radial from-gold/5 to-transparent rounded-full pointer-events-none"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Post Section */}
      {featuredPost && (
        <section className="py-16 sm:py-20 lg:py-24 bg-pearl/50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 dark:bg-gradient-to-br">
          <motion.div 
            className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-gold/15 rounded-full text-gold text-sm font-medium mb-6">
                Featured Article
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-noir dark:text-pearl sm:text-4xl lg:text-5xl mb-4">Latest Insights</h2>
              <p className="text-lg text-noir/70 dark:text-pearl/70 max-w-2xl mx-auto">
                Our most recent thoughts on design, strategy, and creative innovation.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group relative overflow-hidden bg-white/90 dark:bg-black/40 backdrop-blur-lg rounded-2xl cursor-pointer border border-noir/10 dark:border-pearl/20 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div whileHover={{ scale: 1.02, y: -4 }} transition={{ duration: 0.3 }} className="p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row lg:gap-12 items-start">
                  {/* Content */}
                  <div className="flex-1 mb-8 lg:mb-0">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="px-3 py-1.5 bg-gradient-to-r from-gold/20 to-gold/15 rounded-full border border-gold/30">
                        <span className="text-sm font-semibold text-gold">{featuredPost.category}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 transition-colors duration-300 text-noir dark:text-pearl group-hover:text-gold leading-tight">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-lg leading-relaxed mb-6 transition-colors duration-300 text-noir/80 dark:text-pearl/80 group-hover:text-noir dark:group-hover:text-pearl">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center gap-6 mb-8 text-sm text-noir/60 dark:text-pearl/60">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href="/blog/evolution-brand-identity"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-gold to-gold/90 text-noir px-8 py-4 text-base font-semibold rounded-xl shadow-md hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
                      >
                        <span>Read Full Article</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </motion.div>
                  </div>

                  {/* Simple Image Placeholder */}
                  <div className="flex-shrink-0 w-full lg:w-80">
                    <div className="aspect-video bg-gradient-to-br from-noir/5 via-noir/3 to-gold/10 dark:from-pearl/20 dark:via-pearl/15 dark:to-gold/20 rounded-xl border border-gold/20 dark:border-pearl/30 flex items-center justify-center">
                      <div className="text-center">
                        <BookOpen className="w-12 h-12 text-gold/60 dark:text-pearl/70 mx-auto mb-2" />
                        <p className="text-sm text-noir/40 dark:text-pearl/50">Article Image</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      )}

      {/* Category Filter Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-noir dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 dark:bg-gradient-to-br text-pearl dark:text-pearl">
        <motion.div 
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12 lg:mb-16">
            <div className="inline-block px-4 py-2 bg-pearl/10 rounded-full text-gold text-sm font-medium mb-8">
              Explore Articles
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-pearl dark:text-pearl sm:text-5xl lg:text-6xl mb-8">All Articles</h2>
            <p className="text-xl sm:text-2xl text-pearl/80 dark:text-pearl/80 max-w-4xl mx-auto leading-relaxed">
              Discover insights across different topics and categories that matter to your creative journey.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryChange(category)}
                disabled={isTransitioning}
                className={`px-6 py-3 text-sm font-medium rounded-2xl border transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gold text-noir border-gold shadow-lg shadow-gold/20'
                    : 'bg-pearl text-noir border-pearl/20 hover:border-gold/40 hover:bg-pearl/90'
                } ${isTransitioning ? 'opacity-60 cursor-not-allowed' : ''}`}
                whileHover={!isTransitioning ? { scale: 1.05, y: -2 } : {}}
                whileTap={!isTransitioning ? { scale: 0.98 } : {}}
                transition={{ duration: 0.2 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-pearl via-pearl to-gold/10 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 dark:bg-gradient-to-br">
        <motion.div 
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div 
            variants={staggerContainer}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-opacity duration-200 ${
              isTransitioning ? 'opacity-50' : 'opacity-100'
            }`}
            key={activeCategory}
          >
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="group relative overflow-hidden bg-white/90 dark:bg-black/40 backdrop-blur-lg text-noir dark:text-pearl rounded-3xl cursor-pointer border border-noir/15 dark:border-pearl/20"
              >
                <motion.div
                  variants={glowEffect}
                  className="p-8 lg:p-10 h-full relative z-10 rounded-3xl transition-all duration-300 border border-noir/15 dark:border-pearl/20 group-hover:border-gold/40 dark:group-hover:border-gold/60 group-hover:shadow-xl group-hover:shadow-gold/8"
                >
                  <motion.div variants={cardHover} className="h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <motion.div 
                        variants={iconFloat}
                        className="flex h-18 w-18 lg:h-20 lg:w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-gold/30 via-gold/20 to-gold/15 border border-gold/30 shadow-lg"
                      >
                        <PenTool className="h-10 w-10 lg:h-11 lg:w-11 text-gold drop-shadow-sm" />
                      </motion.div>
                      <div className="px-3 py-1.5 bg-gradient-to-r from-gold/20 to-gold/15 rounded-full">
                        <span className="text-xs font-semibold text-gold">{post.category}</span>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-xl lg:text-2xl font-bold mb-4 transition-colors duration-300 text-noir dark:text-pearl group-hover:text-gold leading-tight">
                        {post.title}
                      </h3>
                      <p className="leading-relaxed text-sm lg:text-base transition-colors duration-300 text-noir/80 dark:text-pearl/80 group-hover:text-noir dark:group-hover:text-pearl mb-6">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4 mb-6 text-sm text-noir/60 dark:text-pearl/60">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-sm text-noir/60 dark:text-pearl/60 font-medium">
                        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </span>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 text-noir dark:text-pearl group-hover:text-gold transition-colors duration-300 font-medium"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none bg-gradient-to-br from-gold/12 via-gold/4 to-transparent rounded-3xl" />
                
                <div className="absolute inset-2 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-br from-gold/8 to-transparent" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 bg-noir dark:bg-noir">
        <motion.div 
          className="mx-auto max-w-7xl px-6 lg:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center">
            <div className="inline-block px-4 py-2 bg-gold/20 rounded-full text-gold text-sm font-medium mb-8">
              Join Our Community
            </div>
            <h2 className="text-4xl font-bold text-pearl dark:text-pearl sm:text-5xl lg:text-6xl mb-8">
              Let&apos;s Create
              <span className="block text-gold italic">Together</span>
            </h2>
            <p className="text-xl text-pearl/80 dark:text-pearl/80 max-w-3xl mx-auto leading-relaxed mb-12">
              Ready to transform your brand with strategic design that resonates? 
              Our team brings years of experience crafting visual identities that tell powerful stories.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-gold to-gold/90 text-noir px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-gold/20 transition-all duration-300"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 bg-gold/5 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 dark:bg-gradient-to-bl">
        <motion.div 
          className="mx-auto max-w-7xl px-6 lg:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-noir dark:text-pearl sm:text-5xl mb-6">
              Stay Updated with Our
              <span className="block text-gold italic">Insights</span>
            </h2>
            <p className="text-xl text-noir/80 dark:text-pearl/80 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest articles on design, strategy, and creative thinking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-noir/20 dark:border-pearl/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 bg-white dark:bg-noir/30 text-noir dark:text-pearl placeholder-noir/50 dark:placeholder-pearl/50"
              />
              <button className="bg-noir dark:bg-pearl text-pearl dark:text-noir px-6 py-3 font-medium rounded-lg hover:bg-gold hover:text-noir dark:hover:bg-gold dark:hover:text-noir transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}