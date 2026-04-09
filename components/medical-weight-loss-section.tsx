import Link from "next/link"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "1",
    numberBg: "bg-yellow-100",
    numberBorder: "border-yellow-200",
    numberColor: "text-yellow-600",
    title: "Measure",
    description:
      "3D body scan, DNA analysis, microbiome testing, and continuous glucose monitoring establish your baseline",
  },
  {
    number: "2",
    numberBg: "bg-emerald-100",
    numberBorder: "border-emerald-200",
    numberColor: "text-emerald-600",
    title: "Personalize",
    description:
      "Using Digbi Health's platform, we create a nutrition and lifestyle plan based on your unique biology",
  },
  {
    number: "3",
    numberBg: "bg-blue-100",
    numberBorder: "border-blue-200",
    numberColor: "text-blue-600",
    title: "Optimize",
    description:
      "Track real-time data, adjust strategies, and measure actual body composition changes—not just weight",
  },
]

export function MedicalWeightLossSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-end mb-12 lg:mb-16">
          <h2 className="font-urbanist font-bold text-gray-900 text-4xl sm:text-5xl lg:text-[52px] leading-[100%] tracking-[-0.02em]">
            Medical Weight Loss That Works With Your Biology
          </h2>
          <p className="font-outfit text-gray-500 text-base leading-[27px] tracking-[0.01em]">
            Powered by Digbi Health, our approach analyzes your genetics, microbiome, and metabolic
            profile to create a truly personalized weight loss strategy.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-gray-50 border border-gray-100 rounded-3xl p-7 hover:shadow-sm transition-shadow duration-300"
            >
              {/* Step number badge */}
              <div
                className={`w-14 h-14 ${step.numberBg} border ${step.numberBorder} rounded-2xl flex items-center justify-center mb-6`}
              >
                <span className={`font-urbanist font-bold text-2xl ${step.numberColor}`}>
                  {step.number}
                </span>
              </div>

              <h3 className="font-urbanist font-bold text-gray-900 text-xl mb-3">
                {step.title}
              </h3>
              <p className="font-outfit text-gray-500 text-sm leading-[24px] tracking-[0.01em]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="/weight-loss"
            className="inline-flex items-center gap-2 bg-[#2199F7] text-white font-outfit font-medium text-sm px-8 py-3.5 rounded-full hover:bg-[#1a87e0] transition-all duration-200 shadow-sm"
          >
            Explore Weight Loss Program
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
