"use client";
import React, { useState } from "react";
import TopBar from "./components_v1/navbar";
import FooterComponent from "./components_v1/footer";
import HeroImageWithReviews from "./components_v1/HeroImageWithReviews";
import Services from "./components_v1/Services";
import CtaButton from "./components_v1/CtaButton";
import ContactUs from "./components_v1/ContactUs";
import AboutUs from "./components_v1/AboutUs";
import { background2 } from "./assets";

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

  const backgroundStyle = {
    backgroundImage: `
      linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),
      url(${background2.src})
    `,
    backgroundSize: "cover",  // Ensures the background image covers the entire div
    backgroundPosition: "center", // Centers the image
    backgroundRepeat: "no-repeat", // Prevents repetition
  };
  

  return (
    <div 
      className="bg-white"
      style={backgroundStyle}
    >
      <TopBar
        handleClick={handleClick}
        openNavigation={openNavigation}
        toggleNavigation={toggleNavigation}
      />

      <main className="flex-grow container mx-auto px-4 py-16">
        <HeroImageWithReviews />
        <Services />
        <AboutUs />
        <ContactUs />
        <CtaButton />
      </main>
      <FooterComponent />
    </div>
  );
}
