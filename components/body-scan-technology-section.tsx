import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"

const features = [
  "200+ Body Measurements",
  "Body Composition Analysis",
  "Progress Tracking",
]

export function BodyScanTechnologySection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-urbanist font-bold text-gray-900 text-4xl sm:text-5xl lg:text-[52px] leading-[100%] tracking-[-0.02em] mb-5">
              3D Body Scanning Technology
            </h2>
            <p className="font-outfit text-gray-500 text-base leading-[27px] tracking-[0.01em] mb-8 max-w-md">
              Styku scanning delivers a complete body composition analysis in under 60 seconds. Track
              fat mass, lean mass, body shape changes, and symmetry with millimeter precision.
            </p>

            {/* Core Features */}
            <div className="mb-8">
              <h4 className="font-urbanist font-bold text-gray-900 text-lg mb-4">Core Features:</h4>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="font-outfit text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

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
            <div className="relative w-72 lg:w-80 xl:w-96 h-[400px] lg:h-[480px]">
              <Image
                src="/images/3d_body_scanner.png"
                alt="InBody 3D body scanning device"
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
