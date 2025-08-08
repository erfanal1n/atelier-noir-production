'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search } from 'lucide-react'

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

export default function NotFound() {
  return (
    <div className="min-h-screen bg-pearl dark:bg-noir flex items-center justify-center px-6 py-24">
      <motion.div 
        className="text-center max-w-2xl mx-auto"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.div
          variants={fadeInUp}
          className="mb-8"
        >
          <motion.div
            className="text-8xl sm:text-9xl font-serif font-bold text-gold mb-4"
            animate={{ 
              scale: [1, 1.02, 1],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            404
          </motion.div>
          
          <div className="relative">
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-gold/20 via-transparent to-gold/20 rounded-full blur-xl"
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [0.8, 1.1, 0.8]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-noir dark:text-pearl mb-4 relative">
              Page Not Found
            </h1>
          </div>
        </motion.div>

        <motion.p 
          variants={fadeInUp}
          className="text-lg sm:text-xl text-noir/70 dark:text-pearl/70 mb-12 leading-relaxed"
        >
          The page you&apos;re looking for seems to have wandered off into the creative void. 
          Let&apos;s get you back on track with some beautiful destinations.
        </motion.p>

        <motion.div 
          variants={staggerContainer}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <Link
              href="/"
              className="inline-flex items-center gap-3 bg-noir dark:bg-pearl text-pearl dark:text-noir px-8 py-4 text-lg font-medium hover:bg-gold hover:text-noir transition-premium rounded-lg shadow-lg hover:shadow-xl group"
            >
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Back to Home
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Link
              href="/work"
              className="inline-flex items-center gap-3 text-noir dark:text-pearl border-2 border-noir/30 dark:border-pearl/30 hover:border-gold hover:text-gold px-8 py-4 text-lg font-medium transition-premium rounded-lg group"
            >
              <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Explore Our Work
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
        >
          <motion.div 
            className="p-6 bg-noir/5 dark:bg-pearl/5 rounded-2xl hover:bg-noir/10 dark:hover:bg-pearl/10 transition-premium group"
            whileHover={{ y: -5 }}
          >
            <Link href="/about" className="block">
              <h3 className="font-serif text-lg font-semibold text-noir dark:text-pearl mb-2 group-hover:text-gold transition-colors">
                About Us
              </h3>
              <p className="text-sm text-noir/60 dark:text-pearl/60">
                Learn about our creative journey
              </p>
            </Link>
          </motion.div>

          <motion.div 
            className="p-6 bg-noir/5 dark:bg-pearl/5 rounded-2xl hover:bg-noir/10 dark:hover:bg-pearl/10 transition-premium group"
            whileHover={{ y: -5 }}
          >
            <Link href="/services" className="block">
              <h3 className="font-serif text-lg font-semibold text-noir dark:text-pearl mb-2 group-hover:text-gold transition-colors">
                Services
              </h3>
              <p className="text-sm text-noir/60 dark:text-pearl/60">
                Discover what we can create
              </p>
            </Link>
          </motion.div>

          <motion.div 
            className="p-6 bg-noir/5 dark:bg-pearl/5 rounded-2xl hover:bg-noir/10 dark:hover:bg-pearl/10 transition-premium group"
            whileHover={{ y: -5 }}
          >
            <Link href="/contact" className="block">
              <h3 className="font-serif text-lg font-semibold text-noir dark:text-pearl mb-2 group-hover:text-gold transition-colors">
                Contact
              </h3>
              <p className="text-sm text-noir/60 dark:text-pearl/60">
                Start your project with us
              </p>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center"
          variants={fadeInUp}
        >
          <motion.button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-noir/60 dark:text-pearl/60 hover:text-gold transition-colors text-sm font-medium"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ 
            background: [
              'radial-gradient(circle at 20% 50%, rgba(184, 154, 100, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(184, 154, 100, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(184, 154, 100, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </motion.div>
    </div>
  )
}