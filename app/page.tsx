import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { CoreValuesSection } from "@/components/core-values-section"
import {CTASection} from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Styku3DSection } from "@/components/styku-3d-section"
import { FAQSection } from "@/components/faq-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <Styku3DSection />
      <FAQSection />
    </div>
  )
}
