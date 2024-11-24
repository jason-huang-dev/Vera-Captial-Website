import React from "react";
import Image from "next/image";  // Import Next.js Image component
import { services } from "../constants";

const ServicesSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group h-96 rounded-lg overflow-hidden shadow-lg"
            >
              {/* Background Image using Next.js Image component */}
              <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-70">
                <Image
                  src={typeof service.image === "string" ? service.image : service.image.src}  // Handle image source
                  alt={service.title}
                  layout="fill"  // Use fill to make it cover the div
                  objectFit="cover"  // Ensure the image covers the area
                  className="object-cover"
                />
              </div>
              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 opacity-0 transition-opacity duration-300 group-hover:opacity-70">
                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                <p className="text-sm text-gray-300 mt-2 px-4">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
