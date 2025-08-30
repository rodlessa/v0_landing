"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "pt-br"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  mounted: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("language") as Language
    if (stored && (stored === "en" || stored === "pt-br")) {
      setLanguage(stored)
    }
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "pt-br" : "en"
    console.log("[v0] Language changing from", language, "to", newLanguage)
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage, mounted }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
