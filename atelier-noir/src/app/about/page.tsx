'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Heart, Lightbulb, Target, Trophy, Users, Award, Coffee } from 'lucide-react'
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
    scale: 1.05, 
    y: -10,
    transition: {
      duration: 0.3,
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
      ease: "easeOut"
    }
  }
}

const values = [
  {
    icon: IconHeart,
    title: 'Human-Centered',
    description: 'We believe great design connects with people on an emotional level, creating meaningful experiences that resonate.'
  },
  {
    icon: IconBulb,
    title: 'Innovation First',
    description: 'Every project challenges us to push boundaries and explore new possibilities in design and strategy.'
  },
  {
    icon: IconTarget,
    title: 'Purpose-Driven',
    description: 'We craft solutions that serve a clear purpose, always aligning creative vision with business objectives.'
  },
  {
    icon: IconAward,
    title: 'Excellence Always',
    description: 'Our commitment to quality is unwavering. We pursue perfection in every detail, no matter the scale.'
  }
]

const team = [
  {
    name: 'Erfan Alin',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15 years experience building successful digital agencies across South Asia.'
  },
  {
    name: 'Sadia Islam Shanta',
    role: 'Managing Director',
    bio: 'Strategic business leader specializing in client relations and operational excellence in creative industries.'
  },
  {
    name: 'Shahrukh Khan',
    role: 'Creative Director',
    bio: 'Award-winning creative professional with expertise in brand identity and digital storytelling.'
  }
]

export default function About() {
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
                We are
                <span className="block text-gold italic">Atelier Noir</span>
              </h1>
              <p className="text-2xl text-noir/80 dark:text-pearl/80 leading-relaxed mb-8">
                A collective of designers, strategists, and creative thinkers dedicated to crafting distinctive brand experiences.
              </p>
              <p className="text-lg text-noir/70 dark:text-pearl/70 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Founded in 2018, we&apos;ve grown from a small studio into a recognized creative agency, working with ambitious brands who value sophisticated design and strategic thinking.
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
                        <IconUsers className="h-16 w-16 text-gold drop-shadow-lg mx-auto mb-4" />
                      </motion.div>
                      <div className="text-2xl font-bold text-gold">6</div>
                      <p className="text-gold/80 text-sm">Years Creating</p>
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
                        <Award className="h-16 w-16 text-noir/70 dark:text-pearl/80 drop-shadow-lg mx-auto mb-4" />
                      </motion.div>
                      <div className="text-lg font-bold text-noir/70 dark:text-pearl/90">15+</div>
                      <p className="text-noir/50 dark:text-pearl/70 text-sm">Awards Won</p>
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

      <section className="py-20 sm:py-24 lg:py-28 bg-noir dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 dark:bg-gradient-to-br text-pearl dark:text-pearl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-pearl/10 rounded-full text-gold text-sm font-medium mb-8 hover:bg-pearl/20 transition-all duration-300 hover:scale-105">
              Our Core Values
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-pearl dark:text-pearl sm:text-5xl lg:text-6xl mb-8 hover:text-gold transition-colors duration-500">Our Philosophy</h2>
            <p className="text-xl sm:text-2xl text-pearl/80 dark:text-pearl/80 max-w-4xl mx-auto leading-relaxed mb-6 hover:text-pearl dark:hover:text-pearl transition-colors duration-300">
              Great design is invisible until it&apos;s not. We create experiences that feel effortless yet memorable.
            </p>
            <p className="text-lg text-pearl/70 dark:text-pearl/70 max-w-3xl mx-auto leading-relaxed hover:text-pearl/90 dark:hover:text-pearl/90 transition-colors duration-300">
              Every decision serves both beauty and purpose, creating sophisticated yet accessible solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 animate-stagger">
            {values.map((value) => (
              <div
                key={value.title}
                className="group relative overflow-hidden bg-pearl/10 dark:bg-black/40 backdrop-blur-lg text-pearl dark:text-pearl rounded-3xl cursor-pointer border border-pearl/20 dark:border-pearl/30 group-hover:border-gold/40 dark:group-hover:border-gold/60 shadow-xl group-hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="p-8 lg:p-10 h-full relative z-10 rounded-3xl transition-all duration-300">
                  <div className="h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex h-18 w-18 lg:h-20 lg:w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-gold/30 via-gold/20 to-gold/15 border border-gold/30 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                        <value.icon className="h-10 w-10 lg:h-11 lg:w-11 text-gold drop-shadow-sm" />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-xl lg:text-2xl font-bold mb-4 transition-colors duration-300 text-pearl dark:text-pearl group-hover:text-gold">
                        {value.title}
                      </h3>
                      <p className="leading-relaxed text-sm lg:text-base transition-colors duration-300 text-pearl/80 dark:text-pearl/80 group-hover:text-pearl dark:group-hover:text-pearl">
                        {value.description}
                      </p>
                    </div>
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
              The Creative Minds
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-noir dark:text-pearl sm:text-5xl lg:text-6xl mb-8">Meet the Team</h2>
            <p className="text-xl sm:text-2xl text-noir/80 dark:text-pearl/80 max-w-4xl mx-auto leading-relaxed mb-6">
              Our diverse collective brings together decades of experience from leading agencies and studios worldwide.
            </p>
            <p className="text-lg text-noir/70 dark:text-pearl/70 max-w-3xl mx-auto leading-relaxed">
              Every project benefits from our combined expertise in strategy, design, and creative direction.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="group relative overflow-hidden bg-white/90 dark:bg-black/40 backdrop-blur-lg text-noir dark:text-pearl rounded-3xl cursor-pointer border border-noir/15 dark:border-pearl/20 group-hover:border-gold/40 dark:group-hover:border-gold/60 shadow-xl group-hover:shadow-2xl"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 rounded-3xl transition-all duration-300"
                >
                  <div className="aspect-[3/4] bg-noir p-8 flex flex-col justify-between relative rounded-t-3xl">
                    <div className="relative z-10">
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-gold/25 to-gold/20 rounded-2xl border border-gold/30">
                        <span className="text-sm font-semibold text-gold">{member.role}</span>
                      </div>
                    </div>
                    
                    <div className="relative z-10 flex-1 flex items-center justify-center">
                      <motion.div 
                        className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-pearl/90 to-pearl/80 rounded-full flex items-center justify-center shadow-2xl border-4 border-gold/30"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-28 h-28 lg:w-36 lg:h-36 bg-gradient-to-br from-noir/10 to-noir/5 rounded-full flex items-center justify-center">
                          <div className="w-20 h-20 lg:w-28 lg:h-28 bg-gradient-to-br from-gold/20 to-gold/30 rounded-full"></div>
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl lg:text-3xl font-bold text-pearl mb-2 group-hover:text-gold transition-colors duration-300">{member.name}</h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold/60 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-10 bg-white/90 dark:bg-black/40 text-noir dark:text-pearl rounded-b-3xl backdrop-blur-lg">
                    <p className="text-noir/80 dark:text-pearl/80 leading-relaxed text-base lg:text-lg group-hover:text-noir dark:group-hover:text-pearl transition-colors duration-300 font-medium">{member.bio}</p>
                  </div>
                </motion.div>
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none bg-gradient-to-br from-gold/12 via-gold/4 to-transparent rounded-3xl" />
                
                <div className="absolute inset-2 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-br from-gold/8 to-transparent" />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="text-center mt-16 lg:mt-20"
          >
            <p className="text-xl text-noir/70 dark:text-pearl/70 mb-8">Want to join our creative collective?</p>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/careers"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold to-gold/90 text-noir px-10 py-5 text-lg font-semibold rounded-2xl min-w-[200px] shadow-lg hover:shadow-xl hover:shadow-gold/20 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold/90 to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">View Open Positions</span>
                <motion.div
                  className="relative z-10"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

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
              Our Story
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-pearl dark:text-pearl sm:text-5xl lg:text-6xl mb-8">
              The Journey That
              <span className="block text-gold italic">Defines Us</span>
            </h2>
            <p className="text-xl sm:text-2xl text-pearl/80 dark:text-pearl/80 max-w-4xl mx-auto leading-relaxed mb-6">
              From a small studio in Dhaka to partnering with brands across the region, our story is one of passion, growth, and unwavering commitment to craft.
            </p>
            <p className="text-lg text-pearl/70 dark:text-pearl/70 max-w-3xl mx-auto leading-relaxed">
              Every milestone has shaped our identity and strengthened our resolve to create meaningful work.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Central timeline line */}
            <div className="absolute left-4 md:left-1/2 w-1 bg-gold/40 rounded-full transform md:-translate-x-1/2" style={{ top: '3rem', bottom: '3rem' }}></div>
            
            <div className="space-y-12">
              {/* Timeline Event 1 - 2018 */}
              <motion.div variants={fadeInUp} className="relative">
                <div className="flex items-start">
                  {/* Left side - Date badge */}
                  <div className="w-full md:w-1/2 md:pr-8">
                    <div className="relative bg-gold text-noir px-8 py-4 rounded-l-full ml-12 md:ml-0 font-bold text-xl shadow-lg">
                      2018
                      {/* Speech bubble arrow */}
                      <div className="absolute top-1/2 -right-4 w-0 h-0 border-l-8 border-r-0 border-t-8 border-b-8 border-l-gold border-t-transparent border-b-transparent transform -translate-y-1/2"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="ml-12 md:ml-0 mt-4 bg-pearl dark:bg-black/40 dark:backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-noir/10 dark:border-pearl/20">
                      <h3 className="text-xl font-bold text-gold mb-3">The Beginning</h3>
                      <p className="text-noir/70 dark:text-pearl/70 leading-relaxed">Started as a passion project in a small studio, driven by the vision to elevate Bangladeshi design on the global stage.</p>
                    </div>
                  </div>
                  
                  {/* Circle on timeline */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-6 h-6 bg-pearl border-4 border-gold rounded-full transform -translate-x-1/2 shadow-lg"></div>
                </div>
              </motion.div>

              {/* Timeline Event 2 - 2020 */}
              <motion.div variants={fadeInUp} className="relative">
                <div className="flex items-start md:justify-end">
                  {/* Right side - Date badge */}
                  <div className="w-full md:w-1/2 md:pl-8">
                    <div className="relative bg-gold/90 text-noir px-8 py-4 rounded-r-full ml-12 md:ml-0 md:rounded-l-full md:rounded-r-full font-bold text-xl shadow-lg">
                      2020
                      {/* Speech bubble arrow */}
                      <div className="absolute top-1/2 -left-4 w-0 h-0 border-r-8 border-l-0 border-t-8 border-b-8 border-r-gold/90 border-t-transparent border-b-transparent transform -translate-y-1/2 md:hidden"></div>
                      <div className="hidden md:block absolute top-1/2 -left-4 w-0 h-0 border-r-8 border-l-0 border-t-8 border-b-8 border-r-gold/90 border-t-transparent border-b-transparent transform -translate-y-1/2"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="ml-12 md:ml-0 mt-4 bg-pearl dark:bg-black/40 dark:backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-noir/10 dark:border-pearl/20">
                      <h3 className="text-xl font-bold text-gold mb-3">Growth & Recognition</h3>
                      <p className="text-noir/70 dark:text-pearl/70 leading-relaxed">Expanded our team and won our first international design award, establishing our reputation for excellence.</p>
                    </div>
                  </div>
                  
                  {/* Circle on timeline */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-6 h-6 bg-pearl border-4 border-gold/90 rounded-full transform -translate-x-1/2 shadow-lg"></div>
                </div>
              </motion.div>

              {/* Timeline Event 3 - 2024 */}
              <motion.div variants={fadeInUp} className="relative">
                <div className="flex items-start">
                  {/* Left side - Date badge */}
                  <div className="w-full md:w-1/2 md:pr-8">
                    <div className="relative bg-gold text-noir px-8 py-4 rounded-l-full ml-12 md:ml-0 font-bold text-xl shadow-lg">
                      2024
                      {/* Speech bubble arrow */}
                      <div className="absolute top-1/2 -right-4 w-0 h-0 border-l-8 border-r-0 border-t-8 border-b-8 border-l-gold border-t-transparent border-b-transparent transform -translate-y-1/2"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="ml-12 md:ml-0 mt-4 bg-pearl dark:bg-black/40 dark:backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-noir/10 dark:border-pearl/20">
                      <h3 className="text-xl font-bold text-gold mb-3">Leading Innovation</h3>
                      <p className="text-noir/70 dark:text-pearl/70 leading-relaxed">Today, we&apos;re recognized as one of the premier creative agencies in South Asia, continuously pushing creative boundaries.</p>
                    </div>
                  </div>
                  
                  {/* Circle on timeline */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-6 h-6 bg-pearl border-4 border-gold rounded-full transform -translate-x-1/2 shadow-lg"></div>
                </div>
              </motion.div>
            </div>
          </div>
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
              Let&apos;s Collaborate
            </motion.div>
            
            <h2 className="text-4xl font-bold tracking-tight text-noir dark:text-pearl sm:text-5xl lg:text-6xl mb-8">
              Ready to work 
              <span className="block text-gold italic">together?</span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-noir/80 dark:text-pearl/80 mb-6 leading-relaxed max-w-4xl mx-auto">
              We partner with forward-thinking brands who value the power of exceptional design. Let&apos;s create something remarkable together.
            </p>
            
            <p className="text-lg text-noir/70 dark:text-pearl/70 mb-12 leading-relaxed max-w-3xl mx-auto">
              Through strategic thinking and creative excellence, we transform ambitious ideas into meaningful brand experiences that inspire action and create lasting impact.
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
                  <span className="relative z-10">Start a Conversation</span>
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
              <p className="text-sm text-noir/60 dark:text-pearl/60 font-medium">Creative Excellence</p>
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
              <p className="text-sm text-noir/60 dark:text-pearl/60 font-medium">Strategic Thinking</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gold/15 to-gold/8 rounded-2xl flex items-center justify-center mb-4">
                <IconDeviceDesktop className="w-8 h-8 text-gold/80" />
              </div>
              <p className="text-sm text-noir/60 dark:text-pearl/60 font-medium">Digital Innovation</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}