"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Link from "next/link"

const benefits = [
  {
    n: "01",
    title: "Accurate Body Composition Analysis",
    titleSize: "text-xl",
    desc:
      "Get precise measurements of muscle mass, body fat percentage, and body shape with medical-grade accuracy that surpasses traditional methods.",
  },
  {
    n: "02",
    title: "Early Risk Detection",
    titleSize: "text-xl",
    desc:
      "Identify obesity-related health risks and metabolic changes before they become serious medical conditions.",
  },
  {
    n: "03",
    title: "Personalized Health Tracking",
    titleSize: "text-xl",
    desc:
      "Monitor your progress over time with detailed reports that show exactly how your body is changing with treatment.",
  },
  {
    n: "04",
    title: "Fast & Contactless",
    titleSize: "text-2xl",
    desc:
      "Complete scan in just 3 minutes with no physical contact required. Safe, hygienic, and comfortable for all patients.",
  },
  {
    n: "05",
    title: "Trusted by Medical Professionals",
    titleSize: "text-2xl",
    desc:
      "Used in hospitals worldwide, Styku provides clinical-grade data that doctors trust for diagnosis and treatment planning.",
  },
  {
    n: "06",
    title: "Versatile Medical Applications",
    titleSize: "text-2xl",
    desc:
      "From bariatrics to physiotherapy, sports medicine to rehabilitation, Styku adapts to multiple clinical needs with unmatched accuracy.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Benefits of Using the{" "}
            <span className="text-blue-500">STYKU 3D</span> Body Scanner
          </h2>
          <p className="text-lg text-gray-600">
            A revolutionary 3D body scanning system for accurate, non-invasive
            health assessment.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div
              key={b.n}
              className="
                group relative rounded-2xl p-8 bg-white ring-1 ring-gray-200
                transition-all duration-300
                hover:bg-gray-900 hover:shadow-xl hover:ring-gray-800
                will-change-transform hover:-translate-y-0.5
              "
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="text-5xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-white">
                    {b.n}
                  </span>
                </div>

                <h3
                  className={`${b.titleSize} font-bold text-gray-900 transition-colors duration-300 group-hover:text-white`}
                >
                  {b.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-md transition-colors duration-300 group-hover:text-gray-300">
                  {b.desc}
                </p>

                {/* Reveal button on hover */}
                <div
                  className="
                    opacity-0 translate-y-2 pointer-events-none
                    group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                    transition-all duration-300
                  "
                >
                  <Link href="https://calendly.com/great-heights-info/30min">
                    <Button
                      className="
                        bg-blue-500 hover:bg-blue-600 text-white
                        px-6 py-6 rounded-full font-medium
                        transition-transform duration-300 hover:scale-105
                        focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500
                      "
                    >
                      Book Your Scan
                      <Calendar className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
