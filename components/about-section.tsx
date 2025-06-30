import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title font-bold mb-6 text-gray-900">About Us – Great Heights Medical</h2>
            <p className="text-body-text text-gray-600 mb-8 leading-relaxed">
              At Great Heights Medical, we are committed to guiding you toward better health and well-being through
              advanced, compassionate care. Located in a trusted community setting, our clinic is known for delivering
              personalized medical solutions using the latest technology and a patient-first approach.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h2 className="font-semibold mb-3 text-gray-900">Personalized, judgment-free care</h2>
                <p className="text-body-text text-gray-600 leading-relaxed">
                  Every patient is treated like family. We listen closely and create solutions just for you.
                </p>
              </div>
              <div>
                <h2 className="font-semibold mb-3 text-gray-900">Convenient Scheduling</h2>
                <p className="text-body-text text-gray-600 leading-relaxed">
                  Same-day appointments and online booking through Calendly make it easy to get care fast.
                </p>
              </div>
              <div>
                <h2 className="font-semibold mb-3 text-gray-900">Modern & Efficient Technology</h2>
                <p className="text-body-text text-gray-600 leading-relaxed">
                  From 3D body scanning to digital records, we invest in tech that empowers your care.
                </p>
              </div>
              <div>
                <h2 className="font-semibold mb-3 text-gray-900">Trusted Expertise</h2>
                <p className="text-body-text text-gray-600 leading-relaxed">
                  Our certified professionals bring years of clinical experience and compassion to every appointment.
                </p>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full">
              Read More About Us
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/images/yemi.png"
              alt="Medical Professional in Great Heights t-shirt"
              width={600}
              height={700}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}