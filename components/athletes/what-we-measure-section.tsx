import { BarChart3, Dumbbell, Activity, PersonStanding } from "lucide-react"

const measurements = [
  {
    icon: BarChart3,
    iconBg: "bg-yellow-50",
    iconBorder: "border-yellow-200",
    iconColor: "text-yellow-500",
    title: "Lean Mass & Body Fat Percentage",
    description:
      "Precisely measure muscle mass and fat distribution across your entire body. Track changes over time to ensure you're gaining muscle, not just weight.",
  },
  {
    icon: Dumbbell,
    iconBg: "bg-purple-50",
    iconBorder: "border-purple-200",
    iconColor: "text-purple-400",
    title: "Muscle Symmetry",
    description:
      "Identify left-right imbalances in muscle mass and development. Critical for injury prevention and balanced strength development.",
  },
  {
    icon: Activity,
    iconBg: "bg-emerald-50",
    iconBorder: "border-emerald-200",
    iconColor: "text-emerald-500",
    title: "Precise Circumferences",
    description:
      "Automated measurements of chest, waist, hips, arms, and legs with sub-millimeter accuracy. Track muscle growth in specific areas.",
  },
  {
    icon: PersonStanding,
    iconBg: "bg-blue-50",
    iconBorder: "border-blue-200",
    iconColor: "text-blue-500",
    title: "Posture & Alignment",
    description:
      "Visual analysis of posture deviations and spinal alignment. Monitor changes during training to prevent compensation patterns.",
  },
]

export function WhatWeMeasureSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16 gap-4">
          <h2 className="font-urbanist font-bold text-gray-900 text-4xl sm:text-5xl lg:text-[56px] leading-[100%] tracking-[-0.02em] max-w-lg">
            What We Measure With Styku 3D Scanning
          </h2>
          <p className="font-outfit text-gray-500 text-base leading-[27px] tracking-[0.01em] lg:text-right max-w-xs">
            Elite performance requires elite measurement. Track what matters most with
            clinical-grade precision.
          </p>
        </div>

        {/* 2x2 Cards grid */}
        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          {measurements.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="border border-gray-100 rounded-3xl p-8 bg-white hover:shadow-md transition-shadow duration-300"
              >
                <div
                  className={`w-14 h-14 ${item.iconBg} border ${item.iconBorder} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <Icon className={`w-7 h-7 ${item.iconColor}`} />
                </div>
                <h3 className="font-urbanist font-bold text-gray-900 text-lg mb-3">
                  {item.title}
                </h3>
                <p className="font-outfit text-gray-500 text-sm leading-[24px] tracking-[0.01em]">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Quote bar */}
        <div className="bg-gray-900 rounded-2xl px-8 py-6">
          <p className="font-urbanist font-bold text-white text-lg lg:text-xl leading-snug text-center">
            "Unlike DEXA scans or hydrostatic weighing, Styku uses safe infrared light to create a
            complete 3D model of your body. Quick, non-invasive, and incredibly accurate."
          </p>
        </div>
      </div>
    </section>
  )
}
