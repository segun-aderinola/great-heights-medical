import { Target } from "lucide-react"

const audiences = [
  {
    title: "Competitive Athletes",
    description:
      "Track lean mass gains, optimize weight class management, measure strength-to-weight improvements",
  },
  {
    title: "Endurance Athletes",
    description:
      "Maintain lean mass during training cycles, optimize body composition for performance, avoid excessive muscle loss",
  },
  {
    title: "Rehab & Return-to-Play",
    description:
      "Monitor muscle retention post-injury, track symmetry restoration, measure recovery progress objectively",
  },
]

export function WhoThisIsForSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#2199F7] dot-texture rounded-[2rem] lg:rounded-[2.5rem] px-6 sm:px-10 lg:px-16 py-14 lg:py-20">
          {/* Heading */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-urbanist font-bold text-white text-4xl sm:text-5xl lg:text-[56px] leading-[100%] tracking-[-0.02em] mb-4">
              Who This Is For?
            </h2>
            <p className="font-outfit text-white/80 text-base leading-[27px] tracking-[0.01em] max-w-2xl mx-auto">
              Whether you're building strength, optimizing endurance, or refining technique—
              precision metrics improve outcomes.
            </p>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {audiences.map((item) => (
              <div
                key={item.title}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 hover:bg-white/15 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-urbanist font-bold text-white text-base mb-3">
                  {item.title}
                </h3>
                <p className="font-outfit text-white/75 text-sm leading-[24px] tracking-[0.01em]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
