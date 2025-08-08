'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, Award, Users, Target, Zap, CheckCircle } from 'lucide-react'
import { IconTrendingUp, IconBrandSketch, IconDeviceDesktop, IconChartArcs3 } from '@tabler/icons-react'
import Link from 'next/link'
import Image from 'next/image'

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

const projectStats = [
  { label: 'Brand Recognition', value: '+150%', icon: IconTrendingUp },
  { label: 'User Engagement', value: '+89%', icon: Users },
  { label: 'Conversion Rate', value: '+67%', icon: Target },
  { label: 'Site Performance', value: '+92%', icon: Zap }
]

const processSteps = [
  {
    phase: 'Discovery & Strategy',
    duration: '2 weeks',
    deliverables: ['Market Research', 'Competitive Analysis', 'Brand Audit', 'Strategic Framework'],
    description: 'Deep dive into Meridian Capital&apos;s position in the financial services market and identification of key differentiators.'
  },
  {
    phase: 'Brand Identity Design',
    duration: '3 weeks', 
    deliverables: ['Logo Design', 'Visual Identity System', 'Brand Guidelines', 'Typography Selection'],
    description: 'Creation of a sophisticated visual identity that conveys trust, expertise, and financial excellence.'
  },
  {
    phase: 'Digital Experience',
    duration: '4 weeks',
    deliverables: ['Website Design', 'User Experience', 'Mobile Optimization', 'Content Strategy'],
    description: 'Development of a premium digital presence that reflects the brand&apos;s premium positioning and drives conversions.'
  },
  {
    phase: 'Launch & Optimization',
    duration: '2 weeks',
    deliverables: ['Quality Assurance', 'Performance Testing', 'Launch Support', 'Analytics Setup'],
    description: 'Seamless launch with comprehensive testing and ongoing optimization for maximum impact.'
  }
]

const testimonial = {
  quote: "Atelier Noir transformed our entire brand presence. The new identity perfectly captures our premium positioning in the financial services market, and the results speak for themselves - we&apos;ve seen unprecedented growth since launch.",
  author: "Sarah Mitchell",
  position: "CEO, Meridian Capital",
  company: "Meridian Capital"
}

export default function MeridianCapital() {
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
          <motion.div variants={fadeInUp} className="mb-8">
            <Link 
              href="/work"
              className="inline-flex items-center gap-2 text-noir/70 dark:text-pearl/70 hover:text-gold transition-colors duration-300"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Work
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div variants={fadeInUp} className="text-center lg:text-left">
              <div className="flex items-center gap-4 mb-6">
                <div className="px-3 py-1.5 bg-gradient-to-r from-gold/20 to-gold/15 rounded-full border border-gold/30">
                  <span className="text-sm font-semibold text-gold">Featured Project</span>
                </div>
                <div className="flex items-center gap-2 text-noir/60 dark:text-pearl/60">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">2024</span>
                </div>
              </div>
              
              <h1 className="text-5xl font-bold tracking-tight text-noir dark:text-pearl sm:text-6xl lg:text-7xl mb-8">
                Meridian
                <span className="block text-gold italic">Capital</span>
              </h1>
              
              <p className="text-2xl text-noir/80 dark:text-pearl/80 leading-relaxed mb-8">
                Complete brand transformation for a premier investment firm, including visual identity, digital presence, and marketing collateral.
              </p>
              
              <div className="flex items-center gap-3 mb-8">
                <Award className="h-5 w-5 text-gold" />
                <span className="text-gold font-medium">Webby Awards - Best Financial Site</span>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {['Brand Identity', 'Website Design', 'Marketing Materials'].map((service) => (
                  <span 
                    key={service}
                    className="px-4 py-2 bg-noir/10 dark:bg-pearl/20 text-noir dark:text-pearl rounded-full text-sm font-medium"
                  >
                    {service}
                  </span>
                ))}
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-gold to-gold/90 text-noir px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-gold/20 transition-all duration-300"
                >
                  <span>View Live Site</span>
                  <ExternalLink className="h-5 w-5" />
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-noir/5 via-noir/3 to-gold/10 dark:from-pearl/20 dark:via-pearl/15 dark:to-gold/20 rounded-3xl border border-gold/20 dark:border-pearl/30 flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <IconTrendingUp className="w-24 h-24 text-gold/60 dark:text-pearl/70 mx-auto mb-4" />
                  <p className="text-lg font-medium text-noir/60 dark:text-pearl/60">Project Mockup</p>
                  <p className="text-sm text-noir/40 dark:text-pearl/50">Premium Financial Website</p>
                </div>
              </div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-gold/30 to-gold/20 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.div 
                className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-noir/20 to-noir/15 dark:from-pearl/30 dark:to-pearl/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-pearl via-pearl to-gold/10 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 dark:bg-gradient-to-br">
        <motion.div 
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div variants={fadeInUp}>
              <div className="inline-block px-4 py-2 bg-gold/10 rounded-full text-gold text-sm font-medium mb-8">
                The Challenge
              </div>
              <h3 className="text-3xl font-bold text-noir dark:text-pearl mb-6">
                Outdated Brand Identity
              </h3>
              <p className="text-lg text-noir/80 dark:text-pearl/80 leading-relaxed mb-6">
                Meridian Capital&apos;s existing brand identity failed to communicate their premium positioning in the competitive financial services market. Their digital presence was outdated, conversion rates were declining, and they were losing credibility with high-net-worth clients.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span className="text-noir/70 dark:text-pearl/70">Poor brand recognition and market positioning</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span className="text-noir/70 dark:text-pearl/70">Low conversion rates on digital platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span className="text-noir/70 dark:text-pearl/70">Inconsistent brand experience across touchpoints</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <div className="inline-block px-4 py-2 bg-gold/10 rounded-full text-gold text-sm font-medium mb-8">
                Our Solution
              </div>
              <h3 className="text-3xl font-bold text-noir dark:text-pearl mb-6">
                Premium Brand Transformation
              </h3>
              <p className="text-lg text-noir/80 dark:text-pearl/80 leading-relaxed mb-6">
                We developed a comprehensive brand strategy that positioned Meridian Capital as the premium choice for sophisticated investors. The new identity system conveys trust, expertise, and exclusivity while the digital experience drives meaningful engagement.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-noir/70 dark:text-pearl/70">Sophisticated visual identity system</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-noir/70 dark:text-pearl/70">Premium digital experience with optimized UX</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-noir/70 dark:text-pearl/70">Cohesive brand experience across all channels</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 sm:py-24 lg:py-28">
        <motion.div 
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gold/10 rounded-full text-gold text-sm font-medium mb-8">
              Our Process
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-noir dark:text-pearl sm:text-5xl lg:text-6xl mb-8">
              From Concept to
              <span className="block text-gold italic">Launch</span>
            </h2>
            <p className="text-xl text-noir/80 dark:text-pearl/80 max-w-3xl mx-auto leading-relaxed">
              A systematic approach that delivered exceptional results within 11 weeks.
            </p>
          </motion.div>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.phase}
                variants={fadeInUp}
                className="bg-white/90 dark:bg-black/40 backdrop-blur-lg rounded-3xl p-8 lg:p-10 border border-noir/10 dark:border-pearl/20 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gold/25 to-gold/15 rounded-2xl flex items-center justify-center">
                        <span className="text-xl font-bold text-gold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-noir dark:text-pearl">{step.phase}</h3>
                        <p className="text-gold font-medium">{step.duration}</p>
                      </div>
                    </div>
                    <p className="text-noir/80 dark:text-pearl/80 leading-relaxed">{step.description}</p>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-noir dark:text-pearl mb-4">Key Deliverables</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.deliverables.map((deliverable) => (
                        <div
                          key={deliverable}
                          className="flex items-center gap-3 p-3 bg-noir/5 dark:bg-pearl/10 rounded-xl"
                        >
                          <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                          <span className="text-noir/80 dark:text-pearl/80 font-medium">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-pearl via-pearl to-gold/10 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 dark:bg-gradient-to-br">
        <motion.div 
          className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-gold/10 rounded-full text-gold text-sm font-medium mb-8">
              Client Feedback
            </div>
            
            <blockquote className="text-2xl lg:text-3xl font-medium text-noir dark:text-pearl leading-relaxed mb-12">
              &quot;{testimonial.quote}&quot;
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-gold">{testimonial.author.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-noir dark:text-pearl">{testimonial.author}</p>
                <p className="text-noir/70 dark:text-pearl/70">{testimonial.position}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Next Project CTA */}
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
          <div className="text-center">
            <motion.div 
              className="inline-block px-6 py-3 bg-gradient-to-r from-gold/20 to-gold/10 rounded-full text-gold text-sm font-medium mb-8 border border-gold/20"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Let&apos;s Create Together
            </motion.div>
            
            <h2 className="text-4xl font-bold tracking-tight text-noir dark:text-pearl sm:text-5xl lg:text-6xl mb-8">
              Ready to Transform Your
              <span className="block text-gold italic">Brand?</span>
            </h2>
            
            <p className="text-xl text-noir/80 dark:text-pearl/80 mb-12 leading-relaxed max-w-3xl mx-auto">
              Let&apos;s create something exceptional together. Every project begins with understanding your unique vision and goals.
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
                  href="/work"
                  className="group inline-flex items-center justify-center gap-3 border-2 border-noir/20 dark:border-pearl/20 text-noir dark:text-pearl px-10 py-5 text-lg font-semibold rounded-2xl min-w-[200px] hover:border-gold hover:bg-gold/5 dark:hover:bg-gold/10 transition-all duration-300 backdrop-blur-sm bg-pearl/50 dark:bg-noir/30"
                >
                  <span>View More Work</span>
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