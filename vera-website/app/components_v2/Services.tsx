'use client'

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from "../constants"

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-16 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-800 dark:text-gray-100">Our Approach</h2>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          At Vera Capital Management, we believe in a comprehensive and
          personalized approach to financial planning. Our services are designed
          to address every aspect of your financial life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <span
                    className="text-4xl mr-4"
                    role="img"
                    aria-hidden="true"
                  >
                    {service.icon}
                  </span>
                  <span className="text-gray-800 dark:text-gray-100">{service.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
