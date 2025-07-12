"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function WhatIsStykulSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden bg-[#F0F9FF]">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md h-80 lg:h-96">
              <Image
                src="/images/weightloss_body.png"
                alt="Man with Styku 3D Body Scanner"
                fill
                className="object-cover rounded-full bg-gray-100"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="max-w-2xl">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">
                What is <span className="text-blue-500">STYKU</span>?
              </h2>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-gray-900">
                NON-INVASIVE BODY SCANNER AUTOMATES MEASURING PROCESS.
              </h1>
              <p className="text-md mb-6 text-gray-600 leading-relaxed">
                Founded with a vision to combine modern medical technology with compassionate care, Great Heights
                Medical has become a trusted provider of patient-centered health services. Our clinic specializes in
                weight management using the Styku 3D Body Scanner, certified immigration medical exams, and outpatient
                drug treatment — all delivered in a safe, welcoming environment.
              </p>

              {/* Feature List */}
              <ul className="space-y-3 text-gray-600">
                <li>Completely Autonomous and Private.</li>
                <li>Takes only 35 seconds, only 40 seconds processing time (the fastest scanner on the market).</li>
                <li>Scan in leggings, shorts, and any form-fitting clothing.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}