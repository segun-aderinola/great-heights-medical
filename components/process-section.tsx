import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Image from "next/image";

export function ProcessSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">
              Our Processes
            </h1>

            <p className="text-gray-600 mb-12 text-lg">
              Comprehensive care for your total wellness
            </p>

            {/* 2x2 Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-12">
              {/* Initial Consultation */}
              <div className="flex flex-col">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4">
                  <span className="text-lg font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Initial Consultation
                </h3>
                <p className="text-gray-600">
                  Number of Patients Consulted in last 2years.
                </p>
              </div>

              {/* Custom Treatment Plan */}
              <div className="flex flex-col">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4">
                  <span className="text-lg font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Custom Treatment Plan
                </h3>
                <p className="text-gray-600">
                  Number of Patients Consulted in last 2years.
                </p>
              </div>

              {/* Regular Monitoring */}
              <div className="flex flex-col">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4">
                  <span className="text-lg font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Regular Monitoring
                </h3>
                <p className="text-gray-600">
                  Customer Satisfaction Level Based on Feedbacks.
                </p>
              </div>

              {/* Ongoing Support */}
              <div className="flex flex-col">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4">
                  <span className="text-lg font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Ongoing Support
                </h3>
                <p className="text-gray-600">
                  Medical Partitional all Across the Country.
                </p>
              </div>
            </div>

            {/* Book an Appointment Button */}
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full flex items-center gap-2 font-medium transition-colors">
              <Calendar className="w-5 h-5" />
              Book an Appointment
            </button>
          </div>
          <div className="relative">
            <Image
              src="/images/our_processes.jpg"
              alt="Medical Consultation Process"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
