"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    title: "Insure Your Future",
    content:
      "Protect your loved ones and secure your peace of mind. Our insurance planning strategies are tailored to your unique needs, ensuring comprehensive coverage for life's uncertainties.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Invest Wisely",
    content:
      "Grow your wealth with confidence. Our holistic approach to investing is designed to help you make smart decisions and achieve your financial goals.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Retire Comfortably",
    content:
      "Plan for a secure retirement. We'll help you maximize your Social Security benefits and create a strategy for a comfortable, worry-free retirement.",
    image: "/placeholder.svg?height=400&width=600",
  },
];

export default function CarouselBanner() {
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col md:flex-row items-center justify-between p-6">
                  <div className="md:w-1/2 mb-4 md:mb-0 md:pr-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                      {slide.title}
                    </h2>
                    <p className="text-muted-foreground">{slide.content}</p>
                  </div>
                  <div className="md:w-1/2">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={600}
                      height={400}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
