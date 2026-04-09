import { Target } from "lucide-react"

const reasons = [
  {
    title: "Precision Measurement",
    description:
      "Styku 3D body scanning captures over 200+ measurements with clinical-grade accuracy. Move beyond BMI to understand true body composition.",
  },
  {
    title: "Data-Driven Personalization",
    description:
      "Your biology dictates your strategy. We use metabolic testing, microbiome analysis, and biomarkers to create individualized protocols.",
  },
  {
    title: "Continuous Optimization",
    description:
      "Track progress with objective metrics. Adjust interventions based on real data, not guesswork. See trends over time with visual analytics.",
  },
]

export function WhyChooseSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#2199F7] dot-texture rounded-[2rem] lg:rounded-[2.5rem] px-6 sm:px-10 lg:px-16 py-14 lg:py-20">
          {/* Heading */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-urbanist font-bold text-white text-4xl sm:text-5xl lg:text-[56px] leading-[100%] tracking-[-0.02em] mb-4">
              Why Choose Great Heights Medical?
            </h2>
            <p className="font-outfit text-white/80 text-base leading-[27px] tracking-[0.01em] max-w-2xl mx-auto">
              We combine advanced technology, medical expertise, and data science to deliver
              measurable results.
            </p>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 hover:bg-white/15 transition-colors duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                  <Target className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-urbanist font-bold text-white text-base mb-3">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="font-outfit text-white/75 text-sm leading-[24px] tracking-[0.01em]">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
