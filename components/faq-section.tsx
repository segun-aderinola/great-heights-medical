"use client"
import { useState } from "react"
import { ChevronDown, Plus, Minus } from "lucide-react"

export function FAQSection() {
  const [openItems, setOpenItems] = useState([0]) // First item open by default

  const faqs = [
    {
      question: "What is the Styku 3D Body Scanner?",
      answer: "The Styku scanner is an advanced, non-invasive device that creates a 3D model of your body to measure composition, track health changes, and support medical treatment plans."
    },
    {
      question: "What medical services do you offer?",
      answer: "We offer comprehensive medical services including weight loss programs, immigration physicals, drug treatment & recovery support, and preventive health screenings."
    },
    {
      question: "How much does a scan cost?",
      answer: "Scan pricing varies based on the package selected. Please contact us for detailed pricing information and available payment options."
    },
    {
      question: "Will my scan data be kept private?",
      answer: "Yes, all scan data and medical information is kept strictly confidential and secure in accordance with HIPAA regulations and our privacy policies."
    },
    {
      question: "What medical services do you offer?",
      answer: "We provide a full range of medical services including preventive care, diagnostic services, treatment planning, and specialized programs for weight management and recovery support."
    }
  ]

  const toggleItem = (index: any) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about the product and billing.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              >
                <h3 className="text-lg lg:text-xl text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <Minus className="w-4 h-4 text-gray-600" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <Plus className="w-4 h-4 text-gray-600" />
                    </div>
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed mt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}