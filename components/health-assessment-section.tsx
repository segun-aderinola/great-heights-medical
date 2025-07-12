"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function HealthAssessmentSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden bg-gray-50">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Need a health assessment? There's a new way to track your health.
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-gray-600 leading-relaxed font-light">
                Explore our specialized health services designed to help you look, feel, and live better — from weight
                loss and immigration exams to comprehensive drug treatment support.
              </p>

              <div
                className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-300 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-blue-700 text-white px-8 py-4 text-md font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Schedule Your Scan
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <button className="text-gray-900 bg-[#F0F9FF] hover:text-blue-600 px-8 py-4 text-md font-medium transition-all duration-300">
                  Read About it
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <Image
                src="/images/styku_hero_image.png"
                alt="Styku 3D Body Scanner Device"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}