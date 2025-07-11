import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { CoreValuesSection } from "@/components/core-values-section"
import {CTASection} from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <CoreValuesSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </div>
  )
}
