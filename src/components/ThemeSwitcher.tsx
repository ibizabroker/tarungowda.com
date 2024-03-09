'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import LightMode from '@/icons/lightmode.svg'
import DarkMode from '@/icons/darkmode.svg'

export default function ThemeSwitcher({ className }: { className: string }) {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  if (resolvedTheme === 'dark') {
    return (
      <div className={`cursor-pointer ${className}`}>
        <LightMode 
          onClick={() => setTheme('light')}
        />
      </div>
    )
  }

  if (resolvedTheme === 'light') {
    return (
      <div className={`cursor-pointer ${className}`}>
        <DarkMode 
          onClick={() => setTheme('dark')}
        />
      </div>
    )
  }
}