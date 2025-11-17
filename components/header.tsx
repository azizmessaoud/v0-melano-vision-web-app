'use client'

import { Heart, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
    console.log("[v0] Toggling theme from", resolvedTheme, 'to', newTheme)
    setTheme(newTheme)
  }

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 bg-card border-b border-border/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary-foreground" fill="currentColor" />
            </div>
            <h1 className="text-xl font-bold text-foreground">MelanoVision</h1>
          </div>
          <nav className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8">
              <a href="#detection" className="text-foreground/70 hover:text-foreground transition">Detection</a>
              <a href="#chatbots" className="text-foreground/70 hover:text-foreground transition">Support</a>
              <a href="#about" className="text-foreground/70 hover:text-foreground transition">About</a>
            </div>
          </nav>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <Heart className="w-6 h-6 text-primary-foreground" fill="currentColor" />
          </div>
          <h1 className="text-xl font-bold text-foreground">MelanoVision</h1>
        </div>
        <nav className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            <a href="#detection" className="text-foreground/70 hover:text-foreground transition">Detection</a>
            <a href="#chatbots" className="text-foreground/70 hover:text-foreground transition">Support</a>
            <a href="#about" className="text-foreground/70 hover:text-foreground transition">About</a>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {resolvedTheme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}
