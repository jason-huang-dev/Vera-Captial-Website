// components/HeroImageWithReviews.jsx
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { COMPANY_INFO } from "../constants";
import useIsMobile from "../hooks/useIsMobile";
import { logo } from "../assets";
import Image from "next/image";

export default function HeroImageWithReviews() {
  const isMobile = useIsMobile();
  const [showPhone, setShowPhone] = useState(false);

  const handleButtonClick = () => {
    if (!isMobile) {
      setShowPhone(true);
    }
  };

  return (
    <section id="hero">
      {/* Hero */}
      <div className="container py-24 lg:py-32">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          {/* Col */}
          <div className="relative ms-4">
            <Image
              src={logo}
              alt="background"
              width={900}
              height={800}
              className="w-full rounded-md"
            />
          </div>

          <div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Plan Today for a Comfortable Tomorrow
            </h1>
            <p className="mt-3 text-xl text-grey">
              Partner with Vera Capital Management to build a prosperous and
              worry-free retirement.
            </p>
            {/* Buttons */}
            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              {/* Schedule Appointment Button */}
              <Link href="/" passHref>
                <Button
                  className="bg-blue2 text-white p-4 rounded-lg"
                  size="lg"
                >
                  Schedule Appointment
                </Button>
              </Link>

              {/* Phone Button */}
              {isMobile ? (
                <a
                  href={`tel:${COMPANY_INFO.CONTACT.PHONE}`}
                  aria-label={`Call ${COMPANY_INFO.CONTACT.PHONE}`}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white flex items-center  transition-colors duration-200"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Give us a call
                  </Button>
                </a>
              ) : (
                <Button
                  size="lg"
                  onClick={handleButtonClick}
                  className="flex items-center bg-white text-black transition-colors duration-200 hover:bg-slate-400"
                  aria-label={`Show phone number`}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {showPhone ? COMPANY_INFO.CONTACT.PHONE : "Give us a call"}
                </Button>
              )}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}
    </section>
  );
}
