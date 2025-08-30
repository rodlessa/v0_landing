"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container, Shield, Monitor, BarChart3 } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const translations = {
  en: {
    title: "Technical Specializations",
    subtitle: "Expertise in modern infrastructure and monitoring technologies",
    docker: {
      title: "Docker & Containerization",
      description: "Container orchestration, deployment strategies, and microservices architecture.",
    },
    pfsense: {
      title: "pfSense & Network Security",
      description: "Firewall configuration, VPN setup, and network security implementation.",
    },
    virtualization: {
      title: "Virtualization Technologies",
      description: "VMware, Hyper-V, and cloud-based virtualization solutions.",
    },
    monitoring: {
      title: "Monitoring & Analytics",
      description: "Zabbix, Grafana, and comprehensive infrastructure monitoring solutions.",
    },
  },
  "pt-br": {
    title: "Especializações Técnicas",
    subtitle: "Expertise em infraestrutura moderna e tecnologias de monitoramento",
    docker: {
      title: "Docker e Containerização",
      description: "Orquestração de containers, estratégias de deployment e arquitetura de microsserviços.",
    },
    pfsense: {
      title: "pfSense e Segurança de Rede",
      description: "Configuração de firewall, configuração de VPN e implementação de segurança de rede.",
    },
    virtualization: {
      title: "Tecnologias de Virtualização",
      description: "VMware, Hyper-V e soluções de virtualização baseadas em nuvem.",
    },
    monitoring: {
      title: "Monitoramento e Analytics",
      description: "Zabbix, Grafana e soluções abrangentes de monitoramento de infraestrutura.",
    },
  },
}

export function SpecializationsSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="specializations" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <div className="bg-accent/10 p-3 rounded-full w-fit mx-auto mb-3">
                <Container className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-lg">{t.docker.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{t.docker.description}</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="bg-accent/10 p-3 rounded-full w-fit mx-auto mb-3">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-lg">{t.pfsense.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{t.pfsense.description}</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="bg-accent/10 p-3 rounded-full w-fit mx-auto mb-3">
                <Monitor className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-lg">{t.virtualization.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{t.virtualization.description}</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="bg-accent/10 p-3 rounded-full w-fit mx-auto mb-3">
                <BarChart3 className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-lg">{t.monitoring.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{t.monitoring.description}</CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
