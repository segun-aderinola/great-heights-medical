"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Link from "next/link"

export function BenefitsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Benefits of Using the{" "}
            <span className="text-blue-500">STYKU 3D</span> Body Scanner
          </h2>
          <p className="text-lg text-gray-600">
            A revolutionary 3D body scanning system for accurate, non-invasive 
            health assessment.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Benefit 01 */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="text-5xl font-bold text-gray-900">01</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              Accurate Body Composition Analysis
            </h3>
            <p className="text-gray-600 leading-relaxed text-md">
              Get precise measurements of muscle mass, body fat percentage, and body shape with 
              medical-grade accuracy that surpasses traditional methods.
            </p>
          </div>

          {/* Benefit 02 - Featured Dark Card */}
          <div className="bg-gray-900 rounded-2xl p-8 text-white">
            <div className="space-y-6">
              <span className="text-5xl font-bold">02</span>
              <h3 className="text-xl font-bold">Early Risk Detection</h3>
              <p className="text-gray-300 leading-relaxed text-md">
                Identify obesity-related health risks and metabolic changes before they become serious 
                medical conditions.
              </p>
              <Link href="https://calendly.com/great-heights-info/30min">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 mt-3">
                  Book Your Scan
                  <Calendar className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Benefit 03 */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="text-5xl font-bold text-gray-900">03</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              Personalized Health Tracking
            </h3>
            <p className="text-gray-600 leading-relaxed text-md">
              Monitor your progress over time with detailed reports that show exactly how your body is changing with 
              treatment.
            </p>
          </div>

          {/* Benefit 04 */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="text-5xl font-bold text-gray-900">04</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Fast & Contactless
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Complete scan in just 3 minutes with no physical contact required. Safe, hygienic, and 
              comfortable for all patients.
            </p>
          </div>

          {/* Benefit 05 */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="text-5xl font-bold text-gray-900">05</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Trusted by Medical Professionals
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Used in hospitals worldwide, Styku provides clinical-grade data that doctors trust for diagnosis and 
              treatment planning.
            </p>
          </div>

          {/* Benefit 06 */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="text-5xl font-bold text-gray-900">06</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Versatile Medical Applications
            </h3>
            <p className="text-gray-600 leading-relaxed">
              From bariatrics to physiotherapy, sports medicine to rehabilitation, Styku adapts to multiple clinical needs 
              with unmatched accuracy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}