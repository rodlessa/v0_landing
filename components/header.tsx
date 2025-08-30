"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageToggle } from "@/components/language-toggle"
import { ThemeToggle } from "@/components/theme-toggle"
import { useLanguage } from "@/hooks/use-language"

const translations = {
  en: {
    home: "Home",
    services: "Services",
    experience: "Experience",
    specializations: "Specializations",
    contact: "Contact",
  },
  "pt-br": {
    home: "Início",
    services: "Serviços",
    experience: "Experiência",
    specializations: "Especializações",
    contact: "Contato",
  },
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-primary">
              rdls.dev
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium hover:text-accent transition-colors">
              {t.home}
            </a>
            <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">
              {t.services}
            </a>
            <a href="#experience" className="text-sm font-medium hover:text-accent transition-colors">
              {t.experience}
            </a>
            <a href="#specializations" className="text-sm font-medium hover:text-accent transition-colors">
              {t.specializations}
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
              {t.contact}
            </a>
          </nav>

          {/* Theme and Language Toggles */}
          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle />
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-sm font-medium hover:text-accent transition-colors">
                {t.home}
              </a>
              <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">
                {t.services}
              </a>
              <a href="#experience" className="text-sm font-medium hover:text-accent transition-colors">
                {t.experience}
              </a>
              <a href="#specializations" className="text-sm font-medium hover:text-accent transition-colors">
                {t.specializations}
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
                {t.contact}
              </a>
              <div className="flex items-center space-x-2 pt-4">
                <ThemeToggle />
                <LanguageToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
