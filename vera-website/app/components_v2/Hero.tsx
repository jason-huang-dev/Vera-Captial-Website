"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { background } from "../assets";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-600 min-h-[80vh] w-full flex items-center justify-center scroll-smooth">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={background}
          alt="Family Travel"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-white px-4 sm:px-6 md:px-12 py-12">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center sm:text-left">
          Confidence at open <br className="hidden sm:inline" />
          enrollment time.
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl mb-8 text-center sm:text-left">
          This straightforward guide covers the benefit decisions that can
          protect you and your loved ones.
        </p>

        {/* Call-to-Action Button */}
        <div className="flex justify-center sm:justify-start">
          <Link href="/basics">
            <Button className="bg-white text-blue-900 py-4 px-6 rounded-lg font-semibold text-lg">
              Schedule Appointment
            </Button>
          </Link>
        </div>

        {/* Secondary Buttons */}
        <div className="mt-6 flex flex-wrap justify-center sm:justify-start gap-4">
          {/* Insure Button */}
          <Link href="#carousel-banner">
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600"
            >
              Insure ↓
            </Button>
          </Link>

          {/* Invest Button */}
          <Link href="#carousel-banner">
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600"
            >
              Invest ↓
            </Button>
          </Link>

          {/* Retire Button */}
          <Link href="#carousel-banner">
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600"
            >
              Retire ↓
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
