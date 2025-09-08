"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function FreeScanSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Get a Free Scan After{" "}
            <span className="text-blue-500">Two Scans!</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Track your progress without extra cost. Book two Styku 3D body scans and 
            your third scan is completely free – our way of helping you stay committed 
            to your health journey.
          </p>
          
          {/* CTA Button and Hours */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="https://calendly.com/great-heights-info/30min">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-medium text-md transition-all duration-300 hover:scale-105">
                Book Your Scan
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <span className="text-gray-600 font-medium">
              Opening Hours: Mon-Fri, 9 AM – 6 PM
            </span>
          </div>
        </div>

        {/* Styku Dashboard Image */}
        <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
                <Image
                src="/images/3D_gif.gif"
                width={1200}
                height={800}
                alt="Styku 3D Body Scanner Dashboard Interface showing body measurements and progress tracking"
                className="w-full h-auto rounded-xl"
                />
            </div>
        </div>
      </div>
    </section>
  )
}