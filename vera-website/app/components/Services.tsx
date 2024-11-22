"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      className="py-16 bg-gray-50 dark:bg-gray-800 relative"
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
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <span
                        className="text-4xl mr-4"
                        role="img"
                        aria-label={service.title}
                      >
                        {service.icon}
                      </span>
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{service.description}</p>
                  </CardContent>
                </Card>
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
