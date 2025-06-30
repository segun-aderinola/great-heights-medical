import { Target, Users, Zap } from "lucide-react";
import Image from "next/image";

export function CoreValuesSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/images/core_values.jpg"
              alt="Our Core Values"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="max-w-2xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">
              Our Core Values
            </h1>

            <p className="text-gray-600 mb-12 text-lg leading-relaxed">
              Every patient is treated like family. We listen closely and create
              solutions just for you.we rely on precision and results.
            </p>

            <div className="space-y-8">
              {/* Excellence */}
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    Excellence
                  </h3>
                  <p className="text-gray-600 text-base">
                    Committed to the highest standards of medical care
                  </p>
                </div>
              </div>

              {/* Integrity */}
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Zap className="w-8 h-8 text-white" fill="white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    Integrity
                  </h3>
                  <p className="text-gray-600 text-base">
                    Operating with transparency and honesty
                  </p>
                </div>
              </div>

              {/* Patient-Centered */}
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Users className="w-8 h-8 text-white" fill="white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    Patient-Centered
                  </h3>
                  <p className="text-gray-600 text-base">
                    Your health goals are our priority
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
