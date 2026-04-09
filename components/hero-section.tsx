"use client"

import Link from "next/link"
import { ArrowRight, Scale, FileText, Activity, ScanLine } from "lucide-react"

const floatingPills = [
  {
    label: "Weight Loss",
    icon: Scale,
    color: "bg-[#FFF9E6]",
    textColor: "text-gray-800",
    iconColor: "text-yellow-500",
    style: "top-[18%] right-[30%] rotate-[-8deg] animate-float",
  },
  {
    label: "Immigration Exams",
    icon: FileText,
    color: "bg-[#E8F8F0]",
    textColor: "text-gray-800",
    iconColor: "text-emerald-500",
    style: "top-[10%] right-[-10%] rotate-[10deg] animate-float-alt",
  },
  {
    label: "Fitness Tracking",
    icon: Activity,
    color: "bg-[#FCE8F4]",
    textColor: "text-gray-800",
    iconColor: "text-pink-500",
    style: "bottom-[28%] right-[28%] rotate-[-3deg] animate-float-slow",
  },
  {
    label: "3D Body Scan",
    icon: ScanLine,
    color: "bg-[#EDE8FF]",
    textColor: "text-gray-800",
    iconColor: "text-violet-600",
    style: "bottom-[18%] right-[8%] rotate-[8deg] animate-float",
  },
]

export function HeroSection() {
  return (
    <section className="relative bg-[#2199F7] dot-texture overflow-hidden rounded-b-[2.5rem] lg:rounded-b-[3.5rem] pt-24 lg:pt-28 pb-16 lg:pb-20 min-h-[640px] lg:min-h-[720px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/30">
              Evidence-Based · Personalized · Results-Driven
            </div>

            {/* Heading */}
            <h1 className="font-urbanist font-bold text-white leading-[100%] tracking-[-0.02em] text-4xl sm:text-5xl lg:text-[56px] xl:text-[64px] mb-6">
              See Your Body.{" "}
              Understand Your Metabolism.{" "}
              Change the Outcome.
            </h1>

            {/* Subtext */}
            <p className="font-outfit text-white/90 text-base leading-[27px] tracking-[0.01em] mb-10 max-w-lg">
              Physician-led optimization using 3D scans, DNA, microbiome, and CGM technology
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://calendly.com/great-heights-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary font-medium text-sm px-7 py-3.5 rounded-full hover:bg-white/90 transition-all duration-200 shadow-lg"
              >
                Book a 3D Body Scan
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/weight-loss"
                className="inline-flex items-center justify-center bg-gray-900 text-white font-medium text-sm px-7 py-3.5 rounded-full hover:bg-gray-800 transition-all duration-200"
              >
                Explore Personalized Weight loss
              </Link>
            </div>
          </div>

          {/* Right — floating pills */}
          <div className="relative hidden lg:block h-[420px]">
            {floatingPills.map((pill) => {
              const Icon = pill.icon
              return (
                <div
                  key={pill.label}
                  className={`absolute ${pill.style} flex items-center gap-2.5 ${pill.color} px-5 py-3 rounded-full shadow-xl`}
                >
                  <Icon className={`w-5 h-5 ${pill.iconColor} shrink-0`} />
                  <span className={`font-outfit font-medium text-sm ${pill.textColor} whitespace-nowrap`}>
                    {pill.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
