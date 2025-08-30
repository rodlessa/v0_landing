"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const translations = {
  en: {
    title: "Get In Touch",
    subtitle: "Ready to discuss your IT consulting needs? Let's connect and explore how I can help your business.",
    email: "Send Email",
    github: "View GitHub",
    linkedin: "Connect on LinkedIn",
    cta: "Start a Conversation",
  },
  "pt-br": {
    title: "Entre em Contato",
    subtitle:
      "Pronto para discutir suas necessidades de consultoria em TI? Vamos nos conectar e explorar como posso ajudar seu negócio.",
    email: "Enviar Email",
    github: "Ver GitHub",
    linkedin: "Conectar no LinkedIn",
    cta: "Iniciar uma Conversa",
  },
}

export function ContactSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">{t.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl">Rodrigo Lessa Rodrigues</CardTitle>
              <CardDescription className="text-lg">AWS SAA-003 Certified • IT Consulting • rdls.dev</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="mailto:contact@rdls.dev" className="inline-flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    {t.email}
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://github.com/rodlessa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    {t.github}
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://linkedin.com/in/rodlessa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    {t.linkedin}
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
