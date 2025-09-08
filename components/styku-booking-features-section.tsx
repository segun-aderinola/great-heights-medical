"use client"
import { Button } from "@/components/ui/button"
import { Calendar, Award, Medal, User, Flower, Star, Building } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function StykyBookingFeaturesSection() {
  const features = [
    {
      icon: Award,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
      title: "Bariatric & Obesity Clinics",
      description: "Pre and post-surgical assessment"
    },
    {
      icon: Medal,
      iconBg: "bg-blue-100", 
      iconColor: "text-blue-500",
      title: "Sports Medicine",
      description: "Athletic performance optimization"
    },
    {
      icon: User,
      iconBg: "bg-red-100",
      iconColor: "text-red-500", 
      title: "Rehabilitation",
      description: "Recovery progress tracking"
    },
    {
      icon: Flower,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-500",
      title: "Wellness Tracking",
      description: "Comprehensive health monitoring"
    },
    {
      icon: Star,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      title: "Physiotherapy", 
      description: "Posture correction and alignment"
    },
    {
      icon: Building,
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-500",
      title: "Surgical Planning",
      description: "Pre/post-operative analysis"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-start justify-between mb-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  How to Book Your{" "}
                  <span className="text-blue-500">Styku 3D Body Scan</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  A revolutionary 3D body scanning system for accurate, non-invasive 
                  health assessment.
                </p>
              </div>
              
              {/* <div>
                <Link href="/book-scan">
                    <Button
                    className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap"
                    >
                    Book Your Scan
                    <Calendar className="w-4 h-4 ml-2" />
                    </Button>
                </Link>
              </div> */}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                
                return (
                  <div key={index} className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className={`w-12 h-12 ${feature.iconBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`w-6 h-6 ${feature.iconColor}`} />
                    </div>
                    
                    {/* Content */}
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Side - Styku Platform */}
          <div className="flex justify-center lg:justify-end">
            <Image src="/images/styku_image.png" alt="Styku 3D Body Scanner Platform" width={600} height={600} className="w-full h-auto rounded-2xl" priority />
          </div>
        </div>
      </div>
    </section>
  )
}