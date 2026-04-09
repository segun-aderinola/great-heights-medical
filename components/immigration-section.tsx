import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"

const services = [
  "Medical history review and physical exam",
  "Required vaccinations and lab testing",
  "Completion and sealing of I-693 for submission",
  "Multilingual staff and culturally sensitive care",
]

export function ImmigrationSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Image */}
          <div className="relative h-80 lg:h-[460px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/immigration_exam.jpg"
              alt="USCIS Immigration Physical Exam documents"
              fill
              className="object-cover"
            />
          </div>

          {/* Right — Content */}
          <div>
            <h2 className="font-urbanist font-bold text-gray-900 text-4xl sm:text-5xl lg:text-[52px] leading-[100%] tracking-[-0.02em] mb-5">
              USCIS Immigration Physical Exams
            </h2>
            <p className="font-outfit text-gray-500 text-base leading-[27px] tracking-[0.01em] mb-7">
              As a designated USCIS Civil Surgeon, Dr. Fatoki provides efficient, same-week
              immigration physical exams compliant with Form I-693 requirements. Our team ensures a
              smooth, respectful, and timely process, including:
            </p>

            <h4 className="font-urbanist font-bold text-gray-900 text-lg mb-4">
              Our Immigration Exam Services Include:
            </h4>

            <ul className="space-y-3 mb-8">
              {services.map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="font-outfit text-gray-700 text-sm leading-[24px]">{service}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/immigration"
              className="inline-flex items-center gap-2 bg-gray-900 text-white font-outfit font-medium text-sm px-7 py-3.5 rounded-full hover:bg-gray-800 transition-all duration-200"
            >
              Explore Service
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
