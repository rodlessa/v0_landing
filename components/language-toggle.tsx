"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"

export function LanguageToggle() {
  const { language, toggleLanguage, mounted } = useLanguage()

  if (!mounted) {
    return (
      <Button variant="outline" size="sm" className="font-medium bg-transparent">
        EN
      </Button>
    )
  }

  return (
    <Button variant="outline" size="sm" onClick={toggleLanguage} className="font-medium bg-transparent">
      {language === "en" ? "PT-BR" : "EN"}
    </Button>
  )
}
