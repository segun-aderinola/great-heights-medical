"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center">
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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
              Achieve Your Best Self with Advanced Weight Loss & Immigration Medicals
            </h1>
          </div>
          <div
            className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <p className="text-base sm:text-lg mb-6 lg:mb-8 text-white">
              Experience our cutting-edge Styku 3D Body Scanner and certified Immigration Physicals — all in one trusted
              location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 transition-all duration-300 hover:scale-105">
                <Calendar className="w-4 h-4 mr-2" />
                Book an Appointment
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 bg-transparent transition-all duration-300 hover:scale-105"
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
