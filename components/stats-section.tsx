export function StatsSection() {
  const stats = [
    { label: "Body Measurements Per Scan", value: "100+" },
    { label: "Patient Satisfaction Rate", value: "95%" },
    { label: "Physician-Supervised Care", value: "100%" },
  ]

  return (
    <section className="bg-white py-14 lg:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-start text-center px-8 py-6 sm:py-0">
              <p className="font-outfit text-sm text-gray-500 mb-3 leading-snug">{stat.label}</p>
              <p className="font-urbanist font-bold text-[#2199F7] text-5xl lg:text-6xl leading-none tracking-tight">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
