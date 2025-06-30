import { Button } from "@/components/ui/button"
import { ChevronDown, Phone } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
              </div>
              <span className="text-xl font-bold text-primary">GreatHeight</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="#" className="text-gray-700 hover:text-primary text-body-text">
              Home
            </Link>
            <Link href="#" className="text-gray-700 hover:text-primary text-body-text">
              About Us
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary text-body-text flex items-center">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <Link href="#" className="text-gray-700 hover:text-primary text-body-text">
              Faqs
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <span className="text-gray-600 text-body-text">Hours: Mon-Fri, 9 AM – 6 PM</span>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}