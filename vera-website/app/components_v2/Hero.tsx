"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { background } from "../assets";

type HeroProps = {
  handleClick: (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>,
    url: string
  ) => void;
  openNavigation: boolean;
  toggleNavigation: () => void;
};

export default function Hero({
  handleClick,
  openNavigation,
  toggleNavigation,
}: HeroProps) {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-600 min-h-[80vh] md:h-screen w-full flex items-center justify-center">
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
            <Button className="flex items-center justify-center px-4 py-2 rounded-2xl bg-white hover:bg-gray-300 text-black transition-colors duration-200 whitespace-nowrap">
              Schedule Appointment
            </Button>
          </Link>
        </div>

        {/* Secondary Buttons */}
        <div className="mt-6 flex flex-wrap justify-center sm:justify-start gap-4">
          {/* Insure Button */}
          <Button
            className="flex items-center justify-center p-4 rounded-2xl bg-gray-900 hover:bg-gray-700 text-white transition-colors duration-200 whitespace-nowrap"
            onClick={(e) => handleClick(e, "#carousel-banner")}
          >
            Insure ↓
          </Button>

          {/* Invest Button */}
          <Button
            className="flex items-center justify-center p-4 rounded-2xl bg-gray-900 hover:bg-gray-700 text-white transition-colors duration-200 whitespace-nowrap"
            onClick={(e) => handleClick(e, "#carousel-banner")}
          >
            Invest ↓
          </Button>

          {/* Retire Button */}
          <Button
            className="flex items-center justify-center p-4 rounded-2xl bg-gray-900 hover:bg-gray-700 text-white transition-colors duration-200 whitespace-nowrap"
            onClick={(e) => handleClick(e, "#carousel-banner")}
          >
            Retire ↓
          </Button>
        </div>
      </div>
    </div>
  );
}
