"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 bg-gray-900 text-white rounded-lg mx-4 sm:mx-6 lg:mx-8 mb-8 md:mb-16 relative overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500"
      style={{
        backgroundImage: `url('images/primary_care.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for transparency effect */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
      <div
        className={`max-w-4xl mx-auto text-center px-4 relative z-10 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 leading-tight">
          Ready to take the next step in your health or immigration journey?
        </h2>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 rounded-md flex items-center gap-2 mx-auto font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
          <Calendar className="w-4 h-4" />
          <span className="hidden sm:inline">Book an Appointment</span>
          <span className="sm:hidden">Book Now</span>
        </Button>
      </div>
    </section>
  )
}
