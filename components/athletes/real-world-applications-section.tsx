const applications = [
  {
    number: "1",
    numberBg: "bg-yellow-100",
    numberBorder: "border-yellow-200",
    numberColor: "text-yellow-600",
    title: "Performance Optimization",
    description:
      "Track lean mass gains during strength phases. Ensure you're building muscle, not just adding weight.",
  },
  {
    number: "2",
    numberBg: "bg-emerald-100",
    numberBorder: "border-emerald-200",
    numberColor: "text-emerald-600",
    title: "Injury Prevention",
    description:
      "Identify muscle asymmetries before they cause problems. Address imbalances proactively.",
  },
  {
    number: "3",
    numberBg: "bg-blue-100",
    numberBorder: "border-blue-200",
    numberColor: "text-blue-600",
    title: "Return-to-Play Tracking",
    description:
      "Monitor muscle retention during injury recovery. Track symmetry restoration objectively.",
  },
  {
    number: "4",
    numberBg: "bg-purple-100",
    numberBorder: "border-purple-200",
    numberColor: "text-purple-600",
    title: "Weight Class Management",
    description:
      "Make weight while maintaining lean mass. Optimize strength-to-weight ratio for competition.",
  },
  {
    number: "5",
    numberBg: "bg-orange-100",
    numberBorder: "border-orange-200",
    numberColor: "text-orange-600",
    title: "Training Cycle Monitoring",
    description:
      "Measure body composition changes through bulk, cut, and maintenance phases.",
  },
  {
    number: "6",
    numberBg: "bg-pink-100",
    numberBorder: "border-pink-200",
    numberColor: "text-pink-500",
    title: "Endurance Optimization",
    description:
      "Maintain muscle mass during high-volume endurance training. Prevent excessive muscle loss.",
  },
]

export function RealWorldApplicationsSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16 gap-4">
          <h2 className="font-urbanist font-bold text-gray-900 text-4xl sm:text-5xl lg:text-[52px] leading-[100%] tracking-[-0.02em]">
            Real-World Applications
          </h2>
          <p className="font-outfit text-gray-500 text-base leading-[27px] tracking-[0.01em] lg:text-right max-w-xs">
            Styku technology captures your complete body structure with millimeter precision. No
            calipers, no electrical impedance, no estimation.
          </p>
        </div>

        {/* 2-row x 3-col grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {applications.map((app) => (
            <div
              key={app.title}
              className="border border-gray-100 rounded-3xl p-7 bg-white hover:shadow-sm transition-shadow duration-300"
            >
              <div
                className={`w-14 h-14 ${app.numberBg} border ${app.numberBorder} rounded-2xl flex items-center justify-center mb-6`}
              >
                <span className={`font-urbanist font-bold text-2xl ${app.numberColor}`}>
                  {app.number}
                </span>
              </div>
              <h3 className="font-urbanist font-bold text-gray-900 text-lg mb-3">
                {app.title}
              </h3>
              <p className="font-outfit text-gray-500 text-sm leading-[24px] tracking-[0.01em]">
                {app.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
