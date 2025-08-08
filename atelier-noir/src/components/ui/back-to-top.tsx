'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50"
        >
          <button
            onClick={scrollToTop}
            className="group relative overflow-hidden bg-noir dark:bg-pearl text-pearl dark:text-noir hover:bg-gold hover:text-noir dark:hover:bg-gold dark:hover:text-noir shadow-lg hover:shadow-xl transition-all duration-300 rounded-full w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex flex-col items-center justify-center border-2 border-pearl/30 dark:border-noir/30 hover:border-gold"
            aria-label="Back to top"
          >
            <motion.div
              className="flex items-center justify-center"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 stroke-2" />
            </motion.div>
            
            <div className="text-[8px] sm:text-[9px] lg:text-[10px] font-semibold leading-none tracking-wide">
              TO TOP
            </div>

            <motion.div
              className="absolute inset-0 bg-gold rounded-full opacity-0 group-hover:opacity-100"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              style={{ zIndex: -1 }}
            />
          </button>
          <motion.div
            className="absolute inset-0 bg-gold/30 rounded-full pointer-events-none"
            initial={{ scale: 0, opacity: 0 }}
            whileTap={{ scale: 1.5, opacity: [0, 0.5, 0] }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}