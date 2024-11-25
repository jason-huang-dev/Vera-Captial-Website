// components_v2/AboutUs.tsx

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { COMPANY_INFO } from "../constants";
import useIsMobile from "../hooks/useIsMobile";
import { accountant, taxes } from "../assets";
import Link from "next/link";
import useInView from "../hooks/useInView"; // Import the custom hook

const AboutUs: React.FC = () => {
  const isMobile = useIsMobile();
  const [showPhone, setShowPhone] = useState(false);

  const handleButtonClick = () => {
    if (!isMobile) {
      setShowPhone(true);
    }
  };

  // Use the custom hook for different elements
  const { ref: refSection1Heading, isInView: isSection1HeadingInView } =
    useInView<HTMLHeadingElement>();
  const { ref: refSection1Paragraph, isInView: isSection1ParagraphInView } =
    useInView<HTMLParagraphElement>();
  const { ref: refSection1Button, isInView: isSection1ButtonInView } =
    useInView<HTMLDivElement>();

  const { ref: refSection2Heading, isInView: isSection2HeadingInView } =
    useInView<HTMLHeadingElement>();
  const { ref: refSection2Paragraph, isInView: isSection2ParagraphInView } =
    useInView<HTMLParagraphElement>();
  const { ref: refSection2Button, isInView: isSection2ButtonInView } =
    useInView<HTMLDivElement>();

  return (
    <section className="py-16 bg-blue2">
      <div className="container mx-auto px-5 lg:px-[5em]">
        {/* First Section */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-10">
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="rounded-full overflow-hidden w-64 h-64 lg:w-72 lg:h-72">
              <img
                src={
                  typeof accountant === "string" ? accountant : accountant.src
                }
                alt="Invest when you’re ready"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-left lg:ml-8 mt-8 lg:mt-0">
            <h2
              ref={refSection1Heading}
              className={`text-2xl text-white font-semibold mb-4 ${
                isSection1HeadingInView ? "animate-fadeInUp" : "opacity-0"
              }`}
            >
              Invest when you’re ready.
            </h2>
            <p
              ref={refSection1Paragraph}
              className={`text-white mb-6 ${
                isSection1ParagraphInView ? "animate-fadeInUp" : "opacity-0"
              }`}
            >
              Dedicate part of each paycheck to big goals, such as retirement or
              education, in accounts tailored for the long term. Feel confident
              about investing with us.
            </p>
            {/* Phone Button */}
            <div
              ref={refSection1Button}
              className={`${
                isSection1ButtonInView ? "animate-fadeInUp" : "opacity-0"
              }`}
            >
              {isMobile ? (
                <a
                  href={`tel:${COMPANY_INFO.CONTACT.PHONE}`}
                  aria-label={`Call ${COMPANY_INFO.CONTACT.PHONE}`}
                  className="block"
                >
                  <Button
                    size="lg"
                    className="bg-white text-black flex items-center justify-center px-8 py-5 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                  >
                    <Phone className="w-6 h-6 mr-3" />
                    Give us a call
                  </Button>
                </a>
              ) : (
                <Button
                  size="lg"
                  onClick={handleButtonClick}
                  className="flex items-center justify-center bg-white text-black px-8 py-5 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                  aria-label={`Show phone number`}
                >
                  <Phone className="w-6 h-6 mr-3" />
                  {showPhone ? COMPANY_INFO.CONTACT.PHONE : "Give us a call"}
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Image for small screens (displayed on top) */}
          <div className="block md:hidden w-full flex justify-center">
            <div className="rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80">
              <img
                src={typeof taxes === "string" ? taxes : taxes.src}
                alt="Retire on your terms"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-left">
            <h2
              ref={refSection2Heading}
              className={`text-2xl text-white font-bold my-4 ${
                isSection2HeadingInView ? "animate-fadeInUp" : "opacity-0"
              }`}
            >
              Retire on your terms.
            </h2>
            <p
              ref={refSection2Paragraph}
              className={`text-white mb-4 ${
                isSection2ParagraphInView ? "animate-fadeInUp" : "opacity-0"
              }`}
            >
              You want to live well when you retire—and while you’re earning it.
              Save a little each month and increase it over time.
            </p>
            {/* Call-to-Action Button */}
            <div
              ref={refSection2Button}
              className={`flex justify-start ${
                isSection2ButtonInView ? "animate-fadeInUp" : "opacity-0"
              }`}
            >
              <Link href="/">
                <Button className="flex items-center justify-center px-8 py-5 rounded-lg bg-white hover:bg-gray-300 text-black transition-colors duration-200">
                  Schedule Appointment
                </Button>
              </Link>
            </div>
          </div>

          {/* Image for medium and large screens (displayed on bottom) */}
          <div className="hidden md:flex w-full md:w-1/2 justify-center">
            <div className="rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80">
              <img
                src={typeof taxes === "string" ? taxes : taxes.src}
                alt="Retire on your terms"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
