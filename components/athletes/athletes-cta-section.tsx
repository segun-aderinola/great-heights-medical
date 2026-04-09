import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AthletesCTASection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#2199F7] dot-texture rounded-[2rem] lg:rounded-[2.5rem] px-6 sm:px-10 lg:px-16 py-16 lg:py-24 text-center">
          <h2 className="font-urbanist font-bold text-white text-4xl sm:text-5xl lg:text-[56px] leading-[100%] tracking-[-0.02em] mb-5">
            Ready to Measure What Actually Matters?
          </h2>
          <p className="font-outfit text-white/80 text-base leading-[27px] tracking-[0.01em] mb-10 max-w-xl mx-auto">
            Book your performance scan today and get objective data to optimize your training
            protocols.
          </p>

          <Link
            href="https://calendly.com/great-heights-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-primary font-outfit font-medium text-sm px-8 py-3.5 rounded-full hover:bg-white/90 transition-all duration-200 shadow-sm"
          >
            Book a 3D Body Scan
            <span className="flex items-center justify-center w-7 h-7 bg-primary/10 rounded-full">
              <ArrowRight className="w-4 h-4 text-primary" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
