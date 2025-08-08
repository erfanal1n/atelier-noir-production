'use client'

import { useState, useEffect, ReactNode } from 'react'
import LoadingScreen from './LoadingScreen'

interface PageWrapperProps {
  children: ReactNode
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => {
        setShowContent(true)
      }, 800)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!showContent) {
    return <LoadingScreen isLoading={isLoading} />
  }

  return <>{children}</>
}