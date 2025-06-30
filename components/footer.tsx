import { Button } from "@/components/ui/button"
import { Accessibility } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-footer-bg text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
              </div>
              <span className="text-xl font-bold">GreatHeight</span>
            </div>
            <p className="text-body-text text-gray-300 mb-4">
              At Great Heights Medical, we are committed to guiding you toward better health and well-being through
              advanced, compassionate care.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full w-12 h-12 p-0">
              <Accessibility className="w-6 h-6" />
            </Button>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-body-text text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body-text text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body-text text-gray-300 hover:text-white">
                  Book an Appointment
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body-text text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-body-text text-gray-300 hover:text-white">
                  Styku 3D Body Scan
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body-text text-gray-300 hover:text-white">
                  Immigration Physical Exams
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body-text text-gray-300 hover:text-white">
                  Drug Treatment & Recovery
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body-text text-gray-300 hover:text-white">
                  Preventive Care
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Location</h3>
            <div className="space-y-4">
              <div>
                <p className="text-body-text text-gray-300">315 E Mckinley Road, Ottawa, IL 61350</p>
                <p className="text-body-text text-gray-300">Phone: 815.434.0228 Fax: 815.434.0148</p>
              </div>
              <div>
                <p className="text-body-text text-gray-300">1473 Ring Rd, Calumet City, IL 60409 the USA</p>
                <p className="text-body-text text-gray-300">Phone: 708.862.8156 Fax: 708.862.8105</p>
              </div>
              <p className="text-body-text text-gray-300">Hours: Mon-Fri, 9 AM – 6 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-body-text text-gray-300">© 2025 Great Heights Medical. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-body-text text-gray-300 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-body-text text-gray-300 hover:text-white">
                Terms & Conditions
              </Link>
              <Link href="#" className="text-body-text text-gray-300 hover:text-white">
                HIPAA Notice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}