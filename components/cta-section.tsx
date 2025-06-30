import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export default function CTASection() {
  return (
    <section 
      className="py-16 bg-gray-900 text-white rounded-lg mx-4 sm:mx-6 lg:mx-8 mb-16 relative overflow-hidden"
      style={{
        backgroundImage: `url('images/primary_care.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for transparency effect */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
      
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">
          Ready to take the next step in your health or immigration journey?
        </h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md flex items-center gap-2 mx-auto font-medium transition-colors">
          <Calendar className="w-4 h-4" />
          Book an Appointment
        </button>
      </div>
    </section>
  );
}