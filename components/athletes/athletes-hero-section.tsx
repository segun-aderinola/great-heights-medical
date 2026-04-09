import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AthletesHeroSection() {
  return (
    <section className="relative bg-[#2199F7] dot-texture overflow-hidden rounded-b-[2.5rem] lg:rounded-b-[3.5rem] pt-24 lg:pt-28 pb-0 min-h-[620px] lg:min-h-[700px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-end">
          {/* Left Content */}
          <div className="pb-16 lg:pb-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/30">
              Performance Optimization
            </div>

            {/* Heading */}
            <h1 className="font-urbanist font-bold text-white leading-[100%] tracking-[-0.02em] text-4xl sm:text-5xl lg:text-[60px] xl:text-[68px] mb-6">
              Train Smarter.{" "}
              <br className="hidden sm:block" />
              Perform Better.
            </h1>

            {/* Subtext */}
            <p className="font-outfit text-white/90 text-base leading-[27px] tracking-[0.01em] mb-10 max-w-md">
              Precision body composition tracking for athletes. Measure symmetry, monitor muscle
              distribution, and optimize training protocols with data you can trust.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://calendly.com/great-heights-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary font-outfit font-medium text-sm px-7 py-3.5 rounded-full hover:bg-white/90 transition-all duration-200 shadow-lg"
              >
                Book Athlete Body Scan
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/3d-body-scan"
                className="inline-flex items-center justify-center bg-gray-900 text-white font-outfit font-medium text-sm px-7 py-3.5 rounded-full hover:bg-gray-800 transition-all duration-200"
              >
                Learn About 3D Scan
              </Link>
            </div>
          </div>

          {/* Right — Athlete image (bottom-aligned, cropped into section) */}
          <div className="hidden lg:flex justify-end items-end">
            <div className="relative w-[420px] xl:w-[500px] h-[520px] xl:h-[600px]">
              <Image
                src="/images/athlete_tracker.jpg"
                alt="Athlete running"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
