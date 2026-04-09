import Image from "next/image"
import Link from "next/link"

const serviceCards = [
  {
    image: "/images/athlete_tracker.jpg",
    imageAlt: "Athletes on a running track",
    title: "Athletes & Performance",
    description:
      "Measure what matters. Optimize Lean mass, Identify asymmetries, and train with precision.",
    href: "/athletes",
    linkLabel: "Learn More",
  },
  {
    image: "/images/fat_man.jpg",
    imageAlt: "Medical weight loss measurement",
    title: "Medical Weight Loss",
    description:
      "Weight Loss Backed by Biology—Not Guesswork. Personalized Using DNA, Microbiome, and CGM.",
    href: "/weight-loss",
    linkLabel: "Learn More",
  },
]

export function ServiceCardsSection() {
  return (
    <section className="bg-white py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {serviceCards.map((card) => (
            <div
              key={card.title}
              className="border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
            >
              {/* Image */}
              <div className="relative h-56 lg:h-64 overflow-hidden rounded-2xl m-3">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="px-6 pb-6 pt-3">
                <h3 className="font-urbanist font-bold text-xl text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="font-outfit text-sm text-gray-500 leading-[24px] mb-4">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="font-outfit text-sm font-semibold text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                >
                  {card.linkLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below cards */}
        <div className="flex justify-center mt-8">
          <Link
            href="https://calendly.com/great-heights-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2199F7] text-white font-outfit font-medium text-sm px-8 py-3.5 rounded-full hover:bg-[#1a87e0] transition-all duration-200 shadow-sm"
          >
            Book Your Appointment
          </Link>
        </div>
      </div>
    </section>
  )
}
