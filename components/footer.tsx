"use client"

import { useLanguage } from "@/hooks/use-language"

const translations = {
  en: {
    rights: "All rights reserved.",
    built: "Built with expertise and passion for IT consulting.",
  },
  "pt-br": {
    rights: "Todos os direitos reservados.",
    built: "Construído com expertise e paixão por consultoria em TI.",
  },
}

export function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">© 2024 rdls.dev - Rodrigo Lessa Rodrigues. {t.rights}</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">{t.built}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
