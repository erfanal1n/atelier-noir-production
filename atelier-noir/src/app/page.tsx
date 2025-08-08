'use client'

import Link from 'next/link'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ArrowRight, Award, Users, Zap, ChevronLeft, ChevronRight, Star, Quote, TrendingUp, Globe, Calendar, CheckCircle } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

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

const heroSlides = [
  {
    id: 1,
    title: "Crafting",
    subtitle: "distinctive",
    titleEnd: "experiences",
    description: "We transform brands through sophisticated design, strategic thinking, and uncompromising attention to detail.",
    featuredWork: "Premium Brand Identity",
    client: "Luxury Fashion Brand",
    primaryColor: "from-noir/5 to-gold/10 dark:from-pearl/5 dark:to-gold/10",
    accentColor: "bg-gold"
  },
  {
    id: 2,
    title: "Building",
    subtitle: "memorable",
    titleEnd: "identities",
    description: "Every brand tells a story. We craft visual narratives that resonate deeply with your audience and drive meaningful connections.",
    featuredWork: "Digital Experience Design",
    client: "Tech Innovation Startup",
    primaryColor: "from-gold/5 to-noir/10 dark:from-gold/5 dark:to-pearl/10",
    accentColor: "bg-noir dark:bg-pearl"
  },
  {
    id: 3,
    title: "Creating",
    subtitle: "strategic",
    titleEnd: "solutions",
    description: "Where creativity meets strategy. We deliver comprehensive brand solutions that elevate your business to new heights.",
    featuredWork: "Complete Brand Overhaul",
    client: "Global Enterprise",
    primaryColor: "from-noir/10 to-gold/5 dark:from-pearl/10 dark:to-gold/5",
    accentColor: "bg-gold"
  }
]

const statistics = [
  {
    number: 250,
    suffix: '+',
    label: 'Projects Completed',
    icon: CheckCircle
  },
  {
    number: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    icon: TrendingUp
  },
  {
    number: 15,
    suffix: '+',
    label: 'Countries Served',
    icon: Globe
  },
  {
    number: 8,
    suffix: '',
    label: 'Years of Excellence',
    icon: Calendar
  }
]

const testimonials = [
  {
    id: 1,
    content: "Atelier Noir transformed our brand identity beyond our expectations. Their strategic approach and artistic vision created a cohesive brand that truly represents our values.",
    author: "Rahul Ahmed",
    position: "Managing Director",
    company: "Bengal Fashion House",
    rating: 5
  },
  {
    id: 2,
    content: "Working with this team was an absolute pleasure. They understood our vision from day one and delivered exceptional results that elevated our entire digital presence.",
    author: "Fatima Khatun",
    position: "Chief Executive Officer",
    company: "Dhaka Tech Solutions",
    rating: 5
  },
  {
    id: 3,
    content: "The attention to detail and creative excellence is unmatched. Our brand overhaul resulted in a 40% increase in customer engagement within just three months.",
    author: "Mohammad Hasan",
    position: "Brand Manager",
    company: "Chittagong Enterprises",
    rating: 5
  },
  {
    id: 4,
    content: "Their innovative approach to design and branding helped us stand out in a competitive market. The team's dedication and creativity exceeded all expectations.",
    author: "Nasreen Sultana",
    position: "Creative Director",
    company: "Sylhet Media Group",
    rating: 5
  },
  {
    id: 5,
    content: "Professional, innovative, and results-driven. Atelier Noir delivered a complete brand transformation that perfectly captured our company's essence and values.",
    author: "Abdullah Rahman",
    position: "General Manager",
    company: "Khulna Industries",
    rating: 5
  }
]

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Understanding your brand, audience, and objectives through comprehensive research and strategy sessions.'
  },
  {
    step: '02',
    title: 'Ideation',
    description: 'Conceptualizing creative solutions that align with your brand vision and market positioning.'
  },
  {
    step: '03',
    title: 'Creation',
    description: 'Crafting exceptional designs with meticulous attention to detail and brand consistency.'
  },
  {
    step: '04',
    title: 'Refinement',
    description: 'Perfecting every element through iterative feedback and collaborative optimization.'
  }
]

const recentWork = [
  {
    id: 1,
    title: 'Zenith Luxury Hotels',
    category: 'Brand Identity',
    description: 'Complete brand overhaul for premium hospitality group including logo, stationery, and digital assets.',
    year: '2024',
    gradient: 'from-noir/10 to-gold/20'
  },
  {
    id: 2,
    title: 'Apex Financial',
    category: 'Digital Experience',
    description: 'Modern web platform design with focus on user experience and conversion optimization.',
    year: '2024',
    gradient: 'from-gold/10 to-noir/20'
  },
  {
    id: 3,
    title: 'Noir Cosmetics',
    category: 'Packaging Design',
    description: 'Sophisticated packaging system for luxury beauty brand with sustainable materials.',
    year: '2024',
    gradient: 'from-noir/20 to-gold/10'
  }
]

const awards = [
  {
    title: 'Design Excellence Award',
    organization: 'International Design Council',
    year: '2024',
    category: 'Brand Identity'
  },
  {
    title: 'Gold Medal',
    organization: 'Creative Arts Society',
    year: '2023',
    category: 'Digital Design'
  },
  {
    title: 'Best Agency Award',
    organization: 'Design Industry Awards',
    year: '2023',
    category: 'Overall Excellence'
  },
  {
    title: 'Innovation Prize',
    organization: 'European Design Awards',
    year: '2022',
    category: 'Brand Strategy'
  }
]

const features = [
  {
    icon: Award,
    name: 'Award-Winning Design',
    description: 'Recognized excellence in visual storytelling and brand identity.'
  },
  {
    icon: Users,
    name: 'Human-Centered Approach',
    description: 'Every project begins with understanding your audience deeply.'
  },
  {
    icon: Zap,
    name: 'Strategic Innovation',
    description: 'Blending creative vision with data-driven insights.'
  }
]

function Counter({ number, suffix, duration = 2000 }: { number: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const counterRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(counterRef, { once: true, margin: "-50px" })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const startValue = 0
    const endValue = number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, number, duration])

  return (
    <div ref={counterRef} className="text-4xl lg:text-5xl xl:text-6xl font-bold text-pearl dark:text-pearl">
      {count.toLocaleString()}{suffix}
    </div>
  )
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isTestimonialAutoPlaying, setIsTestimonialAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  useEffect(() => {
    if (!isTestimonialAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isTestimonialAutoPlaying])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
    setIsAutoPlaying(false)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 30
    const isRightSwipe = distance < -30

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
    setTouchStart(null)
    setTouchEnd(null)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    setIsTestimonialAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsTestimonialAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
    setIsTestimonialAutoPlaying(false)
  }

  return (
    <div className="pt-16">
      <section className="relative px-4 sm:px-6 py-8 sm:py-12 lg:px-8 lg:py-16 pb-40 sm:pb-48 lg:pb-20 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div 
            className="relative min-h-[70vh] sm:min-h-[75vh] lg:min-h-[85vh] touch-pan-x pb-20 sm:pb-24 lg:pb-32"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: 'pan-x' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 h-full">
                  <motion.div 
                    className="flex flex-col justify-center order-1 lg:order-1 px-2 sm:px-0"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-noir dark:text-pearl lg:text-6xl xl:text-7xl leading-tight mb-3 sm:mb-4 lg:mb-6 text-center lg:text-left">
                      {heroSlides[currentSlide].title}
                      <span className="block text-gold italic">{heroSlides[currentSlide].subtitle}</span>
                      {heroSlides[currentSlide].titleEnd}
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-noir/80 dark:text-pearl/80 leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                      {heroSlides[currentSlide].description}
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="order-2 lg:order-2 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className={`relative w-full max-w-sm sm:max-w-md lg:max-w-none h-[280px] sm:h-[350px] lg:h-[450px] xl:h-[550px] bg-gradient-to-br ${heroSlides[currentSlide].primaryColor} rounded-xl lg:rounded-2xl overflow-hidden group shadow-xl lg:shadow-2xl`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-noir/20 via-transparent to-gold/20 opacity-60"></div>
                      <div className="relative h-full flex flex-col justify-between p-4 sm:p-6 lg:p-8">
                        <div className="flex justify-between items-start">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gold/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <div className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 ${heroSlides[currentSlide].accentColor} rounded-full`}></div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-noir/60 dark:text-pearl/60 mb-1 tracking-wider">FEATURED WORK</div>
                            <div className="text-xs sm:text-sm lg:text-base font-serif text-noir dark:text-pearl">{heroSlides[currentSlide].featuredWork}</div>
                          </div>
                        </div>
                        
                        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                          <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
                            <div className="h-12 sm:h-16 lg:h-20 bg-noir/10 dark:bg-pearl/10 rounded-lg"></div>
                            <div className="h-12 sm:h-16 lg:h-20 bg-gold/20 rounded-lg"></div>
                            <div className="h-12 sm:h-16 lg:h-20 bg-noir/15 dark:bg-pearl/15 rounded-lg"></div>
                          </div>
                          <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                            <div className="h-10 sm:h-12 lg:h-16 bg-gold/15 rounded-lg"></div>
                            <div className="h-10 sm:h-12 lg:h-16 bg-noir/20 dark:bg-pearl/20 rounded-lg"></div>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-end">
                          <div>
                            <div className="text-xs text-noir/60 dark:text-pearl/60 mb-1 tracking-wider">CLIENT</div>
                            <div className="text-xs sm:text-sm lg:text-base font-medium text-noir dark:text-pearl">{heroSlides[currentSlide].client}</div>
                          </div>
                          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-noir/10 dark:bg-pearl/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-premium cursor-pointer">
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-noir dark:text-pearl group-hover:text-gold transition-premium" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="order-3 lg:order-1 lg:absolute lg:bottom-12 lg:left-0 flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 px-2 sm:px-0 mb-16 sm:mb-20 lg:mb-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <Link
                      href="/work"
                      className="bg-noir dark:bg-pearl text-pearl dark:text-noir px-5 sm:px-6 lg:px-8 py-3 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-medium hover:bg-gold hover:text-noir transition-premium rounded-lg shadow-lg hover:shadow-xl text-center"
                    >
                      View Our Work
                    </Link>
                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
                      <Link
                        href="/about"
                        className="text-sm sm:text-base lg:text-lg font-medium leading-6 text-noir dark:text-pearl hover:text-gold transition-colors inline-flex items-center gap-2 justify-center sm:justify-start border border-noir/30 dark:border-pearl/30 px-5 sm:px-6 lg:px-8 py-3 sm:py-3 lg:py-4 rounded-lg hover:border-gold"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                      </Link>
                      
                    </div>
                  </motion.div>
                  

                  {/* Desktop Dots - Hidden on mobile */}
                  <motion.div 
                    className="order-5 hidden lg:flex justify-center pt-4 pb-4 lg:absolute lg:bottom-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:pt-0 lg:pb-0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <div className="flex items-center justify-center space-x-6">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-premium ${
                    index === currentSlide 
                      ? 'bg-gold shadow-lg scale-110' 
                      : 'bg-noir/50 dark:bg-pearl/50 hover:bg-noir/70 dark:hover:bg-pearl/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
                    </div>
                  </motion.div>
                  
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="md:hidden absolute top-1/2 -translate-y-1/2 left-2 z-10">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-pearl/90 backdrop-blur-sm rounded-full flex items-center justify-center text-noir hover:bg-gold hover:text-noir transition-premium shadow-lg border border-noir/10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          
          <div className="md:hidden absolute top-1/2 -translate-y-1/2 right-2 z-10">
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-pearl/90 backdrop-blur-sm rounded-full flex items-center justify-center text-noir hover:bg-gold hover:text-noir transition-premium shadow-lg border border-noir/10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop Navigation Buttons */}
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-4 lg:left-8 z-10">
              <button
                onClick={prevSlide}
                className="w-10 h-10 lg:w-12 lg:h-12 bg-pearl/90 dark:bg-noir/90 backdrop-blur-sm rounded-full flex items-center justify-center text-noir dark:text-pearl hover:bg-gold hover:text-noir transition-premium shadow-lg hover:shadow-xl border border-noir/10 dark:border-pearl/10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>
            </div>
            
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-4 lg:right-8 z-10">
              <button
                onClick={nextSlide}
                className="w-10 h-10 lg:w-12 lg:h-12 bg-pearl/90 dark:bg-noir/90 backdrop-blur-sm rounded-full flex items-center justify-center text-noir dark:text-pearl hover:bg-gold hover:text-noir transition-premium shadow-lg hover:shadow-xl border border-noir/10 dark:border-pearl/10"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>
          </div>
        </div>
      </section>

      {/* Mobile Dots - Standalone section */}
      <div className="flex lg:hidden justify-center py-2">
        <div className="flex items-center justify-center space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-gold scale-125' 
                  : 'bg-noir/50 dark:bg-pearl/50 hover:bg-noir/70 dark:hover:bg-pearl/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <section className="mt-12 sm:mt-16 pt-20 sm:pt-16 lg:mt-8 lg:pt-24 xl:pt-32 pb-16 sm:pb-20 lg:pb-24 bg-noir dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 dark:bg-gradient-to-br text-pearl dark:text-pearl min-h-[600px] flex items-center">
        <motion.div 
          className="mx-auto max-w-7xl px-6 lg:px-8 w-full"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gold/20 rounded-full text-gold text-sm font-medium mb-6">
              By The Numbers
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-pearl dark:text-pearl sm:text-5xl lg:text-6xl mb-8">
              Proven
              <span className="block text-gold italic">Excellence</span>
            </h2>
            <p className="text-xl sm:text-2xl text-pearl/80 dark:text-pearl/80 max-w-4xl mx-auto leading-relaxed">
              Our commitment to delivering exceptional results is reflected in every project we complete and every client relationship we build.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12"
          >
            <motion.div variants={fadeInUp} className="text-center group p-6">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center group-hover:bg-gold/30 transition-premium shadow-lg">
                  <CheckCircle className="w-10 h-10 text-gold" />
                </div>
              </div>
              <div className="mb-4">
                <Counter number={250} suffix="+" />
              </div>
              <div className="text-pearl/80 text-base font-medium leading-tight">
                Projects Completed
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center group p-6">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center group-hover:bg-gold/30 transition-premium shadow-lg">
                  <TrendingUp className="w-10 h-10 text-gold" />
                </div>
              </div>
              <div className="mb-4">
                <Counter number={98} suffix="%" />
              </div>
              <div className="text-pearl/80 text-base font-medium leading-tight">
                Client Satisfaction
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center group p-6">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center group-hover:bg-gold/30 transition-premium shadow-lg">
                  <Globe className="w-10 h-10 text-gold" />
                </div>
              </div>
              <div className="mb-4">
                <Counter number={15} suffix="+" />
              </div>
              <div className="text-pearl/80 text-base font-medium leading-tight">
                Countries Served
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center group p-6">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center group-hover:bg-gold/30 transition-premium shadow-lg">
                  <Calendar className="w-10 h-10 text-gold" />
                </div>
              </div>
              <div className="mb-4">
                <Counter number={8} suffix="" />
              </div>
              <div className="text-pearl/80 text-base font-medium leading-tight">
                Years of Excellence
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 bg-noir/5 dark:bg-noir">
        <motion.div 
          className="mx-auto max-w-7xl px-6 lg:px-8 dark:text-pearl"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mx-auto max-w-2xl text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gold/10 rounded-full text-gold text-sm font-medium mb-6">
              Our Distinction
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-noir dark:text-pearl sm:text-5xl lg:text-6xl mb-8">
              Why leading brands choose us
            </h2>
            <p className="text-xl sm:text-2xl text-noir/70 dark:text-pearl/70 max-w-4xl mx-auto leading-relaxed">
              Our approach combines artistic vision with strategic precision, creating lasting impact for discerning clients.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                variants={fadeInUp}
                className="bg-gradient-to-br from-pearl/95 to-pearl/90 dark:from-gray-900/80 dark:to-gray-800/90 backdrop-blur-xl p-8 hover-lift rounded-3xl border-2 border-white/20 dark:border-gray-600/30 group-hover:border-gold/60 dark:group-hover:border-gold/50 shadow-2xl hover:shadow-gold/10 dark:hover:shadow-gold/20 transition-all duration-500 group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-gold/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center bg-gold/20">
                    <feature.icon className="h-6 w-6 text-gold" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-noir dark:text-pearl">{feature.name}</h3>
                </div>
                <p className="text-noir/70 dark:text-pearl/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-pearl to-gold/5 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 dark:bg-gradient-to-br relative overflow-hidden">
        <motion.div 
          className="mx-auto max-w-7xl px-6 lg:px-8 dark:text-pearl"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gold/10 rounded-full text-gold text-sm font-medium mb-6">
              Client Stories
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-noir dark:text-pearl sm:text-5xl lg:text-6xl mb-8">
              What Our Clients
              <span className="block text-gold italic">Say</span>
            </h2>
            <p className="text-xl sm:text-2xl text-noir/70 dark:text-pearl/70 max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what industry leaders say about working with Atelier Noir.
            </p>
          </motion.div>
          
          {/* Testimonials Slider */}
          <div className="relative">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                  {/* Mobile: Show 1, Tablet: Show 2, Desktop: Show 3 */}
                  {Array.from({ length: 3 }, (_, index) => {
                    const testimonialIndex = (currentTestimonial + index) % testimonials.length
                    const testimonial = testimonials[testimonialIndex]
                    
                    return (
                      <motion.div
                        key={`${currentTestimonial}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className={`bg-pearl dark:bg-gray-800 p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-premium border border-noir/5 dark:border-gray-600 ${
                          index === 0 ? 'md:col-span-2 lg:col-span-1' : 'hidden md:block'
                        } ${index === 2 ? 'hidden lg:block' : ''}`}
                      >
                        <div className="flex items-center mb-4">
                          <Quote className="w-8 h-8 text-gold mr-3" />
                          <div className="flex space-x-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-gold fill-current" />
                            ))}
                          </div>
                        </div>
                        
                        <p className="text-noir/80 dark:text-pearl/80 mb-6 leading-relaxed italic text-sm lg:text-base">
                          "{testimonial.content}"
                        </p>
                        
                        <div className="border-t border-noir/10 dark:border-gray-600 pt-4">
                          <div className="font-semibold text-noir dark:text-pearl text-base lg:text-lg">{testimonial.author}</div>
                          <div className="text-sm text-noir/60 dark:text-pearl/60">
                            {testimonial.position}
                          </div>
                          <div className="text-xs text-noir/50 dark:text-pearl/50 mt-1">
                            {testimonial.company}
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-6 lg:-left-12 xl:-left-16 z-10">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 lg:w-12 lg:h-12 bg-pearl/90 dark:bg-noir/90 backdrop-blur-sm rounded-full flex items-center justify-center text-noir dark:text-pearl hover:bg-gold hover:text-noir transition-premium shadow-lg hover:shadow-xl border border-noir/10 dark:border-pearl/10"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>
            </div>
            
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-6 lg:-right-12 xl:-right-16 z-10">
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 lg:w-12 lg:h-12 bg-pearl/90 dark:bg-noir/90 backdrop-blur-sm rounded-full flex items-center justify-center text-noir dark:text-pearl hover:bg-gold hover:text-noir transition-premium shadow-lg hover:shadow-xl border border-noir/10 dark:border-pearl/10"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-premium ${
                    index === currentTestimonial 
                      ? 'bg-gold shadow-lg scale-110' 
                      : 'bg-noir/30 hover:bg-noir/50'
                  }`}
                  aria-label={`Go to testimonial set ${index + 1}`}
                />
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex justify-center mt-6 space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 bg-pearl/90 backdrop-blur-sm rounded-full flex items-center justify-center text-noir hover:bg-gold hover:text-noir transition-premium shadow-lg border border-noir/10"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 bg-pearl/90 backdrop-blur-sm rounded-full flex items-center justify-center text-noir hover:bg-gold hover:text-noir transition-premium shadow-lg border border-noir/10"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-noir/5 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 dark:bg-gradient-to-bl">
        <motion.div 
          className="mx-auto max-w-7xl px-6 lg:px-8 dark:text-pearl"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gold/10 rounded-full text-gold text-sm font-medium mb-6">
              Our Methodology
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-noir dark:text-pearl sm:text-5xl lg:text-6xl mb-8">
              How We Work
            </h2>
            <p className="text-xl sm:text-2xl text-noir/70 dark:text-pearl/70 max-w-4xl mx-auto leading-relaxed">
              Our proven four-step process ensures every project delivers exceptional results that exceed expectations.
            </p>
          </motion.div>
          
          <div className="relative">
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
            >
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center group"
                >
                  <div className="bg-black/20 dark:bg-black/40 backdrop-blur-lg p-6 lg:p-8 rounded-2xl hover-lift transition-premium h-80 lg:h-72 flex flex-col justify-between border border-pearl/10 dark:border-pearl/20 group-hover:border-gold/40 dark:group-hover:border-gold/60 shadow-xl group-hover:shadow-2xl">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-gold text-noir rounded-full flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-premium">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-semibold text-black dark:text-pearl mb-4">{step.title}</h3>
                    </div>
                    <p className="text-black/70 dark:text-pearl/70 leading-relaxed text-sm lg:text-base flex-grow flex items-center justify-center text-center">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Connecting Lines - Positioned absolutely in container */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 -translate-y-0.5 pointer-events-none">
              {/* Line 1: Between Discovery and Ideation */}
              <div className="absolute top-0 left-[calc(25%-1.5rem)] w-12 h-full bg-gold/60"></div>
              {/* Line 2: Between Ideation and Creation */}
              <div className="absolute top-0 left-[calc(50%-1.5rem)] w-12 h-full bg-gold/60"></div>
              {/* Line 3: Between Creation and Refinement */}
              <div className="absolute top-0 left-[calc(75%-1.5rem)] w-12 h-full bg-gold/60"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Recent Work Showcase */}
      <section className="py-24 bg-gradient-to-br from-pearl via-pearl to-gold/10 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 dark:bg-gradient-to-br">
        <motion.div 
          className="mx-auto max-w-7xl px-6 lg:px-8 dark:text-pearl"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gold/10 rounded-full text-gold text-sm font-medium mb-6">
              Recent Projects
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-noir dark:text-pearl sm:text-5xl lg:text-6xl mb-8">
              Latest Work
            </h2>
            <p className="text-xl sm:text-2xl text-noir/70 dark:text-pearl/70 max-w-4xl mx-auto leading-relaxed">
              Explore our most recent projects showcasing innovative design solutions across various industries.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {recentWork.map((work, index) => (
              <motion.div
                key={work.id}
                variants={fadeInUp}
                className="group cursor-pointer"
              >
                <div className="bg-black/20 dark:bg-black/40 backdrop-blur-lg p-8 rounded-2xl h-80 flex flex-col justify-between hover-lift transition-premium border border-pearl/10 dark:border-pearl/20 group-hover:border-gold/40 dark:group-hover:border-gold/60 shadow-xl group-hover:shadow-2xl">
                  <div>
                    <div className="text-xs text-black/60 dark:text-pearl/70 mb-2 tracking-wider">{work.category.toUpperCase()}</div>
                    <h3 className="text-2xl font-bold text-black dark:text-pearl mb-4 group-hover:text-gold transition-premium">{work.title}</h3>
                    <p className="text-black/80 dark:text-pearl/80 leading-relaxed">{work.description}</p>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div className="text-sm text-black/60 dark:text-pearl/70">{work.year}</div>
                    <div className="w-10 h-10 bg-pearl/20 dark:bg-pearl/30 rounded-full flex items-center justify-center group-hover:bg-gold/30 dark:group-hover:bg-gold/40 transition-premium">
                      <ArrowRight className="w-5 h-5 text-black dark:text-pearl group-hover:text-gold transition-premium" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-12">
            <Link
              href="/work"
              className="inline-flex items-center gap-3 bg-noir text-pearl px-8 py-4 text-lg font-medium hover:bg-gold hover:text-noir transition-premium rounded-lg shadow-lg hover:shadow-xl"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 bg-noir dark:bg-noir text-pearl dark:text-pearl">
        <motion.div 
          className="mx-auto max-w-7xl px-6 lg:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gold/20 rounded-full text-gold text-sm font-medium mb-6">
              Recognition
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-pearl dark:text-pearl sm:text-5xl lg:text-6xl mb-8">
              Awards &
              <span className="block text-gold italic">Achievements</span>
            </h2>
            <p className="text-xl sm:text-2xl text-pearl/80 dark:text-pearl/80 max-w-4xl mx-auto leading-relaxed">
              Our commitment to excellence has been recognized by leading industry organizations worldwide.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {awards.map((award, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 bg-pearl/10 dark:bg-pearl/5 backdrop-blur-lg rounded-2xl border border-pearl/20 dark:border-pearl/30 group-hover:border-gold/50 dark:group-hover:border-gold/70 shadow-xl group-hover:shadow-2xl transition-premium group"
              >
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-premium">
                  <Award className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-gold transition-premium">{award.title}</h3>
                <p className="text-pearl/70 text-sm mb-2">{award.organization}</p>
                <div className="flex justify-between items-center text-xs text-pearl/60">
                  <span>{award.year}</span>
                  <span>{award.category}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 bg-noir/5 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 dark:bg-gradient-to-br text-noir dark:text-pearl">
        <motion.div 
          className="mx-auto max-w-7xl px-6 lg:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <div className="asymmetric-grid items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-gold/10 rounded-full text-gold text-sm font-medium mb-6">
                Start Your Journey
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-noir dark:text-pearl sm:text-5xl lg:text-6xl mb-8">
                Ready to elevate your
                <span className="block text-gold italic">brand?</span>
              </h2>
              <p className="text-xl sm:text-2xl text-noir/80 dark:text-pearl/80 mb-6 leading-relaxed max-w-4xl mx-auto">
                Let's discuss how we can bring your vision to life with our signature blend of strategy and artistry.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-gold text-noir px-8 py-4 text-lg font-medium hover:bg-noir hover:text-pearl transition-premium"
              >
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div 
                  className="h-32 bg-gradient-to-br from-noir/10 to-noir/5 rounded-lg p-4 flex items-end"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-xs text-noir/60 dark:text-pearl/60">Brand Strategy</div>
                </motion.div>
                <motion.div 
                  className="h-40 bg-gradient-to-br from-gold/20 to-gold/10 rounded-lg p-4 flex items-end"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-xs text-noir/70 dark:text-pearl/70">Visual Identity</div>
                </motion.div>
              </div>
              <div className="space-y-4 mt-8">
                <motion.div 
                  className="h-28 bg-gradient-to-br from-gold/10 to-gold/5 rounded-lg p-4 flex items-end"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-xs text-noir/60 dark:text-pearl/60">Digital Design</div>
                </motion.div>
                <motion.div 
                  className="h-36 bg-gradient-to-br from-noir/5 to-pearl rounded-lg p-4 flex items-end border border-noir/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-xs text-noir/60 dark:text-pearl/60">Art Direction</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
