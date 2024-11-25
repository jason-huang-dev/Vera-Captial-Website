// pages/index.tsx

"use client";

import React, { useState } from "react";
import TopBar from "@/app/components_v2/navbar";
import FooterComponent from "@/app/components_v2/footer";
import CtaButton from "@/app/components_v2/CtaButton";
import Services from "@/app/components_v2/CarouselBanner";
import ContactUs from "@/app/components_v2/ContactUs";
import Hero from "@/app/components_v2/Hero";
import AboutUs from "@/app/components_v2/AboutUs";

type HandleClick = (
  e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>,
  url: string
) => void;

export default function Home() {
  const [openNavigation, setOpenNavigation] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Moved state here

  const toggleNavigation = (): void => {
    setOpenNavigation((prev) => !prev);
  };

  const handleClick: HandleClick = (e, url) => {
    e.preventDefault();
    if (openNavigation) {
      toggleNavigation();
    }

    if (url.startsWith("http")) {
      window.open(url, "_blank");
    } else if (url === "/") {
      window.history.pushState(null, "", "/");
      window.location.reload();
    } else {
      // Update the currentIndex based on the URL
      switch (url) {
        case "#services-insure":
          setCurrentIndex(0);
          break;
        case "#services-invest":
          setCurrentIndex(1);
          break;
        case "#services-retire":
          setCurrentIndex(2);
          break;
        default:
          break;
      }
      // Scroll to the Services component
      const targetSection = document.querySelector<HTMLElement>("#services");
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="bg-white">
      <TopBar
        handleClick={handleClick}
        openNavigation={openNavigation}
        toggleNavigation={toggleNavigation}
      />
      <Hero handleClick={handleClick} />
      <Services currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      <AboutUs />
      <main className="bg-white flex-grow container mx-auto px-4 py-16">
        <ContactUs />
        <CtaButton />
      </main>
      <FooterComponent />
    </div>
  );
}
