import { StatsSection } from "@/components/stats-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { CoreValuesSection } from "@/components/core-values-section"
import {CTASection} from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { ServicesHeroSection } from "@/components/services-hero-section"
import { HealthAssessmentSection } from "@/components/health-assessment-section"
import { StykulTechnologySection } from "@/components/styku-technology-section"
import { WhatIsStykulSection } from "@/components/what-is-styku-section"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <HealthAssessmentSection />
      <WhatIsStykulSection />
      <StykulTechnologySection />
      <ProcessSection />
      <CTASection />
    </div>
  )
}