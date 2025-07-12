"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function StykulTechnologySection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden bg-[#101828]">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-12">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                The latest 3D technology in <span className="text-blue-500">healthcare</span>
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-white/90 leading-relaxed font-light">
                Founded with a vision to combine modern medical technology with compassionate care, Great Heights
                Medical has become a trusted provider of patient-centered health services. Our clinic specializes in
                weight management using the Styku 3D Body Scanner, certified immigration medical exams, and outpatient
                drug treatment — all delivered in a safe, welcoming environment.
              </p>

              {/* Feature List */}
              <ul className="space-y-3 mb-8 text-white/90">
                <li>Contactless and private</li>
                <li>Determines risks of underlying conditions</li>
                <li>Determines risks of underlying conditions</li>
                <li>Measures body fat%, lean mass, and bone mass</li>
                <li>See your progress in 3D</li>
              </ul>

              <div
                className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-300 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-blue-700 text-white px-8 py-4 text-md font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Book an Appointment
                  <Calendar className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <Image
                src="/images/stkyu_tool_image.png"
                alt="Styku 3D Body Scanner"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}