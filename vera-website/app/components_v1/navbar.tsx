"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

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
      <div className="bg-default dark:bg-dark bg-white h-16 flex items-center justify-between px-5 lg:px-7 xl:px-10">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleClick(e, "#hero")}
          className="flex-shrink-0"
        >
          <Image
            src={logo}
            alt="Logo"
            width={180}
            height={50}
            className="h-10 w-auto"
          />
        </a>

        {/* Navigation Links */}
        <nav
          className={`${
            openNavigation
              ? "flex flex-col justify-center items-center bg-default dark:bg-dark"
              : "hidden"
          } fixed top-16 pt-2 left-0 bg-white right-0 bottom-0 z-40 lg:static lg:flex lg:items-center lg:space-x-4`}
        >
          <div className="flex flex-col items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
            {/* Versions Dropdown (only on desktop) */}
            <div className="relative hidden lg:block">
              <button
                onClick={toggleVersions}
                className="flex items-center font-code text-sm uppercase transition-colors px-4 py-2"
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

            {/* Versions Links (only on mobile when menu is open) */}
            {openNavigation && (
              <div className="flex flex-col items-center space-y-4 lg:hidden">
                {versionOptions.map((option) => (
                  <a
                    key={option.href}
                    href={option.href}
                    className="font-code text-sm uppercase transition-colors px-4 py-2 hover:underline text-center"
                  >
                    {option.name}
                  </a>
                ))}
              </div>
            )}

            {/* Other Navigation Items */}
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={(e) => handleClick(e, item.url)}
                className={`font-code text-sm uppercase transition-colors ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-4 py-2 hover:underline text-center`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        {/* Schedule Appointment Button */}
        <div className="flex-shrink-0">
          <button
            onClick={(e) => handleClick(e, "#join")}
            className="flex items-center justify-center bg-transparent border px-4 ml-4 py-2 rounded-2xl hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap"
          >
            Schedule Appointment
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <MenuSvg
          toggleNavigation={toggleNavigation}
          openNavigation={openNavigation}
        />
      </div>
    </div>
  );
};

export default Topbar;
