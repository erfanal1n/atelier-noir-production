'use client'

import Link from 'next/link'
import { Instagram, Linkedin, Mail, ArrowRight, Facebook } from 'lucide-react'
import XIcon from './icons/XIcon'

const navigation = {
  services: [
    { name: 'Brand Identity', href: '/services#branding' },
    { name: 'Web Design', href: '/services#web' },
    { name: 'Digital Strategy', href: '/services#strategy' },
    { name: 'Art Direction', href: '/services#art-direction' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Process', href: '/about#process' },
    { name: 'Careers', href: '/careers' },
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/__YOU_KNOW_WHOO__/',
      icon: Instagram,
    },
    {
      name: 'X',
      href: '#',
      icon: XIcon,
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/erfanverse',
      icon: Facebook,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/md-erfanul-haque-311042332/',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:hello@ateliernoir.com',
      icon: Mail,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-noir dark:bg-noir text-pearl dark:text-pearl">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="asymmetric-grid mb-16">
          <div>
            <Link href="/" className="inline-block flex items-center gap-4">
              <img 
                src="/Assets/atelier_noir_logo_dark_mode.png" 
                alt="Atelier Noir Logo" 
                className="h-10 w-auto"
              />
              <span className="font-serif text-3xl font-semibold">
                Atelier Noir
              </span>
            </Link>
            <p className="mt-4 text-pearl/80 dark:text-pearl/80 text-lg leading-relaxed max-w-md">
              Crafting distinctive brands and digital experiences that resonate with sophistication and human connection.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold text-noir px-6 py-3 font-medium hover:bg-pearl dark:hover:bg-pearl hover:text-noir dark:hover:text-noir transition-premium"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-pearl dark:text-pearl">Services</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-pearl/80 dark:text-pearl/80 hover:text-gold transition-premium">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold leading-6 text-pearl dark:text-pearl">Company</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-pearl/80 dark:text-pearl/80 hover:text-gold transition-premium">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between border-t border-pearl/20 dark:border-pearl/20 pt-8">
          <div className="flex space-x-6">
            {navigation.social.map((item) => {
              const getHoverStyle = (name: string) => {
                switch (name) {
                  case 'Instagram':
                    return 'group hover:scale-110 transition-all duration-300 ease-out transform hover:[&>svg]:!text-pink-500'
                  case 'X':
                    return 'group hover:scale-110 transition-all duration-300 ease-out transform hover:[&>svg]:!text-white'
                  case 'Facebook':
                    return 'group hover:scale-110 transition-all duration-300 ease-out transform hover:[&>svg]:!text-blue-500'
                  case 'LinkedIn':
                    return 'group hover:scale-110 transition-all duration-300 ease-out transform hover:[&>svg]:!text-blue-600'
                  case 'Email':
                    return 'group hover:scale-110 transition-all duration-300 ease-out transform hover:[&>svg]:!text-gold'
                  default:
                    return 'group hover:scale-110 transition-all duration-300 ease-out transform hover:[&>svg]:!text-gold'
                }
              }
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-pearl/60 dark:text-pearl/60 ${getHoverStyle(item.name)}`}
                  style={{
                    '--hover-shadow': item.name === 'Instagram' ? '0 10px 25px rgba(236, 72, 153, 0.25)' :
                                     item.name === 'X' ? '0 10px 25px rgba(255, 255, 255, 0.25)' :
                                     item.name === 'Facebook' ? '0 10px 25px rgba(59, 130, 246, 0.25)' :
                                     item.name === 'LinkedIn' ? '0 10px 25px rgba(37, 99, 235, 0.25)' :
                                     '0 10px 25px rgba(184, 154, 100, 0.25)'
                  } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = e.currentTarget.style.getPropertyValue('--hover-shadow') || ''
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = ''
                  }}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5 transition-colors duration-300" aria-hidden="true" />
                </Link>
              )
            })}
          </div>
          
          <div className="mt-8 lg:mt-0 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
            <p className="text-xs leading-5 text-pearl/60 dark:text-pearl/60">
              Made By <a href="https://erfan-alin.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-200">Erfan Alin</a>. &copy; 2025. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-xs leading-5 text-pearl/60 dark:text-pearl/60 hover:text-gold transition-premium">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs leading-5 text-pearl/60 hover:text-gold transition-premium">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}