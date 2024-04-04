'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import LightMode from '@/icons/lightmode.svg'
import DarkMode from '@/icons/darkmode.svg'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={`theme ${
      resolvedTheme === 'light' ? 
        'light-theme' : 
        'dark-theme'
    }`}>
      {resolvedTheme === 'light' ?
        <DarkMode onClick={() => setTheme('dark')} /> :
        <LightMode onClick={() => setTheme('light')} />
      }
    </div>
  )
}