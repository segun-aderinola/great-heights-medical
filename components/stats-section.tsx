// import { Users, Target, MapPin } from "lucide-react"

// export function StatsSection() {
//   return (
//     <section className="bg-primary text-white py-6">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid md:grid-cols-3 gap-8 text-center">
//           <div className="flex flex-col items-center">
//             <div className="text-6xl font-semibold mb-2">120+</div>
//             <p className="text-body-text">Number of Patients Consulted in last 2years.</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <div className="text-6xl font-semibold mb-2">98%</div>
//             <p className="text-body-text">Customer Satisfaction Level Based on Feedbacks.</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <div className="text-6xl font-semibold mb-2">12+</div>
//             <p className="text-body-text">Medical Partitional all Across the Country.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
import { Users, Target, MapPin } from "lucide-react"
import Image from "next/image"

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      number: "120+",
      description: "Number of Patients Consulted in last 2years."
    },
    {
      icon: Target,
      number: "98%", 
      description: "Customer Satisfaction Level Based on Feedbacks."
    },
    {
      icon: MapPin,
      number: "12+",
      description: "Medical Partitional all Across the Country."
    }
  ]

  return (
    <section className="relative py-40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg-new.png"
          alt="Medical team"
          fill
          className="object-cover object-center"
        />
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-white">
                {/* Icon */}
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                {/* Number */}
                <div className="text-5xl lg:text-6xl font-bold mb-4">
                  {stat.number}
                </div>
                
                {/* Description */}
                <p className="text-lg text-white/90 leading-relaxed max-w-xs mx-auto">
                  {stat.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}