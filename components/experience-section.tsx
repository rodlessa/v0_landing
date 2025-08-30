"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Globe } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const translations = {
  en: {
    title: "Professional Experience",
    subtitle: "Proven track record in technical support and infrastructure management",
    vonixx: {
      title: "Main Support Analyst at Vonixx",
      period: "Previous Position",
      description:
        "Led technical support operations, collaborating with development and infrastructure teams to ensure optimal system performance and customer satisfaction.",
      skills: ["Team Collaboration", "System Analysis", "Customer Support", "Infrastructure Management"],
    },
    international: {
      title: "International Technical Support Engineer",
      period: "Currently at SupportYourApp",
      description:
        "Currently providing specialized IT consulting services internationally, focusing on technical support engineering and infrastructure solutions for global clients.",
      skills: ["Global Support", "Remote Consulting", "Multi-language Support", "Cross-cultural Communication"],
    },
  },
  "pt-br": {
    title: "Experiência Profissional",
    subtitle: "Histórico comprovado em suporte técnico e gerenciamento de infraestrutura",
    vonixx: {
      title: "Analista de Suporte Principal na Vonixx",
      period: "Posição Anterior",
      description:
        "Liderei operações de suporte técnico, colaborando com equipes de desenvolvimento e infraestrutura para garantir desempenho otimizado do sistema e satisfação do cliente.",
      skills: ["Colaboração em Equipe", "Análise de Sistemas", "Suporte ao Cliente", "Gerenciamento de Infraestrutura"],
    },
    international: {
      title: "Engenheiro de Suporte Técnico Internacional",
      period: "Atualmente na SupportYourApp",
      description:
        "Atualmente fornecendo serviços especializados de consultoria em TI internacionalmente, focando em engenharia de suporte técnico e soluções de infraestrutura para clientes globais.",
      skills: ["Suporte Global", "Consultoria Remota", "Suporte Multilíngue", "Comunicação Intercultural"],
    },
  },
}

export function ExperienceSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <Building2 className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl">{t.vonixx.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{t.vonixx.period}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">{t.vonixx.description}</CardDescription>
              <div className="flex flex-wrap gap-2">
                {t.vonixx.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl">{t.international.title}</CardTitle>
                  <p className="text-sm text-accent font-medium mt-1">{t.international.period}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">{t.international.description}</CardDescription>
              <div className="flex flex-wrap gap-2">
                {t.international.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
