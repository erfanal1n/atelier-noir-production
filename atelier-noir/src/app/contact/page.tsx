'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { useState } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@ateliernoir.com',
    link: 'mailto:hello@ateliernoir.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+880 1711-123456',
    link: 'tel:+8801711123456'
  },
  {
    icon: MapPin,
    label: 'Studio',
    value: 'Gulshan, Dhaka, Bangladesh',
    link: null
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Sun-Thu 9AM-6PM BST',
    link: null
  }
]

const projectTypes = [
  'Brand Identity',
  'Website Design',
  'Digital Strategy',
  'Art Direction',
  'Creative Consulting',
  'Other'
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
    timeline: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="pt-16">
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 xl:py-28">
        <motion.div 
          className="mx-auto max-w-7xl"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            <motion.div variants={fadeInUp} className="text-center lg:text-left">
              <h1 className="text-3xl font-bold tracking-tight text-noir dark:text-pearl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 sm:mb-8">
                Let&apos;s create
                <span className="block text-gold italic">together</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-noir/80 dark:text-pearl/80 leading-relaxed mb-6 sm:mb-8">
                Ready to elevate your brand? We&apos;d love to hear about your project and explore how we can bring your vision to life.
              </p>
              <p className="text-base sm:text-lg text-noir/70 dark:text-pearl/70 leading-relaxed mb-8 sm:mb-12">
                Whether you&apos;re launching something new or refreshing an existing brand, our collaborative approach ensures exceptional results that resonate with your audience.
              </p>
              
              <div className="hidden sm:block space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    variants={fadeInUp}
                    className="flex items-center gap-3 group"
                  >
                    <div className="flex h-12 w-12 items-center justify-center bg-gold/10 dark:bg-gold/20 rounded-full group-hover:bg-gold/20 dark:group-hover:bg-gold/30 transition-premium flex-shrink-0">
                      <info.icon className="h-6 w-6 text-gold" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-noir/60 dark:text-pearl/60 mb-1">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="text-base lg:text-lg text-noir dark:text-pearl hover-gold break-words">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-base lg:text-lg text-noir dark:text-pearl break-words">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>

            <div className="block sm:hidden w-full mb-8">
              <div className="bg-noir py-8 px-4 -mx-4 sm:mx-0">
                <div className="max-w-lg mx-auto">
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div
                        key={`mobile-contact-${info.label}`}
                        className="flex items-center"
                        style={{gap: '8px'}}
                      >
                        <div 
                          className="bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{width: '40px', height: '40px'}}
                        >
                          <info.icon className="text-gold" style={{width: '18px', height: '18px'}} />
                        </div>
                        <div className="flex-1">
                          <p 
                            className="font-medium text-pearl/70 mb-0.5"
                            style={{fontSize: '13px'}}
                          >
                            {info.label}
                          </p>
                          {info.link ? (
                            <a 
                              href={info.link} 
                              className="text-pearl hover:text-gold break-words"
                              style={{fontSize: '15px', fontWeight: '500'}}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p 
                              className="text-pearl break-words"
                              style={{fontSize: '15px', fontWeight: '500'}}
                            >
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div variants={fadeInUp} className="bg-white/90 dark:bg-black/40 backdrop-blur-lg p-6 sm:p-8 lg:p-10 rounded-3xl border border-noir/10 dark:border-pearl/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl sm:text-3xl font-bold text-noir dark:text-pearl mb-6 sm:mb-8">Tell us about your project</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-noir dark:text-pearl mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-noir/20 dark:border-pearl/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-premium bg-white dark:bg-noir/30 text-noir dark:text-pearl placeholder-noir/50 dark:placeholder-pearl/50"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-noir dark:text-pearl mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-noir/20 dark:border-pearl/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-premium bg-white dark:bg-noir/30 text-noir dark:text-pearl placeholder-noir/50 dark:placeholder-pearl/50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-noir dark:text-pearl mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-noir/20 dark:border-pearl/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-premium bg-white dark:bg-noir/30 text-noir dark:text-pearl placeholder-noir/50 dark:placeholder-pearl/50"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-noir dark:text-pearl mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-noir/20 dark:border-pearl/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-premium bg-white dark:bg-noir/30 text-noir dark:text-pearl"
                    >
                      <option value="">Select a service</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-noir dark:text-pearl mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-noir/20 dark:border-pearl/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-premium bg-white dark:bg-noir/30 text-noir dark:text-pearl"
                    >
                      <option value="">Select budget range</option>
                      <option value="৳5L-10L">৳5L - ৳10L</option>
                      <option value="৳10L-25L">৳10L - ৳25L</option>
                      <option value="৳25L-50L">৳25L - ৳50L</option>
                      <option value="৳50L+">৳50L+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-noir dark:text-pearl mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-noir/20 dark:border-pearl/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-premium bg-white dark:bg-noir/30 text-noir dark:text-pearl"
                    >
                      <option value="">When do you need this?</option>
                      <option value="ASAP">ASAP</option>
                      <option value="1-2 months">1-2 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="6+ months">6+ months</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-noir dark:text-pearl mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-noir/20 dark:border-pearl/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-premium resize-none bg-white dark:bg-noir/30 text-noir dark:text-pearl placeholder-noir/50 dark:placeholder-pearl/50"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-noir dark:bg-pearl text-pearl dark:text-noir px-8 py-4 text-lg font-medium hover:bg-gold hover:text-noir dark:hover:bg-gold dark:hover:text-noir transition-premium inline-flex items-center justify-center gap-3 rounded-lg"
                >
                  Send Message
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28 bg-noir/5 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 dark:bg-gradient-to-bl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(184,154,100,0.1)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(17,17,17,0.08)_0%,transparent_50%)] pointer-events-none"></div>
        
        <motion.div 
          className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl font-bold text-noir dark:text-pearl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 px-4">What happens next?</h2>
            <p className="text-lg sm:text-xl text-noir/70 dark:text-pearl/70 max-w-2xl mx-auto px-4">
              Our process is designed to ensure we understand your vision completely before we begin crafting your solution.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold/20 dark:bg-gold/30 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-bold text-gold">1</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-noir dark:text-pearl mb-3 sm:mb-4">Initial Call</h3>
              <p className="text-sm sm:text-base text-noir/70 dark:text-pearl/70 leading-relaxed px-2">
                We&apos;ll schedule a discovery call within 24 hours to discuss your project in detail and answer any questions.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold/20 dark:bg-gold/30 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-bold text-gold">2</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-noir dark:text-pearl mb-3 sm:mb-4">Proposal</h3>
              <p className="text-sm sm:text-base text-noir/70 dark:text-pearl/70 leading-relaxed px-2">
                Within a week, you&apos;ll receive a detailed proposal outlining our approach, timeline, and investment.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold/20 dark:bg-gold/30 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-bold text-gold">3</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-noir dark:text-pearl mb-3 sm:mb-4">Collaboration</h3>
              <p className="text-sm sm:text-base text-noir/70 dark:text-pearl/70 leading-relaxed px-2">
                Once aligned, we begin our collaborative process to bring your vision to life with exceptional results.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}