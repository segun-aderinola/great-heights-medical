import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { ServiceCard } from "./service-card"

export function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "Weight Loss & Body Composition (Styku 3D Scanner)",
      description:
        "Discover a smarter way to manage your body goals. Our Styku 3D Body Scanner captures a 360° image of your body in seconds, providing accurate metrics",
      features: ["Full 3D body composition tracking", "Visualize progress over time", "Safe, non-invasive technology"],
      buttonText: "Schedule Your Scan",
      imageSrc: "/images/scan1.jpg",
      imageAlt: "3D Body Scanner",
    },
    {
      number: "02",
      title: "Immigration Medical Exams",
      description:
        "We are proud to be a USCIS-designated civil surgeon, offering Immigration Medical Exams in accordance with federal guidelines. Our streamlined process",
      features: ["Full physical examination", "Required vaccinations", "TB testing and other labs"],
      buttonText: "Schedule Immigration Exam",
      imageSrc: "/images/immigration_exam.jpg",
      imageAlt: "Immigration Medical Exam",
    },
    {
      number: "03",
      title: "Drug Treatment & Recovery Support.",
      description:
        "At Great Heights Medical, we believe that recovery is possible with the right guidance, structure, and medical support.",
      features: [
        "Medication-Assisted Treatment (MAT)",
        "One-on-one counseling and addiction support",
        "Regular medical assessments and progress tracking",
      ],
      buttonText: "Start Your recovery Journey",
      imageSrc: "/images/drug_treatment.jpg",
      imageAlt: "Drug Treatment and Recovery",
    },
    {
      number: "04",
      title: "Primary & Preventive Care",
      description:
        "Offer routine checkups, blood pressure monitoring, diabetes screening, and annual physicals for adults and families.",
      features: [
        "Builds long-term patient relationships",
        "Encourages overall health maintenance",
        "Easy to bundle with other services",
      ],
      buttonText: "Start Your recovery Journey",
      imageSrc: "/images/primary_care.jpg",
      imageAlt: "Primary and Preventive Care",
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Service – Great Heights Medical</h2>
          <p className="text-gray-600 mb-8">
            At Great Heights Medical, we offer modern, precise, and patient-centered services designed to elevate your
            health and well-being.
          </p>
        </div>
        <div className="flex justify-end items-center">
          <div className="text-right">
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4" />
              Book an Appointment
            </button>
            <p className="text-gray-600 text-sm">Opening Hours: Mon-Fri, 9 AM – 6 PM</p>
          </div>
        </div>
      </div>
    </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              number={service.number}
              title={service.title}
              description={service.description}
              features={service.features}
              buttonText={service.buttonText}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}