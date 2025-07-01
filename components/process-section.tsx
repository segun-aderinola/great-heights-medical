"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function ProcessSection() {
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

  const processes = [
    {
      number: "1",
      title: "Initial Consultation",
      description: "Number of Patients Consulted in last 2years.",
    },
    {
      number: "2",
      title: "Custom Treatment Plan",
      description: "Number of Patients Consulted in last 2years.",
    },
    {
      number: "3",
      title: "Regular Monitoring",
      description: "Customer Satisfaction Level Based on Feedbacks.",
    },
    {
      number: "4",
      title: "Ongoing Support",
      description: "Medical Partitional all Across the Country.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900">Our Processes</h2>
            <p className="text-gray-600 mb-8 md:mb-12 text-sm md:text-base lg:text-lg">
              Comprehensive care for your total wellness
            </p>

            {/* 2x2 Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-x-16 md:gap-y-12 mb-8 md:mb-12">
              {processes.map((process, index) => (
                <div
                  key={index}
                  className={`flex flex-col transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mb-3 md:mb-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <span className="text-sm md:text-lg font-bold">{process.number}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900">{process.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{process.description}</p>
                </div>
              ))}
            </div>

            {/* Book an Appointment Button */}
            <Button className="bg-gray-800 hover:bg-gray-700 text-white px-4 md:px-6 py-3 rounded-full flex items-center gap-2 font-medium transition-all duration-300 hover:scale-105 shadow-lg">
              <Calendar className="w-4 md:w-5 h-4 md:h-5" />
              <span className="hidden sm:inline">Book an Appointment</span>
              <span className="sm:hidden">Book Now</span>
            </Button>
          </div>
          <div
            className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <Image
              src="/images/our_processes.jpg"
              alt="Medical Consultation Process"
              width={600}
              height={400}
              className="rounded-lg w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
