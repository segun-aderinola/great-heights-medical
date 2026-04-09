import { AthletesHeroSection } from "@/components/athletes/athletes-hero-section"
import { WhatWeMeasureSection } from "@/components/athletes/what-we-measure-section"
import { WhoThisIsForSection } from "@/components/athletes/who-this-is-for-section"
import { RealWorldApplicationsSection } from "@/components/athletes/real-world-applications-section"
import { DataDrivenTrainingSection } from "@/components/athletes/data-driven-training-section"
import { AthletesCTASection } from "@/components/athletes/athletes-cta-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Athletes & Performance | Great Heights Medical",
  description:
    "Precision body composition tracking for athletes. Measure symmetry, monitor muscle distribution, and optimize training protocols with Styku 3D scanning.",
}

export default function AthletesPage() {
  return (
    <main className="min-h-screen bg-white pt-16 lg:pt-20">
      <AthletesHeroSection />
      <WhatWeMeasureSection />
      <WhoThisIsForSection />
      <RealWorldApplicationsSection />
      <DataDrivenTrainingSection />
      <AthletesCTASection />
    </main>
  )
}
