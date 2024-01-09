'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import LightMode from '@/images/lightmode.svg'
import DarkMode from '@/images/darkmode.svg'

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
        <Image 
          src={LightMode}
          alt='Light Mode'
          onClick={() => setTheme('light')}
        />
      </div>
    )
  }

  if (resolvedTheme === 'light') {
    return (
      <div className={`cursor-pointer ${className}`}>
        <Image 
          src={DarkMode}
          alt='Dark Mode'
          onClick={() => setTheme('dark')}
        />
      </div>
    )
  }
}