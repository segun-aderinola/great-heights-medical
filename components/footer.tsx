import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Athletes", href: "/athletes" },
  { name: "Weight Loss", href: "/weight-loss" },
  { name: "3D Body Scan", href: "/3d-body-scan" },
]

const programs = [{ name: "Hepatitis C Treatment", href: "/hepatitis-c" }]

const services = [{ name: "Immigration Physical", href: "/immigration" }]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#101828] rounded-t-[2rem] lg:rounded-t-[2.5rem] mt-4 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-14 pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Great Heights Medical"
                width={110}
                height={44}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="font-outfit text-gray-400 text-sm leading-[24px]">
              Physician-led optimization using 3D scans, DNA, microbiome, and CGM technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-urbanist font-bold text-white text-sm mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-outfit text-gray-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-urbanist font-bold text-white text-sm mb-5">Programs</h4>
            <ul className="space-y-3">
              {programs.map((p) => (
                <li key={p.name}>
                  <Link
                    href={p.href}
                    className="font-outfit text-gray-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-urbanist font-bold text-white text-sm mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.name}>
                  <Link
                    href={s.href}
                    className="font-outfit text-gray-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-urbanist font-bold text-white text-sm mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                <span className="font-outfit text-gray-400 text-sm">708.862.8156</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-400 shrink-0" />
                <a
                  href="mailto:Contact@greatheightsmedical.com"
                  className="font-outfit text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Contact@greatheightsmedical.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                <span className="font-outfit text-gray-400 text-sm leading-[22px]">
                  1473 Ring Rd, Calumet City, IL 60409
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="font-outfit text-gray-500 text-sm">
            © {year} Great Heights Medical. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
