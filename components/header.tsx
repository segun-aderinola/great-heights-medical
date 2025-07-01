"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Phone, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="GreatHeight" 
              width={100} 
              height={100}
              className="h-18"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#" className="text-gray-700 hover:text-primary text-body-text transition-colors">
              Home
            </Link>
            <Link href="#" className="text-gray-700 hover:text-primary text-body-text transition-colors">
              About Us
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary text-body-text flex items-center transition-colors">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <Link href="#" className="text-gray-700 hover:text-primary text-body-text transition-colors">
              Faqs
            </Link>
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-gray-600 text-body-text">Hours: Mon-Fri, 9 AM – 6 PM</span>
            <Button className="bg-primary hover:bg-primary/90 text-white transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
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
          <div className="py-2">
            <button className="text-gray-700 hover:text-primary text-body-text flex items-center transition-colors">
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>
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
