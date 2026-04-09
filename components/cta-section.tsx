import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#2199F7] dot-texture rounded-[2rem] lg:rounded-[2.5rem] px-6 sm:px-10 lg:px-16 py-16 lg:py-20 text-center">
          <h2 className="font-urbanist font-bold text-white text-4xl sm:text-5xl lg:text-[56px] leading-[100%] tracking-[-0.02em] mb-5">
            Ready to Optimize Your Health?
          </h2>
          <p className="font-outfit text-white/80 text-base leading-[27px] tracking-[0.01em] mb-10 max-w-xl mx-auto">
            Schedule your 3D body scan or consultation today. Get started with precision metrics and
            personalized protocols.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://calendly.com/great-heights-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-outfit font-medium text-sm px-8 py-3.5 rounded-full hover:bg-white/90 transition-all duration-200 shadow-sm"
            >
              Book a 3D Body Scan
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/weight-loss"
              className="inline-flex items-center justify-center bg-gray-900 text-white font-outfit font-medium text-sm px-8 py-3.5 rounded-full hover:bg-gray-800 transition-all duration-200"
            >
              Start Personalized Weight loss
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
