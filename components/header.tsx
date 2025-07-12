"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Phone, Menu, X, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen)
  }

  const closeServicesDropdown = () => {
    setIsServicesDropdownOpen(false)
  }

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`/`}>
              <Image 
                src="/logo.png" 
                alt="GreatHeight" 
                width={100} 
                height={100}
                className="h-18"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary text-body-text transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary text-body-text transition-colors">
              About Us
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary text-body-text transition-colors">
              Services
            </Link>
            <Link href="#" className="text-gray-700 hover:text-primary text-body-text transition-colors">
              Faqs
            </Link>
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-gray-600 text-body-text">Hours: Mon-Fri, 9 AM – 6 PM</span>
            <Button className="bg-primary hover:bg-primary/90 text-white transition-colors rounded-full">
              Contact Us
              <Phone className="w-4 h-4 mr-2" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button className="bg-primary hover:bg-primary/90 text-white p-2">
              <Phone className="w-4 h-4" />
            </Button>
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-primary p-2 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      <div
        className={`
          fixed top-16 left-1/2 transform -translate-x-1/2 bg-white shadow-xl z-50 rounded-lg transition-all duration-300 ease-in-out w-full max-w-md mx-4
          ${isServicesDropdownOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}
        `}
      >
        <div className="px-6 py-8">
          <div className="grid grid-cols-1">
            {/* Weight Loss & Body Composition */}
            <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Weight Loss & Body Composition</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Discover a smarter way to manage your body goals. Our Styku 3D Body Scanner captures a 360° image of your body in seconds, providing accurate metrics.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white px-4 md:px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-md" 
              onClick={closeServicesDropdown}
              >
                <span>Schedule Your Scan</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Immigration Medical Exams */}
            <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Immigration Medical Exams</h3>
              </div>
              <p className="text-gray-600 mb-4">
                We are proud to be a USCIS-designated civil surgeon, offering Immigration Medical Exams in accordance with federal guidelines. Our streamlined process ensures efficiency.
              </p>
              <Button 
                className="bg-primary hover:bg-primary text-white rounded-full"
                onClick={closeServicesDropdown}
              >
                Book Immigration Exam
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Drug Treatment & Recovery Support */}
            <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Drug Treatment & Recovery Support</h3>
              </div>
              <p className="text-gray-600 mb-4">
                At Great Heights Medical, we believe that recovery is possible with the right guidance, structure, and medical support for your journey.
              </p>
              <Button 
                className="bg-primary hover:bg-primary text-white rounded-full"
                onClick={closeServicesDropdown}
              >
                Start Your Recovery Journey
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={closeMobileMenu} />
      )}

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden fixed top-16 left-0 right-0 bg-white shadow-lg z-50 transform transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}
        `}
      >
        <nav className="px-4 py-6 space-y-4">
          <Link
            href="#"
            className="block text-gray-700 hover:text-primary text-body-text py-2 transition-colors"
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link
            href="#"
            className="block text-gray-700 hover:text-primary text-body-text py-2 transition-colors"
            onClick={closeMobileMenu}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="block text-gray-700 hover:text-primary text-body-text py-2 transition-colors"
            onClick={closeMobileMenu}
          >
            Services
          </Link>
          <Link
            href="#"
            className="block text-gray-700 hover:text-primary text-body-text py-2 transition-colors"
            onClick={closeMobileMenu}
          >
            Faqs
          </Link>
          <div className="pt-4 border-t border-gray-200">
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-white transition-colors"
              onClick={closeMobileMenu}
            >
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}