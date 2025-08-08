'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { 
  IconBrandSketch,
  IconDeviceDesktop,
  IconChartArcs3,
  IconCamera,
  IconBulb,
  IconUsers,
  IconPalette,
  IconDeviceAnalytics
} from '@tabler/icons-react'
import Link from 'next/link'

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

const processStaggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const processBoxAnimation = {
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
    scale: 1.05, 
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const
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
      ease: "easeInOut" as const
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
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
}

const services = [
  {
    icon: IconBrandSketch,
    title: 'Brand Identity',
    description: 'Comprehensive brand systems that capture your essence and connect with your audience.',
    features: ['Logo & Visual Identity', 'Brand Guidelines', 'Collateral Design', 'Brand Strategy'],
    featured: true
  },
  {
    icon: IconDeviceAnalytics,
    title: 'Digital Experiences',
    description: 'Websites and digital products that blend beauty with functionality.',
    features: ['Website Design', 'User Experience', 'E-commerce', 'Mobile Apps'],
    featured: false
  },
  {
    icon: IconChartArcs3,
    title: 'Digital Strategy',
    description: 'Data-driven approaches to maximize your digital presence and growth.',
    features: ['Market Research', 'Competitive Analysis', 'Growth Strategy', 'Performance Optimization'],
    featured: false
  },
  {
    icon: IconCamera,
    title: 'Art Direction',
    description: 'Creative leadership for campaigns, photoshoots, and visual storytelling.',
    features: ['Creative Concepts', 'Photography Direction', 'Campaign Design', 'Visual Storytelling'],
    featured: false
  },
  {
    icon: IconBulb,
    title: 'Creative Consulting',
    description: 'Strategic guidance to elevate your creative output and brand positioning.',
    features: ['Creative Audits', 'Team Training', 'Process Optimization', 'Innovation Workshops'],
    featured: false
  },
  {
    icon: IconUsers,
    title: 'Brand Workshops',
    description: 'Collaborative sessions to align your team and define your brand direction.',
    features: ['Brand Discovery', 'Stakeholder Alignment', 'Vision Sessions', 'Strategy Development'],
    featured: false
  }
]

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We dive deep into your brand, market, and objectives to understand the full landscape.'
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'Developing a comprehensive approach that aligns creative vision with business goals.'
  },
  {
    step: '03',
    title: 'Design',
    description: 'Crafting distinctive solutions through iterative design and collaborative refinement.'
  },
  {
    step: '04',
    title: 'Delivery',
    description: 'Implementing solutions with precision and providing ongoing support for success.'
  }
]

export default function Services() {
  return (
    <div className="pt-16">
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
                Creative Services
                <span className="block text-gold italic">that Elevate</span>
              </h1>
              <p className="text-2xl text-noir/80 dark:text-pearl/80 leading-relaxed mb-8">
                We craft comprehensive brand experiences through strategic design and creative excellence.
              </p>
              <p className="text-lg text-noir/70 dark:text-pearl/70 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                From concept to execution, we partner with ambitious brands to create memorable identities that inspire action and drive meaningful connections.
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
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="relative z-10"
                    >
                      <IconPalette className="h-16 w-16 text-gold drop-shadow-lg" />
                    </motion.div>
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
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="relative z-10"
                    >
                      <IconDeviceDesktop className="h-16 w-16 text-noir/70 dark:text-pearl/80 drop-shadow-lg" />
                    </motion.div>
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

      <section className="py-20 sm:py-24 lg:py-28 bg-noir dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 dark:bg-gradient-to-br text-pearl dark:text-pearl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-pearl/10 rounded-full text-gold text-sm font-medium mb-8 hover:bg-pearl/20 transition-all duration-300 hover:scale-105">
              Our Services
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-pearl dark:text-pearl sm:text-5xl lg:text-6xl mb-8 hover:text-gold transition-colors duration-500">What We Offer</h2>
            <p className="text-xl sm:text-2xl text-pearl/80 dark:text-pearl/80 max-w-4xl mx-auto leading-relaxed mb-6 hover:text-pearl dark:hover:text-pearl transition-colors duration-300">
              From brand identity to digital experiences, we craft solutions that resonate with your audience and drive meaningful results.
            </p>
            <p className="text-lg text-pearl/70 dark:text-pearl/70 max-w-3xl mx-auto leading-relaxed hover:text-pearl/90 dark:hover:text-pearl/90 transition-colors duration-300">
              Every service is designed to elevate your brand and create lasting impact in your market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 animate-stagger">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`service-card ${index < 3 ? 'animated-border' : 'animated-border-slow'} group relative overflow-hidden bg-pearl/10 dark:bg-black/40 backdrop-blur-lg text-pearl dark:text-pearl rounded-3xl cursor-pointer border border-pearl/20 dark:border-pearl/30 group-hover:border-gold/40 dark:group-hover:border-gold/60 shadow-xl group-hover:shadow-2xl`}
              >
                <div className="p-8 lg:p-10 h-full relative z-10 rounded-3xl transition-all duration-300">
                  <div className="h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div className="service-icon flex h-18 w-18 lg:h-20 lg:w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-gold/30 via-gold/20 to-gold/15 border border-gold/30 shadow-lg transition-all duration-300">
                        <service.icon className="h-10 w-10 lg:h-11 lg:w-11 text-gold drop-shadow-sm" />
                      </div>
                      {service.featured && (
                        <div className="px-3 py-1.5 bg-gradient-to-r from-gold to-gold/80 rounded-full shadow-lg">
                          <span className="text-xs font-semibold text-noir">Most Popular</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="service-title text-xl lg:text-2xl font-bold mb-4 transition-colors duration-300 text-pearl dark:text-pearl group-hover:text-gold">
                        {service.title}
                      </h3>
                      <p className="service-description mb-6 leading-relaxed text-sm lg:text-base transition-colors duration-300 text-pearl/80 dark:text-pearl/80">
                        {service.description}
                      </p>
                    </div>
                    
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex} 
                          className="text-sm flex items-center transition-all duration-300 text-pearl/70 dark:text-pearl/70 group-hover:text-pearl/90 dark:group-hover:text-pearl/90"
                        >
                          <span className="w-2.5 h-2.5 bg-gradient-to-br from-gold to-gold/80 rounded-full mr-4 flex-shrink-0 shadow-sm hover:scale-125 hover:rotate-180 transition-all duration-300" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none bg-gradient-to-br from-gold/12 via-gold/4 to-transparent rounded-3xl" />
                
                <div className="absolute inset-2 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-br from-gold/8 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28 bg-noir/5 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 dark:bg-gradient-to-bl">
        <motion.div 
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16 lg:mb-20">
            <div className="inline-block px-4 py-2 bg-gold/10 rounded-full text-gold text-sm font-medium mb-8">
              How We Work
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-noir dark:text-pearl sm:text-5xl lg:text-6xl mb-8">Our Process</h2>
            <p className="text-xl sm:text-2xl text-noir/80 dark:text-pearl/80 max-w-4xl mx-auto leading-relaxed mb-6">
              A proven methodology that ensures exceptional results through collaboration and strategic thinking.
            </p>
            <p className="text-lg text-noir/70 dark:text-pearl/70 max-w-3xl mx-auto leading-relaxed">
              From discovery to delivery, every step is carefully crafted to exceed expectations.
            </p>
          </motion.div>
          
          <div className="relative">
            <motion.div 
              variants={processStaggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10"
            >
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  variants={processBoxAnimation}
                  className="group relative"
                >
                  <motion.div 
                    className="bg-black/20 dark:bg-black/40 backdrop-blur-lg p-8 lg:p-10 rounded-3xl h-full transition-all duration-200 border border-pearl/10 dark:border-pearl/20 group-hover:border-gold/40 dark:group-hover:border-gold/60 shadow-xl group-hover:shadow-2xl relative overflow-hidden"
                    whileHover={{ y: -2, scale: 1.005 }}
                    transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/8 via-gold/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold/10 to-transparent rounded-full -translate-y-12 translate-x-12 group-hover:scale-105 transition-transform duration-200"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-8">
                        <motion.div 
                          className="w-16 h-16 bg-gradient-to-br from-gold/25 via-gold/20 to-gold/15 rounded-3xl flex items-center justify-center border border-gold/20 shadow-lg"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="text-2xl font-bold text-gold drop-shadow-sm">{step.step}</div>
                        </motion.div>
                        
                        <div className="w-3 h-3 bg-gradient-to-br from-gold/60 to-gold/40 rounded-full shadow-sm" />
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-bold text-black dark:text-pearl mb-6 group-hover:text-gold transition-colors duration-200 leading-tight">{step.title}</h3>
                      <p className="text-black/80 dark:text-pearl/80 leading-relaxed text-base lg:text-lg group-hover:text-black/90 dark:group-hover:text-pearl/90 transition-colors duration-200 font-medium text-left">{step.description}</p>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-3xl"></div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Expertise Section - Black Background */}
      <section className="py-20 sm:py-24 lg:py-28 bg-noir dark:bg-noir text-pearl dark:text-pearl">
        <motion.div 
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center">
            <div className="inline-block px-4 py-2 bg-pearl/10 rounded-full text-gold text-sm font-medium mb-8">
              Excellence Delivered
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-pearl dark:text-pearl sm:text-5xl lg:text-6xl mb-8">
              Where Strategy Meets
              <span className="block text-gold italic">Creativity</span>
            </h2>
            <p className="text-xl sm:text-2xl text-pearl/80 dark:text-pearl/80 max-w-4xl mx-auto leading-relaxed mb-6">
              Every project is a collaboration between your vision and our expertise.
            </p>
            <p className="text-lg text-pearl/70 dark:text-pearl/70 max-w-3xl mx-auto leading-relaxed">
              We don&apos;t just design—we solve problems, tell stories, and create connections that matter.
            </p>
          </motion.div>
        </motion.div>
      </section>

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
              Let&apos;s Create Together
            </motion.div>
            
            <h2 className="text-4xl font-bold tracking-tight text-noir dark:text-pearl sm:text-5xl lg:text-6xl mb-8">
              Ready to Transform 
              <span className="block text-gold italic">Your Brand?</span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-noir/80 dark:text-pearl/80 mb-6 leading-relaxed max-w-4xl mx-auto">
              Every great project starts with a conversation. Share your vision, and we&apos;ll show you how we can bring it to life.
            </p>
            
            <p className="text-lg text-noir/70 dark:text-pearl/70 mb-12 leading-relaxed max-w-3xl mx-auto">
              Through strategic design and creative excellence, we transform ambitious ideas into memorable brand experiences that inspire action and drive meaningful connections.
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
                  <span className="relative z-10">Get Started</span>
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
                  href="/work"
                  className="group inline-flex items-center justify-center gap-3 border-2 border-noir/20 dark:border-pearl/20 text-noir dark:text-pearl px-10 py-5 text-lg font-semibold rounded-2xl min-w-[200px] hover:border-gold hover:bg-gold/5 dark:hover:bg-gold/10 transition-all duration-300 backdrop-blur-sm bg-pearl/50 dark:bg-noir/30"
                >
                  <span>View Our Work</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto opacity-60">
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/10 rounded-2xl flex items-center justify-center mb-4">
                <IconBrandSketch className="w-8 h-8 text-gold" />
              </div>
              <p className="text-sm text-noir/60 dark:text-pearl/60 font-medium">Premium Design</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-noir/15 to-noir/10 rounded-2xl flex items-center justify-center mb-4">
                <IconChartArcs3 className="w-8 h-8 text-noir/70 dark:text-pearl/70" />
              </div>
              <p className="text-sm text-noir/60 dark:text-pearl/60 font-medium">Strategic Approach</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gold/15 to-gold/8 rounded-2xl flex items-center justify-center mb-4">
                <IconCamera className="w-8 h-8 text-gold/80" />
              </div>
              <p className="text-sm text-noir/60 dark:text-pearl/60 font-medium">Creative Excellence</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}