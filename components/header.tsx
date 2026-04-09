"use client"

import { Phone, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Athletes", href: "/athletes" },
  { name: "Weight Loss", href: "/weight-loss" },
  { name: "3D Body Scan", href: "/3d-body-scan" },
  { name: "Hepatitis C Treatment", href: "/hepatitis-c" },
  { name: "Immigration", href: "/immigration" },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="Great Heights Medical"
              width={120}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-outfit text-sm text-gray-800 hover:text-primary transition-colors duration-200 whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Book Now Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="https://calendly.com/great-heights-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200"
            >
              Book Now
              <span className="flex items-center justify-center w-7 h-7 bg-white/20 rounded-full">
                <Phone className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="lg:hidden fixed top-16 left-0 right-0 bg-white shadow-xl z-50 rounded-b-2xl overflow-hidden">
            <nav className="px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 hover:text-primary py-3 px-3 rounded-xl hover:bg-gray-50 text-sm font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-100">
                <Link
                  href="https://calendly.com/great-heights-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gray-900 text-white text-sm font-medium px-5 py-3 rounded-full w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  Book Now
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}
