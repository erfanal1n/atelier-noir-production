'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Share2, BookOpen, Tag, Eye, Heart, MessageCircle, Twitter, Facebook, Linkedin, Link2, Bookmark, ChevronUp, Hash, List, Printer, Mail } from 'lucide-react'
import { IconBrandSketch, IconTrendingUp, IconBulb, IconUsers, IconAward } from '@tabler/icons-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

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

const relatedPosts = [
  {
    id: 2,
    title: 'Designing for Emotion: Psychology in Visual Communication',
    excerpt: 'Understanding how color, typography, and composition influence user behavior and emotional response in design.',
    category: 'Design Theory',
    readTime: '6 min read',
    date: '2024-01-08'
  },
  {
    id: 5,
    title: 'Cultural Heritage in Modern Branding',
    excerpt: 'How to incorporate traditional Bengali design elements into contemporary brand identity without losing authenticity.',
    category: 'Brand Design',
    readTime: '7 min read',
    date: '2023-12-10'
  },
  {
    id: 6,
    title: 'Typography for Multilingual Brands',
    excerpt: 'Strategic typography choices for brands operating in Bengali, English, and other languages in the region.',
    category: 'Typography',
    readTime: '9 min read',
    date: '2023-12-03'
  }
]

const keyTakeaways = [
  "South Asian brands are finding unique ways to balance global appeal with cultural authenticity",
  "Traditional design elements can be modernized without losing their cultural significance",
  "Local market understanding is crucial for successful brand positioning in the region",
  "Digital transformation is accelerating brand evolution across all industries"
]

export default function BlogPost() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [readProgress, setReadProgress] = useState(0)
  const [showTOC, setShowTOC] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100
      setIsScrolled(scrolled)
      
      // Calculate read progress
      const winHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const progress = (scrollTop / (docHeight - winHeight)) * 100
      setReadProgress(Math.min(progress, 100))
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <div className="pt-16 relative">
      <div className="fixed top-0 left-0 w-full h-1 bg-noir/10 dark:bg-pearl/10 z-50">
        <div 
          className="h-full bg-gradient-to-r from-gold to-gold/80 transition-all duration-300"
          style={{ width: `${readProgress}%` }}
        />
      </div>
      
      {isScrolled && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-gold hover:bg-gold/90 text-noir rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        >
          <ChevronUp className="h-5 w-5" />
        </motion.button>
      )}
      
      
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <motion.div 
          className="mx-auto max-w-4xl"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-noir/70 dark:text-pearl/70 hover:text-gold transition-colors duration-300"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="px-3 py-1.5 bg-gradient-to-r from-gold/20 to-gold/15 rounded-full border border-gold/30">
                <span className="text-sm font-semibold text-gold">Brand Strategy</span>
              </div>
              <div className="flex items-center gap-2 text-noir/60 dark:text-pearl/60">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">January 15, 2024</span>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-noir dark:text-pearl sm:text-5xl lg:text-6xl mb-8 leading-tight">
              The Evolution of Brand Identity in 
              <span className="block text-gold italic">South Asia</span>
            </h1>
            
            <p className="text-xl text-noir/80 dark:text-pearl/80 leading-relaxed mb-8 max-w-3xl mx-auto">
              How Bangladeshi and regional brands are adapting their visual identity to compete globally while maintaining cultural authenticity.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-noir/60 dark:text-pearl/60">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="font-medium">Erfan Alin</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime="2024-01-15">January 15, 2024</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>2.4k views</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span>142 likes</span>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8 pt-8 border-t border-noir/10 dark:border-pearl/20">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-noir/70 dark:text-pearl/70">Share:</span>
                <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-200">
                  <Twitter className="h-4 w-4" />
                </button>
                <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200">
                  <Facebook className="h-4 w-4" />
                </button>
                <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 text-white transition-colors duration-200">
                  <Linkedin className="h-4 w-4" />
                </button>
                <button className="flex items-center justify-center w-10 h-10 rounded-full bg-noir/10 hover:bg-noir/20 dark:bg-pearl/10 dark:hover:bg-pearl/20 text-noir dark:text-pearl transition-colors duration-200">
                  <Link2 className="h-4 w-4" />
                </button>
              </div>
              
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-3 py-1.5 bg-noir/5 hover:bg-noir/10 dark:bg-pearl/5 dark:hover:bg-pearl/10 rounded-full text-noir dark:text-pearl transition-colors duration-200">
                  <Bookmark className="h-4 w-4" />
                  <span className="text-sm">Save</span>
                </button>
                <button 
                  onClick={() => setShowTOC(!showTOC)}
                  className="flex items-center gap-2 px-3 py-1.5 bg-noir/5 hover:bg-noir/10 dark:bg-pearl/5 dark:hover:bg-pearl/10 rounded-full text-noir dark:text-pearl transition-colors duration-200"
                >
                  <List className="h-4 w-4" />
                  <span className="text-sm">Contents</span>
                </button>
                <button 
                  onClick={() => window.print()}
                  className="flex items-center gap-2 px-3 py-1.5 bg-noir/5 hover:bg-noir/10 dark:bg-pearl/5 dark:hover:bg-pearl/10 rounded-full text-noir dark:text-pearl transition-colors duration-200"
                >
                  <Printer className="h-4 w-4" />
                  <span className="text-sm">Print</span>
                </button>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="relative mb-16">
            <div className="aspect-[16/9] bg-gradient-to-br from-noir/5 via-noir/3 to-gold/10 dark:from-pearl/20 dark:via-pearl/15 dark:to-gold/20 rounded-3xl border border-gold/20 dark:border-pearl/30 flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <IconBrandSketch className="w-24 h-24 text-gold/60 dark:text-pearl/70 mx-auto mb-4" />
                <p className="text-lg font-medium text-noir/60 dark:text-pearl/60">Featured Article Image</p>
                <p className="text-sm text-noir/40 dark:text-pearl/50">Brand Identity Evolution</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {showTOC && (
        <motion.section 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="py-8 bg-gold/5 dark:bg-gold/10 border-y border-gold/20"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg font-semibold text-noir dark:text-pearl mb-4 flex items-center gap-2">
              <List className="h-5 w-5" />
              Table of Contents
            </h3>
            <nav className="space-y-2">
              <a href="#cultural-renaissance" className="block text-noir/80 dark:text-pearl/80 hover:text-gold transition-colors duration-200 py-1">
                1. The Cultural Renaissance
              </a>
              <a href="#key-drivers" className="block text-noir/80 dark:text-pearl/80 hover:text-gold transition-colors duration-200 py-1">
                2. Key Drivers of Change
              </a>
              <a href="#authenticity-challenge" className="block text-noir/80 dark:text-pearl/80 hover:text-gold transition-colors duration-200 py-1">
                3. The Authenticity Challenge
              </a>
            </nav>
          </div>
        </motion.section>
      )}
      
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white/90 dark:bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-noir/10 dark:border-pearl/20 shadow-lg">
                  <h3 className="text-lg font-semibold text-noir dark:text-pearl mb-4 flex items-center gap-2">
                    <List className="h-5 w-5" />
                    Contents
                  </h3>
                  <nav className="space-y-2">
                    <a href="#cultural-renaissance" className="block text-sm text-noir/70 dark:text-pearl/70 hover:text-gold transition-colors duration-200 py-1">
                      The Cultural Renaissance
                    </a>
                    <a href="#key-drivers" className="block text-sm text-noir/70 dark:text-pearl/70 hover:text-gold transition-colors duration-200 py-1">
                      Key Drivers of Change
                    </a>
                    <a href="#authenticity-challenge" className="block text-sm text-noir/70 dark:text-pearl/70 hover:text-gold transition-colors duration-200 py-1">
                      The Authenticity Challenge
                    </a>
                  </nav>
                </div>
                
                <div className="bg-white/90 dark:bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-noir/10 dark:border-pearl/20 shadow-lg">
                  <h3 className="text-lg font-semibold text-noir dark:text-pearl mb-4">Share</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center gap-3 p-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-200">
                      <Twitter className="h-4 w-4" />
                      <span className="text-sm font-medium">Twitter</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200">
                      <Facebook className="h-4 w-4" />
                      <span className="text-sm font-medium">Facebook</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white transition-colors duration-200">
                      <Linkedin className="h-4 w-4" />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-2 rounded-lg bg-gray-500 hover:bg-gray-600 text-white transition-colors duration-200">
                      <Mail className="h-4 w-4" />
                      <span className="text-sm font-medium">Email</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div 
              className="lg:col-span-3"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="prose prose-lg prose-noir dark:prose-invert max-w-none">
                <div className="bg-white/90 dark:bg-black/40 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-noir/10 dark:border-pearl/20 shadow-xl">
                  
                  <h2 id="cultural-renaissance" className="text-3xl font-bold text-noir dark:text-pearl mb-6 flex items-center gap-3">
                    <Hash className="h-6 w-6 text-gold/60" />
                    The Cultural Renaissance
                  </h2>
                  
                  <p className="text-lg text-noir/80 dark:text-pearl/80 leading-relaxed mb-6">
                    The landscape of brand identity in South Asia has undergone a remarkable transformation over the past decade. What was once a region primarily influenced by Western design principles has evolved into a vibrant ecosystem where local culture and global aesthetics converge to create something entirely unique.
                  </p>

                  <p className="text-lg text-noir/80 dark:text-pearl/80 leading-relaxed mb-6">
                    Bangladeshi brands, in particular, have emerged as pioneers in this movement. Companies like <strong>Grameenphone</strong>, <strong>BRAC Bank</strong>, and <strong>Robi</strong> have successfully redefined their visual identities to reflect both their local heritage and international aspirations.
                  </p>

                  <div className="bg-gold/5 dark:bg-gold/10 rounded-xl p-6 my-8 border-l-4 border-gold">
                    <h4 className="text-xl font-bold text-noir dark:text-pearl mb-3">💡 Key Insight</h4>
                    <p className="text-noir/80 dark:text-pearl/80 leading-relaxed">
                      The balance between tradition and modernity has become the hallmark of successful South Asian branding. Brands that master this equilibrium often see 40-60% higher engagement rates compared to purely Western-influenced competitors.
                    </p>
                  </div>

                  <p className="text-lg text-noir/80 dark:text-pearl/80 leading-relaxed mb-8">
                    This cultural renaissance isn&apos;t just about aesthetics—it&apos;s about storytelling. Modern South Asian brands are learning to weave narratives that resonate both locally and globally, creating emotional connections that transcend geographical boundaries.
                  </p>

                  <div className="bg-gold/5 dark:bg-gold/10 border-l-4 border-gold rounded-r-2xl p-6 my-8">
                    <blockquote className="text-xl font-medium text-noir dark:text-pearl italic">
                      &quot;The most successful brands in our region are those that can tell a global story through a local lens.&quot;
                    </blockquote>
                    <cite className="text-noir/70 dark:text-pearl/70 text-sm mt-2 block">— Design Industry Report 2024</cite>
                  </div>

                  <h3 id="key-drivers" className="text-2xl font-bold text-noir dark:text-pearl mb-6 mt-12 flex items-center gap-3">
                    <Hash className="h-5 w-5 text-gold/60" />
                    Key Drivers of Change
                  </h3>

                  <p className="text-lg text-noir/80 dark:text-pearl/80 leading-relaxed mb-8">
                    Several factors have contributed to this evolution, each playing a crucial role in shaping how brands approach their visual identity. Let&apos;s examine these transformative forces:
                  </p>

                  <h4 className="text-xl font-semibold text-noir dark:text-pearl mb-4 mt-8">🚀 Digital Transformation</h4>
                  <p className="text-lg text-noir/80 dark:text-pearl/80 leading-relaxed mb-6">
                    The rise of e-commerce and digital platforms has pushed brands to create more distinctive and memorable visual identities. With consumers spending <em>over 7 hours daily</em> on digital devices, brand recognition in cluttered online spaces has become paramount.
                  </p>

                  <h4 className="text-xl font-semibold text-noir dark:text-pearl mb-4">👥 Consumer Awareness</h4>
                  <p className="text-lg text-noir/80 dark:text-pearl/80 leading-relaxed mb-6">
                    Modern consumers are more discerning and seek brands that align with their cultural values and aspirations. Recent studies show that <strong>73% of South Asian consumers</strong> prefer brands that reflect their cultural identity while maintaining global standards.
                  </p>

                  <div className="bg-noir/5 dark:bg-pearl/10 rounded-xl p-6 my-8">
                    <h4 className="text-lg font-bold text-noir dark:text-pearl mb-3">📊 Market Statistics</h4>
                    <ul className="text-noir/80 dark:text-pearl/80 space-y-2">
                      <li>• <strong>89%</strong> of consumers research brands online before purchasing</li>
                      <li>• <strong>64%</strong> are willing to pay premium for culturally authentic brands</li>
                      <li>• <strong>52%</strong> switch brands based on visual identity appeal</li>
                    </ul>
                  </div>

                  <h4 className="text-xl font-semibold text-noir dark:text-pearl mb-4">💡 Creative Innovation</h4>
                  <p className="text-lg text-noir/80 dark:text-pearl/80 leading-relaxed mb-6">
                    Local design agencies are pushing creative boundaries, introducing fresh perspectives to brand identity. The emergence of <strong>design thinking workshops</strong> and <strong>cultural immersion programs</strong> has revolutionized how brands approach their visual strategy.
                  </p>

                  <h4 className="text-xl font-semibold text-noir dark:text-pearl mb-4">🏆 Global Recognition</h4>
                  <p className="text-lg text-noir/80 dark:text-pearl/80 leading-relaxed mb-8">
                    Regional brands are gaining international acclaim, validating the effectiveness of culturally-rooted design approaches. Notable examples include:
                  </p>

                  <ul className="text-lg text-noir/80 dark:text-pearl/80 leading-relaxed mb-8 space-y-3 ml-6">
                    <li>• <strong>Pathao&apos;s</strong> integration of rickshaw-inspired design elements</li>
                    <li>• <strong>bKash&apos;s</strong> use of traditional Bengali color palettes</li>
                    <li>• <strong>Chaldal&apos;s</strong> incorporation of local market aesthetics</li>
                  </ul>

                  <h3 id="authenticity-challenge" className="text-2xl font-bold text-noir dark:text-pearl mb-6 mt-12 flex items-center gap-3">
                    <Hash className="h-5 w-5 text-gold/60" />
                    The Authenticity Challenge
                  </h3>

                  <p className="text-lg text-noir/80 dark:text-pearl/80 leading-relaxed mb-6">
                    Perhaps the greatest challenge facing South Asian brands today is maintaining authenticity while appealing to global markets. This delicate balance requires deep understanding of both local culture and international design trends.
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6 my-8">
                    <h4 className="text-lg font-bold text-amber-800 dark:text-amber-300 mb-3">⚠️ Common Pitfalls to Avoid</h4>
                    <ol className="text-amber-700 dark:text-amber-200 space-y-2 list-decimal list-inside">
                      <li><strong>Over-westernization:</strong> Losing cultural identity completely</li>
                      <li><strong>Cliché usage:</strong> Relying on stereotypical cultural symbols</li>
                      <li><strong>Inconsistent messaging:</strong> Different identities for local vs global markets</li>
                      <li><strong>Ignoring generational gaps:</strong> Not considering younger demographics</li>
                    </ol>
                  </div>

                  <p className="text-lg text-noir/80 dark:text-pearl/80 leading-relaxed mb-6">
                    Successful brands have learned to extract the essence of their cultural heritage – the colors, patterns, philosophies, and stories – and present them through contemporary design language. This approach creates brand identities that feel both familiar and fresh, local and universal.
                  </p>

                  <h4 className="text-xl font-semibold text-noir dark:text-pearl mb-4 mt-8">🎯 The Winning Formula</h4>
                  <p className="text-lg text-noir/80 dark:text-pearl/80 leading-relaxed mb-6">
                    The most successful South Asian brands follow a three-pillar approach:
                  </p>

                  <ol className="text-lg text-noir/80 dark:text-pearl/80 leading-relaxed mb-8 space-y-4 list-decimal list-inside">
                    <li><strong>Cultural Research:</strong> Deep dive into local traditions, values, and visual heritage before designing.</li>
                    <li><strong>Modern Translation:</strong> Adapt traditional elements using contemporary design principles and digital-first thinking.</li>
                    <li><strong>Continuous Testing:</strong> Regular feedback from both local and international audiences to refine the brand identity.</li>
                  </ol>

                  <h4 className="text-xl font-semibold text-noir dark:text-pearl mb-4 mt-8">📈 Success Story: Case Study</h4>
                  <p className="text-lg text-noir/80 dark:text-pearl/80 leading-relaxed mb-6">
                    <strong>Grameenphone&apos;s 2019 rebrand</strong> perfectly exemplifies this approach. They retained their iconic orange color (representing warmth and energy in Bengali culture) while modernizing their typography and introducing subtle patterns inspired by traditional Bengali art. 
                  </p>
                  <p className="text-lg text-noir/80 dark:text-pearl/80 leading-relaxed mb-8">
                    <strong>The result?</strong> <em>25% increase in brand recall</em> and <em>18% growth in customer acquisition</em> within the first year.
                  </p>

                </div>
                
                <div className="mt-12 pt-8 border-t border-noir/10 dark:border-pearl/20">
                  <div className="flex flex-wrap items-center gap-4 mb-8">
                    <span className="text-sm font-medium text-noir/70 dark:text-pearl/70">Tags:</span>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gold/10 text-gold text-sm rounded-full border border-gold/20">
                        Brand Strategy
                      </span>
                      <span className="px-3 py-1 bg-gold/10 text-gold text-sm rounded-full border border-gold/20">
                        South Asia
                      </span>
                      <span className="px-3 py-1 bg-gold/10 text-gold text-sm rounded-full border border-gold/20">
                        Cultural Identity
                      </span>
                      <span className="px-3 py-1 bg-gold/10 text-gold text-sm rounded-full border border-gold/20">
                        Brand Design
                      </span>
                      <span className="px-3 py-1 bg-gold/10 text-gold text-sm rounded-full border border-gold/20">
                        Digital Transformation
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-t border-b border-noir/10 dark:border-pearl/20">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors duration-200">
                        <Heart className="h-5 w-5" />
                        <span className="font-medium">Like (142)</span>
                      </button>
                      <button className="flex items-center gap-2 text-noir/70 dark:text-pearl/70 hover:text-gold transition-colors duration-200">
                        <MessageCircle className="h-5 w-5" />
                        <span className="font-medium">Comment (12)</span>
                      </button>
                      <button className="flex items-center gap-2 text-noir/70 dark:text-pearl/70 hover:text-gold transition-colors duration-200">
                        <Bookmark className="h-5 w-5" />
                        <span className="font-medium">Save</span>
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => window.print()}
                      className="flex items-center gap-2 px-4 py-2 bg-noir/5 hover:bg-noir/10 dark:bg-pearl/5 dark:hover:bg-pearl/10 rounded-lg text-noir dark:text-pearl transition-colors duration-200"
                    >
                      <Printer className="h-4 w-4" />
                      <span className="font-medium">Print Article</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-pearl/30 dark:bg-gray-800/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 dark:bg-black/40 backdrop-blur-lg rounded-3xl p-8 lg:p-10 border border-noir/10 dark:border-pearl/20 shadow-xl">
            <h3 className="text-2xl font-bold text-noir dark:text-pearl mb-8 flex items-center gap-2">
              <MessageCircle className="h-6 w-6 text-gold" />
              Comments (12)
            </h3>
            
            <div className="mb-8 p-6 bg-noir/5 dark:bg-pearl/5 rounded-2xl border border-noir/10 dark:border-pearl/20">
              <h4 className="text-lg font-semibold text-noir dark:text-pearl mb-4">Leave a Comment</h4>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-noir/20 dark:border-pearl/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 bg-white dark:bg-noir/30 text-noir dark:text-pearl placeholder-noir/50 dark:placeholder-pearl/50"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 border border-noir/20 dark:border-pearl/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 bg-white dark:bg-noir/30 text-noir dark:text-pearl placeholder-noir/50 dark:placeholder-pearl/50"
                  />
                </div>
                <textarea
                  rows={4}
                  placeholder="Share your thoughts..."
                  className="w-full px-4 py-3 border border-noir/20 dark:border-pearl/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 bg-white dark:bg-noir/30 text-noir dark:text-pearl placeholder-noir/50 dark:placeholder-pearl/50 resize-none"
                />
                <button className="bg-gold hover:bg-gold/90 text-noir px-6 py-3 font-semibold rounded-lg transition-all duration-300">
                  Post Comment
                </button>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-white/50 dark:bg-black/20 rounded-2xl border border-noir/10 dark:border-pearl/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-gold">SD</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h5 className="font-semibold text-noir dark:text-pearl">Sarah Dhaka</h5>
                      <span className="text-sm text-noir/60 dark:text-pearl/60">2 days ago</span>
                    </div>
                    <p className="text-noir/80 dark:text-pearl/80 leading-relaxed">
                      Excellent insights on South Asian branding! As a designer working with local brands, I&apos;ve seen firsthand how challenging it can be to balance cultural authenticity with global appeal.
                    </p>
                    <button className="text-sm text-gold hover:text-gold/80 font-medium mt-3">Reply</button>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-white/50 dark:bg-black/20 rounded-2xl border border-noir/10 dark:border-pearl/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-gold">MR</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h5 className="font-semibold text-noir dark:text-pearl">Mehdi Rahman</h5>
                      <span className="text-sm text-noir/60 dark:text-pearl/60">3 days ago</span>
                    </div>
                    <p className="text-noir/80 dark:text-pearl/80 leading-relaxed">
                      The Grameenphone rebrand example really resonates with me. They managed to keep their cultural roots while becoming more modern and accessible.
                    </p>
                    <button className="text-sm text-gold hover:text-gold/80 font-medium mt-3">Reply</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 sm:py-20 lg:py-24">
        <motion.div 
          className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <div className="bg-white/90 dark:bg-black/40 backdrop-blur-lg rounded-3xl p-8 lg:p-10 border border-noir/10 dark:border-pearl/20 shadow-xl">
            <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-gold">EA</span>
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-noir dark:text-pearl mb-2">Erfan Alin</h3>
                    <p className="text-gold font-medium mb-1">CEO & Founder, Atelier Noir</p>
                    <p className="text-noir/70 dark:text-pearl/70">Brand Strategist & Design Thought Leader</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-200">
                      <Twitter className="h-4 w-4" />
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 text-white transition-colors duration-200">
                      <Linkedin className="h-4 w-4" />
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 hover:bg-gray-700 text-white transition-colors duration-200">
                      <Mail className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <p className="text-lg text-noir/80 dark:text-pearl/80 leading-relaxed">
                  With over 15 years of experience in brand strategy and design, Erfan has helped transform dozens of South Asian brands into globally recognized identities. His insights on cultural branding have been featured in leading design publications worldwide.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-noir dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 dark:bg-gradient-to-br text-pearl dark:text-pearl">
        <motion.div 
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-pearl/10 rounded-full text-gold text-sm font-medium mb-8">
              Continue Reading
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-pearl sm:text-5xl lg:text-6xl mb-8">
              Related
              <span className="block text-gold italic">Articles</span>
            </h2>
            <p className="text-xl text-pearl/80 max-w-3xl mx-auto leading-relaxed">
              Explore more insights on brand strategy, design thinking, and creative innovation.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {relatedPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={fadeInUp}
                className="group relative overflow-hidden bg-pearl/10 dark:bg-black/40 backdrop-blur-lg text-pearl rounded-3xl cursor-pointer border border-pearl/20 dark:border-pearl/30 hover:border-gold/40 dark:hover:border-gold/60 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="p-8 lg:p-10 h-full relative z-10 rounded-3xl transition-all duration-300">
                    <div className="h-full flex flex-col">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex h-18 w-18 lg:h-20 lg:w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-gold/30 via-gold/20 to-gold/15 border border-gold/30 shadow-lg group-hover:scale-110 transition-all duration-300">
                          <BookOpen className="h-10 w-10 lg:h-11 lg:w-11 text-gold drop-shadow-sm" />
                        </div>
                        <div className="px-3 py-1.5 bg-gradient-to-r from-gold/20 to-gold/15 rounded-full">
                          <span className="text-xs font-semibold text-gold">{post.category}</span>
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="text-xl lg:text-2xl font-bold mb-4 transition-colors duration-300 text-pearl group-hover:text-gold leading-tight">
                          {post.title}
                        </h3>
                        <p className="leading-relaxed text-sm lg:text-base transition-colors duration-300 text-pearl/80 group-hover:text-pearl mb-6">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm text-pearl/60">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none bg-gradient-to-br from-gold/12 via-gold/4 to-transparent rounded-3xl" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28 bg-noir/5 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 dark:bg-gradient-to-bl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(184,154,100,0.1)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(17,17,17,0.08)_0%,transparent_50%)] pointer-events-none"></div>
        
        <motion.div 
          className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <div className="text-center">
            <motion.div 
              className="inline-block px-6 py-3 bg-gradient-to-r from-gold/20 to-gold/10 rounded-full text-gold text-sm font-medium mb-8 border border-gold/20"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Stay Updated
            </motion.div>
            
            <h2 className="text-4xl font-bold tracking-tight text-noir dark:text-pearl sm:text-5xl lg:text-6xl mb-8">
              Never Miss Our Latest
              <span className="block text-gold italic">Insights</span>
            </h2>
            
            <p className="text-xl text-noir/80 dark:text-pearl/80 mb-12 leading-relaxed max-w-2xl mx-auto">
              Subscribe to our newsletter for weekly insights on design, strategy, and the evolving world of brand identity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-noir/20 dark:border-pearl/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 bg-white dark:bg-noir/30 text-noir dark:text-pearl placeholder-noir/50 dark:placeholder-pearl/50"
              />
              <button className="bg-noir dark:bg-pearl text-pearl dark:text-noir px-6 py-3 font-medium rounded-lg hover:bg-gold hover:text-noir dark:hover:bg-gold dark:hover:text-noir transition-all duration-300">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-noir/60 dark:text-pearl/60">
              Join 5,000+ creative professionals. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  )
}