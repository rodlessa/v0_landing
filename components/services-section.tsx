"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, HeadphonesIcon, Database } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const translations = {
  en: {
    title: "Services",
    subtitle: "Comprehensive IT solutions tailored to your business needs",
    aws: {
      title: "AWS Solutions",
      description: "Cloud architecture, migration, and optimization services with AWS SAA-003 certification expertise.",
    },
    support: {
      title: "Technical Support Engineering",
      description: "Professional technical support and troubleshooting for complex IT infrastructure and applications.",
    },
    backup: {
      title: "Backup Solutions",
      description: "Reliable data protection and disaster recovery strategies to keep your business running.",
    },
  },
  "pt-br": {
    title: "Serviços",
    subtitle: "Soluções de TI abrangentes adaptadas às necessidades do seu negócio",
    aws: {
      title: "Soluções AWS",
      description: "Arquitetura em nuvem, migração e serviços de otimização com expertise em certificação AWS SAA-003.",
    },
    support: {
      title: "Engenharia de Suporte Técnico",
      description:
        "Suporte técnico profissional e solução de problemas para infraestrutura de TI e aplicações complexas.",
    },
    backup: {
      title: "Soluções de Backup",
      description:
        "Proteção de dados confiável e estratégias de recuperação de desastres para manter seu negócio funcionando.",
    },
  },
}

export function ServicesSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto mb-4">
                <Cloud className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-xl">{t.aws.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{t.aws.description}</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto mb-4">
                <HeadphonesIcon className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-xl">{t.support.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{t.support.description}</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto mb-4">
                <Database className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-xl">{t.backup.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{t.backup.description}</CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
