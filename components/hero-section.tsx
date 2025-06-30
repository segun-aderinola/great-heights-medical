import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-background.jpg"
          alt="Medical professionals working"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
              Achieve Your Best Self with Advanced Weight Loss & Immigration Medicals
            </h1>
          </div>
          <div>
            <p className="text-lg mb-8 text-white">
              Experience our cutting-edge Styku 3D Body Scanner and certified Immigration Physicals — all in one trusted
              location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3">
                <Calendar className="w-4 h-4 mr-2" />
                Book an Appointment
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 bg-transparent"
              >
                Read About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}