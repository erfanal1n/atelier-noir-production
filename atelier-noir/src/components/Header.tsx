'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import ThemeToggleButton from './ui/theme-toggle-button'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/work' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDarkBackground, setIsDarkBackground] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const detectBackground = () => {
      try {
        if (window.scrollY <= 20) {
          setIsDarkBackground(false)
          return
        }

        const headerElement = document.querySelector('header')
        if (!headerElement) return

        const headerRect = headerElement.getBoundingClientRect()
        const headerHeight = headerRect.height
        
        const sampleY = headerHeight + 10
        const sampleX = window.innerWidth / 2
        
        headerElement.style.pointerEvents = 'none'
        let elementBehind = document.elementFromPoint(sampleX, sampleY)
        headerElement.style.pointerEvents = 'auto'
        
        if (elementBehind) {
          let backgroundElement = elementBehind
          let maxDepth = 10
          
          while (backgroundElement && maxDepth > 0) {
            const computedStyle = window.getComputedStyle(backgroundElement)
            const bgColor = computedStyle.backgroundColor
            const bgImage = computedStyle.backgroundImage
            
            const hasBackground = (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') || 
                                 (bgImage && bgImage !== 'none')
            
            const isSection = backgroundElement.tagName === 'SECTION' || 
                             backgroundElement.tagName === 'DIV' ||
                             backgroundElement.tagName === 'MAIN' ||
                             backgroundElement.tagName === 'HEADER' ||
                             backgroundElement.classList.contains('section') ||
                             backgroundElement.classList.contains('container') ||
                             Array.from(backgroundElement.classList).some(cls => cls.startsWith('bg-')) ||
                             backgroundElement.hasAttribute('data-section')
            
            if (hasBackground && isSection) {
              break
            }
            
            backgroundElement = backgroundElement.parentElement
            maxDepth--
          }
          
          if (backgroundElement) {
            const computedStyle = window.getComputedStyle(backgroundElement)
            const bgColor = computedStyle.backgroundColor
            const bgImage = computedStyle.backgroundImage
            
            let isMatBlack = false
            
            const classList = Array.from(backgroundElement.classList)
            
            const isBlackBackground = classList.some(cls => 
              cls === 'bg-noir' ||
              cls === 'bg-black' ||
              cls === 'bg-[#000000]' ||
              cls === 'bg-[#111111]' ||
              cls === 'bg-gray-900' ||
              cls === 'bg-slate-900'
            )
            
            const isNonBlackBackground = classList.some(cls => 
              cls.startsWith('bg-gray-') && !cls.includes('900') ||
              cls.startsWith('bg-slate-') && !cls.includes('900') ||
              cls.startsWith('bg-zinc-') && !cls.includes('900') ||
              cls.startsWith('bg-neutral-') && !cls.includes('900') ||
              cls.startsWith('bg-stone-') && !cls.includes('900') ||
              cls.startsWith('bg-red-') ||
              cls.startsWith('bg-blue-') ||
              cls.startsWith('bg-green-') ||
              cls.startsWith('bg-yellow-') ||
              cls.startsWith('bg-purple-') ||
              cls.startsWith('bg-pink-') ||
              cls.startsWith('bg-indigo-') ||
              cls.startsWith('bg-white') ||
              cls.startsWith('bg-pearl')
            )
            
            if (isBlackBackground && !isNonBlackBackground) {
              isMatBlack = true
            } else if (isNonBlackBackground) {
              isMatBlack = false
            } else {
              if (bgImage !== 'none') {
                if (bgImage.includes('gradient') && 
                    (bgImage.includes('noir') || 
                     bgImage.includes('rgb(0, 0, 0)') ||
                     bgImage.includes('rgba(0, 0, 0') ||
                     bgImage.includes('black'))) {
                  isMatBlack = true
                }
              } else if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
                const rgbMatch = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
                if (rgbMatch) {
                  const [, r, g, b] = rgbMatch.map(Number)
                  isMatBlack = r <= 15 && g <= 15 && b <= 15
                }
              }
            }
            
            setIsDarkBackground(isMatBlack)
          }
        }
      } catch (error) {
        setIsDarkBackground(false)
      }
    }

    detectBackground()
    
    window.addEventListener('scroll', detectBackground)
    const observer = new MutationObserver(detectBackground)
    observer.observe(document.body, { 
      attributes: true, 
      attributeFilter: ['class'],
      subtree: true 
    })
    
    return () => {
      window.removeEventListener('scroll', detectBackground)
      observer.disconnect()
    }
  }, [pathname])
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [mobileMenuOpen])

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true
    if (href !== '/' && pathname.startsWith(href)) return true
    return false
  }

  const getTextColor = () => {
    if (isDarkBackground) {
      return 'text-white'
    }
    return 'text-noir dark:text-pearl'
  }

  const getHoverTextColor = () => {
    if (isDarkBackground) {
      return 'hover:text-gold'
    }
    return 'hover:text-gold'
  }

  const getActiveTextColor = () => {
    return 'text-gold'
  }

  return (
    <motion.header 
      className={`fixed top-0 w-full z-40 border-b transition-premium ${
        scrolled 
          ? 'bg-pearl/98 dark:bg-noir/98 backdrop-blur-md border-noir/20 dark:border-pearl/20 shadow-lg' 
          : 'bg-pearl/95 dark:bg-noir/95 backdrop-blur-sm border-noir/10 dark:border-pearl/10'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <img 
              src={isDarkBackground ? "/Assets/atelier_noir_logo_dark_mode.png" : "/Assets/atelier_noir_logo_light_mode.png"}
              alt="Atelier Noir Logo" 
              className="h-8 w-auto transition-opacity duration-300"
            />
            <span className={`font-serif text-2xl font-semibold transition-colors ${getTextColor()} ${getHoverTextColor()}`}>
              Atelier Noir
            </span>
          </Link>
        </div>
        
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggleButton variant="circle-blur" start="top-right" isDarkBackground={isDarkBackground} />
          <motion.button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-3 min-w-[48px] min-h-[48px] transition-premium ${getTextColor()} ${getHoverTextColor()}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle mobile menu"
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </motion.div>
          </motion.button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              className="relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className={`text-sm font-medium leading-6 relative px-3 py-2 rounded-lg transition-premium ${
                  isActive(item.href)
                    ? 'text-gold bg-gold/10 dark:bg-gold/20'
                    : `${getTextColor()} ${getHoverTextColor()} hover:bg-gold/5 dark:hover:bg-gold/10`
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full"
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <ThemeToggleButton variant="circle-blur" start="top-right" isDarkBackground={isDarkBackground} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="bg-noir dark:bg-pearl text-pearl dark:text-noir px-6 py-2 text-sm font-medium hover:bg-gold hover:text-noir dark:hover:text-noir transition-premium rounded-lg shadow-lg hover:shadow-xl"
            >
              Start Project
            </Link>
          </motion.div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-[60]"
          >
            <motion.div 
              className="fixed inset-0 bg-noir/40 dark:bg-pearl/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <motion.div 
              className="fixed top-0 bottom-0 right-0 z-[70] w-[75%] max-w-[320px] sm:w-[60%] sm:max-w-[350px] md:w-[45%] md:max-w-[400px] bg-pearl dark:bg-noir shadow-2xl border-l border-noir/10 dark:border-pearl/10 h-screen"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-noir/10 dark:border-pearl/10">
                <span className="font-serif text-lg font-semibold text-noir dark:text-pearl">Menu</span>
                <motion.button
                  type="button"
                  className="p-3 min-w-[48px] min-h-[48px] rounded-lg text-noir dark:text-pearl hover:bg-noir/5 dark:hover:bg-pearl/5 transition-premium"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>
              
              <div className="px-6 py-8">
                <nav className="space-y-3">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className={`block px-4 py-4 min-h-[48px] rounded-lg text-base font-medium transition-premium ${
                          isActive(item.href)
                            ? 'text-gold bg-gold/10 dark:bg-gold/20 border-l-4 border-gold'
                            : 'text-noir dark:text-pearl hover:bg-noir/5 dark:hover:bg-pearl/5 hover:text-gold'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                
                <motion.div
                  className="mt-8 pt-6 border-t border-noir/10 dark:border-pearl/10"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    href="/contact"
                    className="block bg-noir dark:bg-pearl text-pearl dark:text-noir px-6 py-4 min-h-[48px] text-sm font-medium hover:bg-gold hover:text-noir dark:hover:text-noir transition-premium text-center rounded-lg shadow-lg hover:shadow-xl"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Start Project
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}