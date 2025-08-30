import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { TechnologyCarousel } from "@/components/technology-carousel"
import { ExperienceSection } from "@/components/experience-section"
import { SpecializationsSection } from "@/components/specializations-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TechnologyCarousel />
        <ExperienceSection />
        <SpecializationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
