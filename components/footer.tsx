"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Accessibility } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const date = new Date()
  const year = date.getFullYear()
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative">
      {/* CTA Section */}
      <div className="relative py-20 lg:py-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/footer-bg.png"
            alt="Medical room"
            fill
            className="object-cover object-center"
          />
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Ready to take the next step in your health or immigration journey?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://calendly.com/great-heights-info/30min">
              <Button 
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Book an Appointment
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            
            <Link href="/about">
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 rounded-full font-medium transition-all duration-300 hover:scale-105 bg-transparent"
              >
                Read About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
               <Link href={`/`}>
                <Image
                  src="/logo.png"
                  alt="Great Heights Medical"
                  width={100}
                  height={100}
                  className="h-18"
                />
              </Link>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                At Great Heights Medical, we are committed to guiding you toward better health and well-being through advanced, compassionate care.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Services", href: "/services" },
                  { name: "Contact Us", href: "/contact" }
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Our Services</h3>
              <ul className="space-y-3">
                {[
                  "Styku 3D Body Scan",
                  "Immigration Physical Exams", 
                  "Drug Treatment & Recovery"
                ].map((service, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Policies and Location */}
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold mb-4 text-lg">Legal & Policies</h3>
                <ul className="space-y-3">
                  {[
                    "Privacy Policy",
                    "Terms & Conditions",
                    "HIPAA Notice"
                  ].map((policy, index) => (
                    <li key={index}>
                      <Link
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        {policy}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-lg">Location</h3>
                <div className="space-y-4 text-sm">
                  <div className="text-gray-300">
                    <p>1473 Ring Rd, Calumet City, IL 60409 USA </p>
                    <p>Phone: 708.862.8156</p>
                    <p>Fax: 708.862.8105</p>
                  </div>
                  <p className="text-gray-300 font-medium">
                    Hours: Mon-Fri, 9 AM - 6 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Border and Copyright */}
          <div className="border-t border-gray-700 pt-8">
            <div className="text-center">
              <p className="text-gray-300">
                © {year} Great Heights Medical. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}