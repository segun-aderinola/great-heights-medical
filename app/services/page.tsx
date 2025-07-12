import { StatsSection } from "@/components/stats-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { CoreValuesSection } from "@/components/core-values-section"
import {CTASection} from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { ServicesHeroSection } from "@/components/services-hero-section"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServicesHeroSection />
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