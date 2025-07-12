"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg-new.png"
          alt="Medical professional"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Achieve Your Best Self with Advanced Weight Loss & Immigration Medicals
            </h1>

            <p className="text-lg sm:text-xl mb-8 text-white/90 leading-relaxed max-w-xl font-light">
              We combine evidence-based medicine with cutting-edge technology to deliver personalized care that fits
              your goals.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-md font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Book an Appointment
                <Calendar className="w-5 h-5 mr-2" />
              </Button>

              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-black hover:bg-black hover:text-white px-8 py-4 text-md font-medium rounded-full bg-white transition-all duration-300 hover:scale-105"
                >
                  Read About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}