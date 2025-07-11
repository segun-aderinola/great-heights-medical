"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function AboutSection() {
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
    <section ref={sectionRef} className="bg-[#F0F9FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">About Us – Great Heights Medical</h2>
            <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed">
              At Great Heights Medical, we are committed to guiding you toward better health and well-being through
              advanced, compassionate care. Located in a trusted community setting, our clinic is known for delivering
              personalized medical solutions using the latest technology and a patient-first approach.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white px-4 md:px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
              Read More About Us
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>

            <div className="mt-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Why Choose Great Heights Medical?</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8 mt-4">
              {[
                {
                  title: "Personalized, judgment-free care",
                  description:
                    "Every patient is treated like family. We listen closely and create solutions just for you.",
                },
                {
                  title: "Convenient Scheduling",
                  description:
                    "Same-day appointments and online booking through Calendly make it easy to get care fast.",
                },
                {
                  title: "Modern & Efficient Technology",
                  description: "From 3D body scanning to digital records, we invest in tech that empowers your care.",
                },
                {
                  title: "Trusted Expertise",
                  description:
                    "Our certified professionals bring years of clinical experience and compassion to every appointment.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <Image
              src="/images/yemi.png"
              alt="Medical Professional in Great Heights t-shirt"
              width={600}
              height={700}
              className="rounded-lg object-cover w-full transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
