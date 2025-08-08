'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, ExternalLink, Calendar, Award } from 'lucide-react'
import { 
  IconTrendingUp,
  IconCoffee,
  IconBuilding,
  IconHeartHandshake,
  IconBrandPython,
  IconHanger2,
  IconAward,
  IconBriefcase,
  IconDeviceDesktop
} from '@tabler/icons-react'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const projectAnimation = {
  initial: { opacity: 0, y: 40, scale: 0.95 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94] as const
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
      ease: "easeOut" as const
    }
  }
}

const projects = [
  {
    title: 'Meridian Capital',
    category: 'Financial Services',
    year: '2024',
    description: 'Complete brand transformation for a premier investment firm, including visual identity, digital presence, and marketing collateral.',
    services: ['Brand Identity', 'Website Design', 'Marketing Materials'],
    featured: true,
    award: 'Webby Awards - Best Financial Site',
    icon: IconTrendingUp
  },
  {
    title: 'Artisan Coffee Co.',
    category: 'Food & Beverage',
    year: '2024',
    description: 'Sophisticated branding for a premium coffee roaster, emphasizing craft and quality through every touchpoint.',
    services: ['Brand Identity', 'Packaging Design', 'Retail Experience'],
    featured: false,
    award: null,
    icon: IconCoffee
  },
  {
    title: 'Nova Architecture',
    category: 'Architecture',
    year: '2023',
    description: 'Modern digital presence for an award-winning architecture studio, showcasing their innovative residential projects.',
    services: ['Website Design', 'Portfolio Curation', 'Digital Strategy'],
    featured: false,
    award: 'Awwwards - Site of the Day',
    icon: IconBuilding
  },
  {
    title: 'Zenith Wellness',
    category: 'Health & Wellness',
    year: '2023',
    description: 'Holistic brand system for a luxury wellness retreat, balancing serenity with sophistication.',
    services: ['Brand Identity', 'Environmental Design', 'Digital Experience'],
    featured: true,
    award: null,
    icon: IconHeartHandshake
  },
  {
    title: 'Precision Analytics',
    category: 'Technology',
    year: '2023',
    description: 'Technical brand positioning for a data analytics platform, making complex technology approachable and trustworthy.',
    services: ['Brand Strategy', 'UI/UX Design', 'Content Strategy'],
    featured: false,
    award: null,
    icon: IconBrandPython
  },
  {
    title: 'Heritage Textiles',
    category: 'Fashion & Lifestyle',
    year: '2022',
    description: 'Timeless brand identity for a luxury textile manufacturer, honoring tradition while embracing modernity.',
    services: ['Brand Identity', 'Packaging', 'Trade Show Design'],
    featured: false,
    award: 'Design & Art Direction - Gold',
    icon: IconHanger2
  }
]

const categories = ['All', 'Financial Services', 'Food & Beverage', 'Architecture', 'Health & Wellness', 'Technology', 'Fashion & Lifestyle']

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

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
                Selected
                <span className="block text-gold italic">Works</span>
              </h1>
              <p className="text-2xl text-noir/80 dark:text-pearl/80 leading-relaxed mb-8">
                A curated collection of projects that showcase our commitment to exceptional design and strategic thinking.
              </p>
              <p className="text-lg text-noir/70 dark:text-pearl/70 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Each project represents a unique collaboration, where we've helped brands discover their voice and connect with their audience in meaningful ways.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <motion.div 
                    className="group aspect-square bg-gradient-to-br from-gold/20 via-gold/15 to-gold/10 rounded-3xl p-8 flex items-center justify-center relative overflow-hidden border border-gold/20 hover:border-gold/40 transition-all duration-300"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-center">
                      <Award className="h-16 w-16 text-gold drop-shadow-lg mx-auto mb-4" />
                      <div className="text-2xl font-bold text-gold">15+</div>
                      <p className="text-gold/80 text-sm">Awards Won</p>
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
                    className="group aspect-square bg-gradient-to-br from-noir/15 via-noir/10 to-noir/8 dark:from-pearl/20 dark:via-pearl/15 dark:to-pearl/10 rounded-3xl p-8 flex items-center justify-center relative overflow-hidden border border-noir/15 dark:border-pearl/30 hover:border-noir/30 dark:hover:border-pearl/50 transition-all duration-300"
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tl from-noir/20 via-transparent to-transparent dark:from-pearl/30 dark:via-transparent dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-center">
                      <IconDeviceDesktop className="h-16 w-16 text-noir/70 dark:text-pearl/80 drop-shadow-lg mx-auto mb-4" />
                      <div className="text-lg font-bold text-noir/70 dark:text-pearl/90">Portfolio</div>
                      <p className="text-noir/50 dark:text-pearl/70 text-sm">Digital Works</p>
                    </div>
                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-noir/30 dark:bg-pearl/40 rounded-full"></div>
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

      {/* Filter Section */}
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
              Our Portfolio
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-pearl sm:text-5xl lg:text-6xl mb-8">Featured Work</h2>
            <p className="text-xl sm:text-2xl text-pearl/80 max-w-4xl mx-auto leading-relaxed">
              Explore our diverse portfolio across industries and discover how we bring brands to life.
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

      {/* Projects Grid */}
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
            {filteredProjects.map((project, index) => {
              if (project.title === 'Meridian Capital') {
                return (
                  <Link key={project.title} href="/work/meridian-capital">
                    <motion.div
                      variants={projectAnimation}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      className={`group relative overflow-hidden ${
                        project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                      } bg-white/90 dark:bg-black/40 backdrop-blur-lg rounded-3xl cursor-pointer border border-pearl/20 dark:border-pearl/20 group-hover:border-gold/40 dark:group-hover:border-gold/60 shadow-xl group-hover:shadow-2xl`}
                    >
                      <motion.div
                        variants={cardHover}
                        className="p-8 lg:p-10 h-full relative z-10 rounded-3xl transition-all duration-300"
                      >
                        <div className="h-full flex flex-col">
                          <div className="flex items-start justify-between mb-6">
                            <motion.div 
                              className="flex h-18 w-18 lg:h-20 lg:w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-gold/20 via-gold/15 to-gold/10 border border-gold/20 shadow-lg"
                              whileHover={{ scale: 1.1, rotate: 15 }}
                              transition={{ duration: 0.3 }}
                            >
                              <project.icon className="h-10 w-10 lg:h-11 lg:w-11 text-gold drop-shadow-sm" />
                            </motion.div>
                            {project.featured && (
                              <div className="px-3 py-1.5 bg-gradient-to-r from-gold to-gold/80 rounded-full shadow-lg">
                                <span className="text-xs font-semibold text-noir">Featured</span>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex-grow">
                            <div className="flex items-center gap-3 mb-3">
                              <Calendar className="h-4 w-4 text-black/70 dark:text-pearl/70" />
                              <span className="text-sm text-black/70 dark:text-pearl/70 font-medium">{project.year}</span>
                              <span className="text-sm text-gold font-medium">{project.category}</span>
                            </div>
                            
                            <h3 className={`font-bold text-black dark:text-pearl group-hover:text-gold transition-colors duration-300 mb-4 ${
                              project.featured ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'
                            }`}>
                              {project.title}
                            </h3>
                            
                            {project.award && (
                              <div className="flex items-center gap-2 mb-4">
                                <Award className="h-4 w-4 text-gold" />
                                <span className="text-sm text-gold font-medium">{project.award}</span>
                              </div>
                            )}
                            
                            <p className={`text-black/80 dark:text-pearl/80 leading-relaxed mb-6 transition-colors duration-300 group-hover:text-black/90 dark:group-hover:text-pearl/90 ${
                              project.featured ? 'text-base lg:text-lg' : 'text-sm lg:text-base'
                            }`}>
                              {project.description}
                            </p>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                              {project.services.map((service, serviceIndex) => (
                                <motion.span 
                                  key={service}
                                  className="px-3 py-1 text-xs font-medium bg-noir/10 dark:bg-pearl/30 text-black dark:text-pearl rounded-full transition-all duration-300 group-hover:bg-gold/20 dark:group-hover:bg-gold/40"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: serviceIndex * 0.1 }}
                                >
                                  {service}
                                </motion.span>
                              ))}
                            </div>
                            
                            <div className="flex items-center justify-between pt-4">
                              <span className="text-sm text-black/70 dark:text-pearl/70 font-medium">View Project</span>
                              <ExternalLink className="h-5 w-5 text-black/60 dark:text-pearl/50 group-hover:text-gold transition-colors duration-300" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none bg-gradient-to-br from-gold/12 via-gold/4 to-noir/8 rounded-3xl" />
                      
                      <div className="absolute inset-2 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-br from-gold/8 to-transparent" />
                    </motion.div>
                  </Link>
                );
              } else {
                return (
                  <motion.div
                    key={project.title}
                    variants={projectAnimation}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    className={`group relative overflow-hidden ${
                      project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                    } bg-white/90 dark:bg-black/40 backdrop-blur-lg rounded-3xl cursor-pointer border border-pearl/20 dark:border-pearl/20 group-hover:border-gold/40 dark:group-hover:border-gold/60 shadow-xl group-hover:shadow-2xl`}
                  >
                    <motion.div
                      variants={cardHover}
                      className="p-8 lg:p-10 h-full relative z-10 rounded-3xl transition-all duration-300"
                    >
                      <div className="h-full flex flex-col">
                        <div className="flex items-start justify-between mb-6">
                          <motion.div 
                            className="flex h-18 w-18 lg:h-20 lg:w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-gold/20 via-gold/15 to-gold/10 border border-gold/20 shadow-lg"
                            whileHover={{ scale: 1.1, rotate: 15 }}
                            transition={{ duration: 0.3 }}
                          >
                            <project.icon className="h-10 w-10 lg:h-11 lg:w-11 text-gold drop-shadow-sm" />
                          </motion.div>
                          {project.featured && (
                            <div className="px-3 py-1.5 bg-gradient-to-r from-gold to-gold/80 rounded-full shadow-lg">
                              <span className="text-xs font-semibold text-noir">Featured</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex items-center gap-3 mb-3">
                            <Calendar className="h-4 w-4 text-noir/70 dark:text-pearl/70" />
                            <span className="text-sm text-noir/70 dark:text-pearl/70 font-medium">{project.year}</span>
                            <span className="text-sm text-gold font-medium">{project.category}</span>
                          </div>
                          
                          <h3 className={`font-bold text-noir dark:text-pearl group-hover:text-gold transition-colors duration-300 mb-4 ${
                            project.featured ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'
                          }`}>
                            {project.title}
                          </h3>
                          
                          {project.award && (
                            <div className="flex items-center gap-2 mb-4">
                              <Award className="h-4 w-4 text-gold" />
                              <span className="text-sm text-gold font-medium">{project.award}</span>
                            </div>
                          )}
                          
                          <p className={`text-noir/80 dark:text-pearl/80 leading-relaxed mb-6 transition-colors duration-300 group-hover:text-noir/90 dark:group-hover:text-pearl/90 ${
                            project.featured ? 'text-base lg:text-lg' : 'text-sm lg:text-base'
                          }`}>
                            {project.description}
                          </p>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.services.map((service, serviceIndex) => (
                              <motion.span 
                                key={service}
                                className="px-3 py-1 text-xs font-medium bg-noir/10 dark:bg-pearl/30 text-black dark:text-pearl rounded-full transition-all duration-300 group-hover:bg-gold/20 dark:group-hover:bg-gold/40"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: serviceIndex * 0.1 }}
                              >
                                {service}
                              </motion.span>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between pt-4">
                            <span className="text-sm text-noir/70 dark:text-pearl/70 font-medium">View Project</span>
                            <ExternalLink className="h-5 w-5 text-noir/60 dark:text-pearl/50 group-hover:text-gold transition-colors duration-300" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none bg-gradient-to-br from-gold/12 via-gold/4 to-noir/8 rounded-3xl" />
                    
                    <div className="absolute inset-2 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-br from-gold/8 to-transparent" />
                  </motion.div>
                );
              }
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* Client Results Section - Black Background */}
      <section className="py-20 sm:py-24 lg:py-28 bg-noir dark:bg-noir text-pearl dark:text-pearl">
        <motion.div 
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16 lg:mb-20">
            <div className="inline-block px-4 py-2 bg-pearl/10 rounded-full text-gold text-sm font-medium mb-8">
              Client Success
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-pearl sm:text-5xl lg:text-6xl mb-8">
              Delivering Results That
              <span className="block text-gold italic">Matter</span>
            </h2>
            <p className="text-xl sm:text-2xl text-pearl/80 max-w-4xl mx-auto leading-relaxed">
              Our partnerships go beyond beautiful design—we create solutions that drive real business impact.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <motion.div 
              variants={fadeInUp}
              className="text-center group"
            >
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                <IconBriefcase className="h-10 w-10 text-gold" />
              </motion.div>
              <div className="text-4xl lg:text-5xl font-bold text-pearl dark:text-pearl mb-3">50+</div>
              <p className="text-pearl/70 dark:text-pearl/70 font-medium mb-2">Projects Delivered</p>
              <p className="text-sm text-pearl/50 dark:text-pearl/50">Across all industries</p>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="text-center group"
            >
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                <IconBuilding className="h-10 w-10 text-gold" />
              </motion.div>
              <div className="text-4xl lg:text-5xl font-bold text-pearl dark:text-pearl mb-3">12</div>
              <p className="text-pearl/70 dark:text-pearl/70 font-medium mb-2">Countries Served</p>
              <p className="text-sm text-pearl/50 dark:text-pearl/50">Global reach</p>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="text-center group"
            >
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                <Award className="h-10 w-10 text-gold" />
              </motion.div>
              <div className="text-4xl lg:text-5xl font-bold text-pearl dark:text-pearl mb-3">15+</div>
              <p className="text-pearl/70 dark:text-pearl/70 font-medium mb-2">Design Awards</p>
              <p className="text-sm text-pearl/50 dark:text-pearl/50">International recognition</p>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="text-center group"
            >
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                <IconTrendingUp className="h-10 w-10 text-gold" />
              </motion.div>
              <div className="text-4xl lg:text-5xl font-bold text-pearl dark:text-pearl mb-3">5+</div>
              <p className="text-pearl/70 dark:text-pearl/70 font-medium mb-2">Years Experience</p>
              <p className="text-sm text-pearl/50 dark:text-pearl/50">Proven expertise</p>
            </motion.div>
          </div>
          
          <motion.div 
            variants={fadeInUp}
            className="mt-16 lg:mt-20 text-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="group">
                <div className="text-2xl font-bold text-gold mb-3">Startup to Enterprise</div>
                <p className="text-pearl/70 dark:text-pearl/70 leading-relaxed">From ambitious startups to Fortune 500 companies, we scale our approach to match your vision</p>
              </div>
              <div className="group">
                <div className="text-2xl font-bold text-gold mb-3">End-to-End Solutions</div>
                <p className="text-pearl/70 dark:text-pearl/70 leading-relaxed">Complete brand ecosystems from strategy and identity to digital experiences and marketing</p>
              </div>
              <div className="group">
                <div className="text-2xl font-bold text-gold mb-3">Measurable Impact</div>
                <p className="text-pearl/70 dark:text-pearl/70 leading-relaxed">Every project is designed to drive real business results and long-term brand success</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 lg:py-28 bg-noir/5 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 dark:bg-gradient-to-bl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(184,154,100,0.1)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(17,17,17,0.08)_0%,transparent_50%)] pointer-events-none"></div>
        
        <motion.div 
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <div className="text-center max-w-5xl mx-auto">
            <motion.div 
              className="inline-block px-6 py-3 bg-gradient-to-r from-gold/20 to-gold/10 rounded-full text-gold text-sm font-medium mb-8 border border-gold/20"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Let's Create Together
            </motion.div>
            
            <h2 className="text-4xl font-bold tracking-tight text-noir dark:text-pearl sm:text-5xl lg:text-6xl mb-8">
              Ready to create something 
              <span className="block text-gold italic">exceptional?</span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-noir/80 dark:text-pearl/80 mb-6 leading-relaxed max-w-4xl mx-auto">
              Let's discuss how we can bring your vision to life with the same dedication and craftsmanship you've seen here.
            </p>
            
            <p className="text-lg text-noir/70 dark:text-pearl/70 mb-12 leading-relaxed max-w-3xl mx-auto">
              Every great project starts with a conversation. Share your vision, and we'll show you how we can make it extraordinary.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold to-gold/90 text-noir px-10 py-5 text-lg font-semibold rounded-2xl min-w-[200px] shadow-lg hover:shadow-xl hover:shadow-gold/20 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/90 to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Start Your Project</span>
                  <motion.div
                    className="relative z-10"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/services"
                  className="group inline-flex items-center justify-center gap-3 border-2 border-noir/20 dark:border-pearl/20 text-noir dark:text-pearl px-10 py-5 text-lg font-semibold rounded-2xl min-w-[200px] hover:border-gold hover:bg-gold/5 dark:hover:bg-gold/10 transition-all duration-300 backdrop-blur-sm bg-pearl/50 dark:bg-noir/30"
                >
                  <span>View Services</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}