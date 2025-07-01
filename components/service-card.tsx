import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

interface ServiceCardProps {
  number: string
  title: string
  description: string
  features: string[]
  buttonText: string
  imageSrc?: string
  imageAlt?: string
}

export function ServiceCard({
  number,
  title,
  description,
  features,
  buttonText,
  imageSrc,
  imageAlt,
}: ServiceCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 md:p-8 flex flex-col h-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Header with number and title */}
      <div className="text-xl md:text-4xl font-bold mr-3 md:mr-4 mt-1 flex-shrink-0">{number}</div>
      <div className="flex items-start mb-4">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight mt-3">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">{description}</p>

      {/* Features list */}
      <ul className="space-y-2 md:space-y-3 mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm md:text-base text-gray-600">
            <div className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></div>
            <span className="leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <div className="mt-auto">
        <Button className="bg-primary hover:bg-primary/90 text-white px-4 md:px-6 py-3 rounded-full mb-6 transition-all duration-300 hover:scale-105 text-sm md:text-base">
          {buttonText}
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>

        {/* Image if provided */}
        {imageSrc && (
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt || "Service image"}
              width={400}
              height={200}
              className="w-full h-40 md:h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
      </div>
    </div>
  )
}
