"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export function ServicesHeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/services_hero_bg.jpg"
          alt="Medical professional"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10  px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Revolutionizing Patient Care with 3D Body Scanning
            </h1>

            <p className="text-lg sm:text-xl mb-8 text-white/90 leading-relaxed max-w-xl mx-auto font-light">
              Experience accurate, non-invasive body analysis with Styku at Great Heights Medical Hospital.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <Link href="https://calendly.com/great-heights-info/30min">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-blue-700 text-white px-8 py-4 text-md font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Book your scan
                  <Calendar className="w-5 h-5 mr-2" />
                </Button>
              </Link>

              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-black hover:bg-black hover:text-white px-8 py-4 text-md font-medium rounded-full bg-white transition-all duration-300 hover:scale-105"
                >
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}