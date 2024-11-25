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
      // Open external links in a new tab
      window.open(url, "_blank");
    } else if (url === "/") {
      // Navigate to the root path and reload
      window.history.pushState(null, "", "/");
      window.location.reload();
    } else if (url.startsWith("#")) {
      // Handle internal hash links
      if (url === "#services-insure") {
        setCurrentIndex(0);
        const targetSection = document.querySelector<HTMLElement>("#services");
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      } else if (url === "#services-invest") {
        setCurrentIndex(1);
        const targetSection = document.querySelector<HTMLElement>("#services");
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      } else if (url === "#services-retire") {
        setCurrentIndex(2);
        const targetSection = document.querySelector<HTMLElement>("#services");
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // For other hash links like #hero, #services, #contactus
        const targetSection = document.querySelector<HTMLElement>(url);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // For any other cases, you might want to handle them here
      console.warn(`Unhandled URL: ${url}`);
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
