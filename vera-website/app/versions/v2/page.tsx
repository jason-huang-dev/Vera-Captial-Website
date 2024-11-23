"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import TopBar from "@/app/components_v2/navbar";
import FooterComponent from "@/app/components_v2/footer";
import HeroVideo from "@/app/components_v2/HeroVideo";
import CtaButton from "@/app/components_v2/CtaButton";

import Services from "@/app/components_v2/Services";
import ContactUs from "@/app/components_v2/ContactUs";
// import AboutUs from "./components_v1/AboutUs";

type HandleClick = (
  e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>,
  url: string
) => void;

export default function Home() {
  // Define the state with explicit type annotation
  const [openNavigation, setOpenNavigation] = useState<boolean>(false);

  // Toggle the navigation menu
  const toggleNavigation = (): void => {
    setOpenNavigation((prev) => !prev);
  };

  // Handle link clicks with smooth scrolling and page refresh for Home
  const handleClick: HandleClick = (e, url) => {
    e.preventDefault();
    if (openNavigation) {
      toggleNavigation();
    }

    // Check if the URL is external
    if (url.startsWith("http")) {
      window.open(url, "_blank"); // Open the external link in a new tab
    } else if (url === "/") {
      window.history.pushState(null, "", "/");
      window.location.reload(); // Refresh the page
    } else {
      // Select target section and scroll smoothly
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

      <main className="bg-white flex-grow container mx-auto px-4 py-16">
        <HeroVideo />
        {/*   <AboutUs />*/}
        <Services />
        <ContactUs />
        <CtaButton /> 
      </main>
      <FooterComponent />
    </div>
  );
}
