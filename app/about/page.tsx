import { StatsSection } from "@/components/stats-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import {CTASection} from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { AboutHeroSection } from "@/components/about-hero-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <CTASection />
    </div>
  )
}