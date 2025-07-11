import { Users, Target, MapPin } from "lucide-react"

export function StatsSection() {
  return (
    <section className="bg-primary text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="text-6xl font-semibold mb-2">120+</div>
            <p className="text-body-text">Number of Patients Consulted in last 2years.</p>
            {/* <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6" />
            </div> */}
          </div>
          <div className="flex flex-col items-center">
            {/* <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <Target className="w-6 h-6" />
            </div> */}
            <div className="text-6xl font-semibold mb-2">98%</div>
            <p className="text-body-text">Customer Satisfaction Level Based on Feedbacks.</p>
          </div>
          <div className="flex flex-col items-center">
            {/* <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div> */}
            <div className="text-6xl font-semibold mb-2">12+</div>
            <p className="text-body-text">Medical Partitional all Across the Country.</p>
          </div>
        </div>
      </div>
    </section>
  )
}