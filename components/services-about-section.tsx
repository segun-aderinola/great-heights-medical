import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function ServiceAboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="bg-blue-500 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full transform translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full transform -translate-x-24 translate-y-24"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                What is Styku?
              </h2>
              
              <p className="text-lg mb-6 leading-relaxed opacity-95">
                The Styku 3D body scanner provides a quick and non-invasive method to scan your body within minutes. By capturing millions of data points and 600 infrared images, it precisely tracks, analyzes, and helps plan your health and wellness journey. With Styku, you can visualize your body's shape in 3D, along with a detailed body composition analysis
              </p>
              
              <p className="text-lg mb-8 leading-relaxed opacity-95">
                The Styku scanner offers a comprehensive body shape analysis, assesses body composition (fat versus lean body mass), and supports you in achieving your body composition goals by calculating your daily caloric expenditure and the maximum caloric intake needed to meet your targets.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <Link href="/about">
                  <Button 
                    variant="secondary"
                    className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                  >
                    Read More About Us
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                
                <div className="text-white">
                  <p className="font-medium">Opening Hours: Mon-Fri, 9 AM - 6 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/yemi-new.png"
                alt="Medical professional at Great Heights Medical"
                width={600}
                height={700}
                className="object-cover w-full h-[500px] lg:h-[600px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}