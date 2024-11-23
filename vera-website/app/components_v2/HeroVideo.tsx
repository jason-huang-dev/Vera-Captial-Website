'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-600 h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://source.unsplash.com/1600x900/?family,travel"
          alt="Family Travel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-white px-6 md:px-12">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Confidence at open <br />
          enrollment time.
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl mb-8">
          This straightforward guide covers the benefit decisions that can
          protect you and your loved ones.
        </p>

        {/* Call-to-Action Button */}
        <Link href="/basics">
          <Button
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold text-lg"
          >
            Get the basics
          </Button>
        </Link>

        {/* Secondary Buttons */}
        <div className="mt-6 flex gap-6">
          <Link href="/insure">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Insure ↓
            </Button>
          </Link>
          <Link href="/invest">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Invest ↓
            </Button>
          </Link>
          <Link href="/retire">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Retire ↓
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
