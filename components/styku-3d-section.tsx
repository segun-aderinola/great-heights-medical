import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Styku3DSection() {
  return (
    <section className="py-8 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Book Your{" "}
            <span className="text-blue-500">
              Styku 3D <br /> Body Scan
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            A revolutionary 3D body scanning system for accurate, non-invasive
            health assessment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/book-scan">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Book Your Scan
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <span className="text-gray-600 font-medium">
              Opening Hours: Mon-Fri, 9 AM - 6 PM
            </span>
          </div>
        </div>

        {/* Styku Interface Display */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-gray-100 rounded-3xl p-8 lg:p-12">
            <Image
              src="/images/DDD.jpg"
              alt="Styku 3D Body Scanner Interface"
              width={1200}
              height={800}
              className="w-full h-auto rounded-2xl"
              priority
            />
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-10">
          <div className="bg-gray-100 rounded-3xl p-8 lg:p-12">
            <video
              src="/images/styku_video.mp4"
              className="w-full h-auto rounded-2xl"
              controls
              autoPlay
              muted
              loop
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
