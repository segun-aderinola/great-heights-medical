"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, ChevronRight } from "lucide-react"
import { ServiceCard } from "./service-card"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

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
      title: "Fitness & Body Composition Tracking",
      description: "Our physician-supervised weight loss program is designed to go beyond calorie counting and generic meal plans. We take a precision medicine approach rooted in your individual biology—to deliver sustainable results.",
      features: [
        "Tracking muscle gain and fat loss over time",
        "Measuring progress more accurately than a traditional scale",
        "Setting realistic goals for strength, tone, and endurance"
      ],
      buttonText: "Schedule Your Scan",
      bgColor: "bg-[#F0F9FF]",
      textColor: "text-black",
      buttonStyle: "bg-primary hover:bg-primary text-white",
      link: "/services/weightloss"
    },
    {
      number: "02", 
      title: "USCIS Immigration Physical Exams",
      description: "As a designated USCIS Civil Surgeon, Dr. Fatoki provides efficient, same-week immigration physical exams compliant with Form I-693 requirements. Our team ensures a smooth, respectful, and timely process.",
      features: [
        "Medical history review and physical exam",
        "Required vaccinations and lab testing", 
        "Completion and sealing of I-693 for submission",
        "Multilingual staff and culturally sensitive care"
      ],
      buttonText: "Contact Us",
      bgColor: "bg-gray-900",
      textColor: "text-white",
      buttonStyle: "bg-white hover:bg-gray-100 text-gray-900",
      link: "#"
    },
    {
      number: "03",
      title: "Drug Treatment & Recovery Support",
      description: "At Great Heights Medical, we believe that recovery is possible with the right guidance, structure, and medical support.",
      features: [
        "Medication-Assisted Treatment (MAT)",
        "One-on-one counseling and addiction support",
        "Regular medical assessments and progress tracking"
      ],
      buttonText: "Start Your Recovery Journey",
      bgColor: "bg-[#F0F9FF]",
      textColor: "text-gray-900", 
      buttonStyle: "bg-primary hover:bg-primary text-white",
      link: "#"
    }
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
                  <span className="hidden sm:inline">Book an Appointment</span>
                  <span className="sm:hidden">Book Now</span>
                  <Calendar className="w-4 h-4" />
                </Button>
                <p className="text-gray-600 text-xs md:text-sm">Opening Hours: Mon-Fri, 9 AM – 6 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`${service.bgColor} ${service.textColor} rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-2`}>
                {/* Number */}
                <div className="text-6xl font-bold mb-6">
                  {service.number}
                </div>
                
                {/* Title */}
                <h3 className="font-clash text-2xl font-bold mb-4 leading-tight">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className={`mb-6 leading-relaxed ${service.bgColor === 'bg-gray-900' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className={`w-1.5 h-1.5 rounded-full mt-2.5 mr-3 flex-shrink-0 ${
                        service.bgColor === 'bg-gray-900' ? 'bg-blue-400' : 'bg-primary'
                      }`}></div>
                      <span className={`text-sm leading-relaxed ${
                        service.bgColor === 'bg-gray-900' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* Button */}
                <Link href={service.link} className="block">
                  <Button className={`${service.buttonStyle} px-4 md:px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg`}>
                    {service.buttonText}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
