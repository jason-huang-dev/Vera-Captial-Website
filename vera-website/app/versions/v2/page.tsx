"use client";

import React, { useState } from "react";
import TopBar from "@/app/components_v2/navbar";
import FooterComponent from "@/app/components_v2/footer";
import CtaButton from "@/app/components_v2/CtaButton";

import Services from "@/app/components_v2/Services";
import ContactUs from "@/app/components_v2/ContactUs";
import Hero from "@/app/components_v2/Hero";
import CarouselBanner from "@/app/components_v2/CarouselBanner";

type HandleClick = (
  e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>,
  url: string
) => void;

export default function Home() {
  const [openNavigation, setOpenNavigation] = useState<boolean>(false);

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
      const targetSection = document.querySelector<HTMLElement>(url);
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
      <Hero
        handleClick={handleClick}
        openNavigation={openNavigation}
        toggleNavigation={toggleNavigation}
      />
      <CarouselBanner />
      <main className="bg-white flex-grow container mx-auto px-4 py-16">
        {/* <AboutUs /> */}
        <Services />
        <ContactUs />
        <CtaButton />
      </main>
      <FooterComponent />
    </div>
  );
}
