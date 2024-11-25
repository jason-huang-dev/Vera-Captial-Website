// components_v2/CarouselBanner.tsx

"use client";

import React, { useEffect, useState } from "react";
import { COMPANY_INFO, bannerCalltoAction } from "../constants";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import useIsMobile from "../hooks/useIsMobile";

type ServicesProps = {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
};

const Services: React.FC<ServicesProps> = ({
  currentIndex,
  setCurrentIndex,
}) => {
  const isMobile = useIsMobile();
  const [showPhone, setShowPhone] = useState(false);

  const handleButtonClick = () => {
    if (!isMobile) {
      setShowPhone(true);
    }
  };

  // Automatic slide rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === bannerCalltoAction.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [setCurrentIndex]);

  // Functions to handle previous and next slide
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? bannerCalltoAction.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === bannerCalltoAction.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Function to go to a specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="services"
      className="h-[40em] bg-gray-200 dark:bg-gray-800 relative"
    >
      <div id="default-carousel" className="relative w-full h-full">
        <div className="relative h-full overflow-hidden">
          {bannerCalltoAction.map((slide, index) => (
            <div
              id={slide.id}
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={
                  typeof slide.image === "string"
                    ? slide.image
                    : slide.image.src
                }
                className="absolute inset-0 w-full h-full object-cover"
                alt={slide.title}
              />
              <div className="absolute bottom-0 bg-gray-800 bg-opacity-70 text-white p-4 w-full">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center sm:text-left ">
                  {slide.title}
                </h2>
                <p className="mt-2 text-sm w-[45em]">{slide.description}</p>
                {/* Phone Button */}
                {isMobile ? (
                  <a
                    href={`tel:${COMPANY_INFO.CONTACT.PHONE}`}
                    aria-label={`Call ${COMPANY_INFO.CONTACT.PHONE}`}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white text-black mb-10 mt-5 flex items-center transition-colors duration-200"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Give us a call
                    </Button>
                  </a>
                ) : (
                  <Button
                    size="lg"
                    onClick={handleButtonClick}
                    className="flex items-center bg-white my-5 text-black transition-colors duration-200 hover:bg-slate-400"
                    aria-label={`Show phone number`}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    {showPhone ? COMPANY_INFO.CONTACT.PHONE : "Give us a call"}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
          {bannerCalltoAction.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-lg ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-current={index === currentIndex ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 rounded-lg flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={prevSlide}
        >
          <span className="inline-flex items-center rounded-lg justify-center w-10 h-10  bg-gray-900/30 group-hover:bg-gray-700/50">
            {/* Left arrow SVG */}
            <svg
              className="w-6 h-6 text-gray-200"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                d="M5 1L1 5L5 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex rounded-lg items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={nextSlide}
        >
          <span className="inline-flex items-center rounded-lg justify-center w-10 h-10 bg-gray-900/30 group-hover:bg-gray-700/50">
            {/* Right arrow SVG */}
            <svg
              className="w-6 h-6 text-gray-200"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                d="M1 1L5 5L1 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Services;
