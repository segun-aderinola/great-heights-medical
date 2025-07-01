"use client"

import { Users, Zap } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function CoreValuesSection() {
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

  const values = [
    {
      icon: (
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        </div>
      ),
      title: "Excellence",
      description: "Committed to the highest standards of medical care",
    },
    {
      icon: <Zap className="w-8 h-8 text-white" fill="white" />,
      title: "Integrity",
      description: "Operating with transparency and honesty",
    },
    {
      icon: <Users className="w-8 h-8 text-white" fill="white" />,
      title: "Patient-Centered",
      description: "Your health goals are our priority",
    },
  ]

  return (
    <section ref={sectionRef} className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div
            className={`relative order-2 lg:order-1 transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <Image
              src="/images/core_values.jpg"
              alt="Our Core Values"
              width={600}
              height={400}
              className="rounded-lg w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
          <div
            className={`order-1 lg:order-2 transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900">Our Core Values</h2>
            <p className="text-gray-600 mb-8 md:mb-12 text-sm md:text-base lg:text-lg leading-relaxed">
              Every patient is treated like family. We listen closely and create solutions just for you. We rely on
              precision and results.
            </p>

            <div className="space-y-6 md:space-y-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`flex items-start transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500 rounded-full flex items-center justify-center mr-4 md:mr-6 flex-shrink-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">{value.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
