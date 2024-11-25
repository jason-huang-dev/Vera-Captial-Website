"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { services } from "../constants";

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="animate-fadeInUp py-16 bg-gray-200 dark:bg-gray-800 relative rounded-lg"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Our Approach</h2>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
          At Vera Capital Management, we believe in a comprehensive and
          personalized approach to financial planning. Our services are designed
          to address every aspect of your financial life.
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 pl-4"
              >
                <div
                  key={index}
                  className="relative group h-96 rounded-lg overflow-hidden shadow-lg"
                >
                  {/* Background Image using Next.js Image component */}
                  <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-70">
                    <Image
                      src={
                        typeof service.image === "string"
                          ? service.image
                          : service.image.src
                      } // Handle image source
                      alt={service.title}
                      layout="fill" // Use fill to make it cover the div
                      objectFit="cover" // Ensure the image covers the area
                      className="object-cover"
                    />
                  </div>
                  {/* Text Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 opacity-0 transition-opacity duration-300 group-hover:opacity-70">
                    <h3 className="text-lg font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-300 mt-2 px-4">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons Inside Carousel */}
          {/* Mobile Navigation Buttons */}
          <div className="absolute inset-y-0 left-4 flex items-center sm:hidden">
            <CarouselPrevious
              className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-md mr-2"
              aria-label="Previous Slide"
            />
          </div>
          <div className="absolute inset-y-0 right-4 flex items-center sm:hidden">
            <CarouselNext
              className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-md"
              aria-label="Next Slide"
            />
          </div>

          {/* Desktop Navigation Buttons */}
          <div className="hidden sm:flex justify-center mt-8">
            <CarouselPrevious
              className="mr-2 p-2 bg-white dark:bg-gray-700 rounded-full shadow-md"
              aria-label="Previous Slide"
            />
            <CarouselNext
              className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-md"
              aria-label="Next Slide"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Services;
