import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ServiceCardsSection } from "@/components/service-cards-section"
import { WhatMakesUsDifferentSection } from "@/components/what-makes-us-different-section"
import { BodyScanTechnologySection } from "@/components/body-scan-technology-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { MedicalWeightLossSection } from "@/components/medical-weight-loss-section"
import { ImmigrationSection } from "@/components/immigration-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white pt-16 lg:pt-20">
      <HeroSection />
      <StatsSection />
      <ServiceCardsSection />
      <WhatMakesUsDifferentSection />
      <BodyScanTechnologySection />
      <WhyChooseSection />
      <MedicalWeightLossSection />
      <ImmigrationSection />
      <CTASection />
    </main>
  )
}
