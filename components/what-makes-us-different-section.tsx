import { BarChart3, ScanLine, Activity } from "lucide-react"

const pillars = [
  {
    icon: BarChart3,
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-500",
    iconBorder: "border-yellow-200",
    title: "Metabolic Intelligence",
    description:
      "DNA and microbiome analysis uncovers how your body processes nutrients, responds to foods, and stores fat—creating truly personalized strategies.",
  },
  {
    icon: ScanLine,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    iconBorder: "border-emerald-200",
    title: "3D Body Composition",
    description:
      "Styku 3D scanning reveals what the scale can't—lean mass, fat distribution, symmetry, and posture. 60 seconds. No radiation. Complete precision.",
  },
  {
    icon: Activity,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
    iconBorder: "border-purple-200",
    title: "Real-Time Glucose Insights",
    description:
      "Continuous glucose monitoring (CGM) shows exactly how your body responds to food, exercise, and stress in real-time—no guessing.",
    badge: "Expert physician guidance",
  },
]

export function WhatMakesUsDifferentSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16 gap-4">
          <h2 className="font-urbanist font-bold text-gray-900 text-4xl sm:text-5xl lg:text-[56px] leading-[100%] tracking-[-0.02em] max-w-sm">
            What Makes Us Different?
          </h2>
          <p className="font-outfit text-gray-500 text-base leading-[27px] tracking-[0.01em] lg:text-right max-w-xs">
            Three pillars of precision health optimization
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="bg-gray-50 border border-gray-100 rounded-3xl p-7 hover:shadow-md transition-shadow duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 ${pillar.iconBg} border ${pillar.iconBorder} rounded-2xl flex items-center justify-center mb-5`}
                >
                  <Icon className={`w-7 h-7 ${pillar.iconColor}`} />
                </div>

                {/* Badge (optional) */}
                {pillar.badge && (
                  <p className="font-outfit text-xs text-gray-400 mb-1">{pillar.badge}</p>
                )}

                {/* Title */}
                <h3 className="font-urbanist font-bold text-gray-900 text-lg mb-3">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="font-outfit text-gray-500 text-sm leading-[24px] tracking-[0.01em]">
                  {pillar.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
