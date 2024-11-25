import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { COMPANY_INFO } from "../constants";
import useIsMobile from "../hooks/useIsMobile";
import { accountant, taxes } from "../assets";
import Link from "next/link";

const AboutUs: React.FC = () => {
  const isMobile = useIsMobile();
  const [showPhone, setShowPhone] = useState(false);

  const handleButtonClick = () => {
    if (!isMobile) {
      setShowPhone(true);
    }
  };

  return (
    <section className="py-16 bg-blue-900/20">
      <div className="container mx-auto px-4">
        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">
              Invest when you’re ready.
            </h2>
            <p className="text-gray-700 mb-4">
              Dedicate part of each paycheck to big goals, such as retirement or
              education, in accounts tailored for the long term. Feel confident
              about investing with us
            </p>
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
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="rounded-full overflow-hidden w-48 h-48">
              <img
                src={
                  typeof accountant === "string" ? accountant : accountant.src
                }
                alt="Invest when you’re ready"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="rounded-full overflow-hidden w-48 h-48">
              <img
                src={typeof taxes === "string" ? taxes : taxes.src}
                alt="Retire on your terms"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Retire on your terms.</h2>
            <p className="text-gray-700 mb-4">
              You want to live well when you retire—and while you’re earning it.
              Save a little each month and increase it over time.
            </p>
            {/* Call-to-Action Button */}
            <div className="flex justify-center sm:justify-start">
              <Link href="/">
                <Button className="flex items-center justify-center px-4 py-4 rounded-lg bg-white hover:bg-gray-300 text-black transition-colors duration-200 whitespace-nowrap">
                  Schedule Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
