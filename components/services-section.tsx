"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Phone, Heart, FileText, Pill } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      icon: Heart,
      iconBg: "bg-red-100",
      iconColor: "text-red-500",
      title: "Styku 3D Body Scan",
      description: "Our physician-supervised weight loss program is designed to go beyond calorie counting and generic meal plans.",
      buttonText: "Book Your Scan",
      buttonIcon: Calendar,
      href: "/book-scan"
    },
    {
      icon: FileText,
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600",
      title: "USCIS Immigration Physical Exams",
      description: "As a designated USCIS Civil Surgeon, Dr. Fatoki provides efficient, same-week immigration physical exams compliant with Form I-693 requirements.",
      buttonText: "Contact Us",
      buttonIcon: Phone,
      href: "/contact"
    },
    {
      icon: Pill,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
      title: "Drug Treatment & Recovery Support.",
      description: "At Great Heights Medical, we believe that recovery is possible with the right guidance, structure, and medical support.",
      buttonText: "Contact Us",
      buttonIcon: Phone,
      href: "/contact"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our services provide the best{" "}
            <p className="text-blue-500">healthcare services</p>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Great Heights Medical, we are dedicated to helping you reach your full potential 
            whether that means achieving sustainable weight loss, optimizing your fitness, or 
            completing essential medical services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const ButtonIconComponent = service.buttonIcon
            
            return (
              <div key={index} className="bg-gray-50 rounded-3xl p-8 group hover:shadow-lg transition-all duration-300">
                {/* Icon */}
                <div className={`w-20 h-20 ${service.iconBg} rounded-full flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110`}>
                  <IconComponent className={`w-10 h-10 ${service.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 leading-tight text-left">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed text-left">
                  {service.description}
                </p>

                {/* CTA Button */}
                <Link href={service.href}>
                  <Button 
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg text-lg"
                  >
                    {service.buttonText}
                    <ButtonIconComponent className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}