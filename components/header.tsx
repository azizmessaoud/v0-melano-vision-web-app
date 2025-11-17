'use client'

import { Heart } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <Heart className="w-6 h-6 text-primary-foreground" fill="currentColor" />
          </div>
          <h1 className="text-xl font-bold text-foreground">MelanoVision</h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#detection" className="text-foreground/70 hover:text-foreground transition">Detection</a>
          <a href="#chatbots" className="text-foreground/70 hover:text-foreground transition">Support</a>
          <a href="#about" className="text-foreground/70 hover:text-foreground transition">About</a>
        </nav>
      </div>
    </header>
  )
}
