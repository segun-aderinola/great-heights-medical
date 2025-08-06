"use client"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Link from "next/link"

export const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target) // Stop observing after it becomes visible
          }
        })
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
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
      {/* Blue accent borders */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg"></div>
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-primary rounded-r-lg"></div>

      {/* Dark overlay for transparency effect */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>

      <div
        className={`max-w-4xl mx-auto text-center px-4 relative z-10 transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 leading-tight">
          Ready to take the next step in your health or immigration journey?
        </h2>
        <Link href="https://calendly.com/great-heights-info/30min">
          <Button className="bg-primary hover:bg-primary/90 text-white px-4 md:px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-md">
            <span className="hidden sm:inline">Book an Appointment</span>
            <span className="sm:hidden">Book Now</span>
            <Calendar className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}