"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { ServiceCard } from "./service-card"
import { useEffect, useRef, useState } from "react"

export function ServicesSection() {
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

  const services = [
    {
      number: "01",
      title: "Weight Loss & Body Composition (Styku 3D Scanner)",
      description:
        "Discover a smarter way to manage your body goals. Our Styku 3D Body Scanner captures a 360° image of your body in seconds, providing accurate metrics",
      features: ["Full 3D body composition tracking", "Visualize progress over time", "Safe, non-invasive technology"],
      buttonText: "Schedule Your Scan",
      imageSrc: "/images/scan1.jpg",
      imageAlt: "3D Body Scanner",
    },
    {
      number: "02",
      title: "Immigration Medical Exams",
      description:
        "We are proud to be a USCIS-designated civil surgeon, offering Immigration Medical Exams in accordance with federal guidelines. Our streamlined process",
      features: ["Full physical examination", "Required vaccinations", "TB testing and other labs"],
      buttonText: "Schedule Immigration Exam",
      imageSrc: "/images/immigration_exam.jpg",
      imageAlt: "Immigration Medical Exam",
    },
    {
      number: "03",
      title: "Drug Treatment & Recovery Support.",
      description:
        "At Great Heights Medical, we believe that recovery is possible with the right guidance, structure, and medical support.",
      features: [
        "Medication-Assisted Treatment (MAT)",
        "One-on-one counseling and addiction support",
        "Regular medical assessments and progress tracking",
      ],
      buttonText: "Start Your recovery Journey",
      imageSrc: "/images/drug_treatment.jpg",
      imageAlt: "Drug Treatment and Recovery",
    },
    {
      number: "04",
      title: "Primary & Preventive Care",
      description:
        "Offer routine checkups, blood pressure monitoring, diabetes screening, and annual physicals for adults and families.",
      features: [
        "Builds long-term patient relationships",
        "Encourages overall health maintenance",
        "Easy to bundle with other services",
      ],
      buttonText: "Start Your recovery Journey",
      imageSrc: "/images/primary_care.jpg",
      imageAlt: "Primary and Preventive Care",
    },
  ]

  return (
    <section ref={sectionRef} className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-8 md:mb-12 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Our Service – Great Heights Medical</h2>
              <p className="text-gray-600 mb-6 lg:mb-8 text-sm md:text-base">
                At Great Heights Medical, we offer modern, precise, and patient-centered services designed to elevate
                your health and well-being.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end items-start lg:items-center">
              <div className="text-left lg:text-right">
                <Button className="bg-gray-900 hover:bg-gray-800 text-white px-4 md:px-6 py-3 rounded-full flex items-center gap-2 mb-2 transition-all duration-300 hover:scale-105 shadow-lg">
                  <Calendar className="w-4 h-4" />
                  <span className="hidden sm:inline">Book an Appointment</span>
                  <span className="sm:hidden">Book Now</span>
                </Button>
                <p className="text-gray-600 text-xs md:text-sm">Opening Hours: Mon-Fri, 9 AM – 6 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <ServiceCard
                number={service.number}
                title={service.title}
                description={service.description}
                features={service.features}
                buttonText={service.buttonText}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
