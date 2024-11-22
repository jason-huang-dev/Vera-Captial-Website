"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Updated import
import { logo } from "../assets";
import MenuSvg from "./MenuSvg";
import { ChevronDown } from "lucide-react";

interface NavigationItem {
  id: number;
  title: string;
  url: string;
  onlyMobile: boolean;
}

interface TopbarProps {
  handleClick: (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    url: string
  ) => void;
  openNavigation: boolean;
  toggleNavigation: () => void;
}

const Topbar: React.FC<TopbarProps> = ({
  handleClick,
  openNavigation,
  toggleNavigation,
}) => {
  const [versionsOpen, setVersionsOpen] = useState(false);
  const pathname = usePathname(); // Using usePathname instead of useRouter

  const navigation: NavigationItem[] = [
    { id: 1, title: "Home", url: "#hero", onlyMobile: false },
    { id: 2, title: "Services", url: "#services", onlyMobile: false },
    { id: 3, title: "Contact us", url: "#contact", onlyMobile: false },
    { id: 4, title: "Team", url: "/team", onlyMobile: false },
    { id: 5, title: "Log in", url: "/login", onlyMobile: false },
  ];

  const versionOptions = [
    { name: "Version1", href: "/" },
    { name: "Version2", href: "/versions/v2" },
    { name: "Version3", href: "/versions/v3" },
  ];

  const toggleVersions = () => {
    setVersionsOpen(!versionsOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 min-w-[380px]">
      <div className="bg-default dark:bg-dark bg-white h-16 flex items-center justify-between px-5 lg:px-7.5 xl:px-10">
        <a
          href="#hero"
          onClick={(e) => handleClick(e, "#hero")}
          className="font-code text-sm md:text-md uppercase lg:px-4 lg:mx-1.5 lg:leading-5 xl:px-12 transition-colors hover:underline focus:underline"
        >
          <Image
            src={logo}
            alt="Logo"
            width={180}
            height={50}
            className="h-10 w-auto"
          />
        </a>

        <nav
          className={`${
            openNavigation ? "flex bg-default dark:bg-dark" : "hidden"
          } fixed top-16 pt-2 left-0 bg-white right-0 bottom-0 lg:static lg:flex lg:mx-auto`}
        >
          <div className="relative">
            <button
              onClick={toggleVersions}
              className="flex items-center font-code text-md lg:text-sm uppercase transition-colors px-6 py-6 md:py-8 lg:py-2.5 lg:px-4 lg:mx-1.5 lg:leading-5 xl:px-12"
            >
              Versions <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {versionsOpen && (
              <div className="absolute top-full left-0 bg-white dark:bg-gray-800 shadow-md rounded-md py-2 mt-1">
                {versionOptions.map((option) => (
                  <a
                    key={option.href}
                    href={option.href}
                    className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                      pathname === option.href ? "bg-gray-200" : ""
                    }`}
                  >
                    {option.name}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={(e) => handleClick(e, item.url)}
                className={`block relative font-code text-md lg:text-sm uppercase transition-colors ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:py-2.5 lg:px-4 lg:mx-1.5 lg:leading-5 xl:px-12 ${
                  openNavigation ? "hover:underline focus:underline" : ""
                }`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        <div className="flex space-x-4 px-2">
          <button
            onClick={(e) => handleClick(e, "#join")}
            className="flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-800 bg-transparent border px-4 py-2 rounded-2xl hover:bg-opacity-20 transition-colors duration-200 whitespace-nowrap"
          >
            Schedule Appointment
          </button>
        </div>

        <MenuSvg
          toggleNavigation={toggleNavigation}
          openNavigation={openNavigation}
        />
      </div>
    </div>
  );
};

export default Topbar;
