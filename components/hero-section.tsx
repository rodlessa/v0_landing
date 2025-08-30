"use client"
import { Award, Shield, Server } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const translations = {
  en: {
    title: "Expert IT Consulting & AWS Solutions",
    subtitle: "Professional technical support engineering and backup solutions by Rodrigo Lessa Rodrigues",
    certification: "AWS SAA-003 Certified",
    features: {
      aws: "AWS Solutions",
      support: "Technical Support",
      backup: "Backup Solutions",
    },
  },
  "pt-br": {
    title: "Consultoria em TI e Soluções AWS Especializada",
    subtitle: "Engenharia de suporte técnico profissional e soluções de backup por Rodrigo Lessa Rodrigues",
    certification: "Certificado AWS SAA-003",
    features: {
      aws: "Soluções AWS",
      support: "Suporte Técnico",
      backup: "Soluções de Backup",
    },
  },
}

export function HeroSection() {
  const { language, mounted } = useLanguage()
  const t = translations[language] || translations.en

  console.log("[v0] Hero section rendering with language:", language, "mounted:", mounted)

  return (
    <section id="home" className="relative py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Award className="h-4 w-4" />
            {t.certification}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">{t.title}</h1>

          <p className="text-xl text-muted-foreground text-pretty mb-12 max-w-2xl mx-auto">{t.subtitle}</p>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="bg-accent/10 p-4 rounded-full mb-4">
                <Server className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{t.features.aws}</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-accent/10 p-4 rounded-full mb-4">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{t.features.support}</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-accent/10 p-4 rounded-full mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{t.features.backup}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
