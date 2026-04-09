import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"

const features = [
  "3D visualization of your entire body composition",
  "Side-by-side scan comparisons to see real progress",
  "Detailed reports you can share with coaches and trainers",
  "Progress tracking over weeks, months, and training cycles",
]

export function DataDrivenTrainingSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-urbanist font-bold text-gray-900 text-4xl sm:text-5xl lg:text-[52px] leading-[100%] tracking-[-0.02em] mb-5">
              Data-Driven Training.{" "}
              <br className="hidden sm:block" />
              Measurable Results.
            </h2>
            <p className="font-outfit text-gray-500 text-base leading-[27px] tracking-[0.01em] mb-8 max-w-md">
              Stop relying on mirror checks and how your clothes fit. Get objective, repeatable
              measurements that track your progress over time.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="font-outfit text-gray-700 text-sm leading-[24px]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/3d-body-scan"
              className="inline-flex items-center gap-2 bg-gray-900 text-white font-outfit font-medium text-sm px-7 py-3.5 rounded-full hover:bg-gray-800 transition-all duration-200"
            >
              Learn About 3D Scanning
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right — Device Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 lg:w-80 xl:w-96 h-[400px] lg:h-[500px]">
              <Image
                src="/images/3d_body_scanner.png"
                alt="InBody 270 body composition device"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
