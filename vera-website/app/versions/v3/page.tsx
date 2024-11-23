"use client"
import FooterComponent from "@/app/components_v3/footer";
import BannerComponent from "@/app/components_v3/Banner";
import Topbar from "@/app/components_v3/navbar";
import AboutUs from "@/app/components_v3/AboutUs";
import {logo, background} from "@/app/assets";
import React, { useState } from "react";

type HandleClick = (
  e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>,
  url: string
) => void;

export default function V3() {
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
    <div>
      <Topbar
        handleClick={handleClick}
        openNavigation={openNavigation}
        toggleNavigation={toggleNavigation}
      />

      <BannerComponent
        backgroundImage={background}
        logoImage={logo}
      />
      <AboutUs/>


      <FooterComponent />
    </div>
  );
}
