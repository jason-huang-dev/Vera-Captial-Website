"use client";

import React from 'react';
import Image from 'next/image';
import {logo} from '../assets';
import MenuSvg from "./MenuSvg";

// Define the shape of a navigation item
interface NavigationItem {
  id: number;
  title: string;
  url: string;
  onlyMobile: boolean;
}

// Define the props for the Topbar component
interface TopbarProps {
  handleClick: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, url: string) => void;
  openNavigation: boolean;
  toggleNavigation: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ handleClick, openNavigation, toggleNavigation }) => {
  const navigation: NavigationItem[] = [
    { id: 1, title: 'Home', url: '#hero', onlyMobile: false },
    { id: 2, title: 'Team', url: '#team', onlyMobile: false },
    { id: 3, title: 'Services', url: '#services', onlyMobile: false },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 min-w-[380px]">
      {/* Inner container for centering and padding */}
      <div className="bg-default dark:bg-dark bg-white h-16 flex items-center justify-between px-5 lg:px-7.5 xl:px-10">
        {/* Home button on the left */}
        <a
            href="#hero"
            onClick={(e) => handleClick(e, '#hero')}
            className="font-code text-sm md:text-md uppercase lg:px-4 lg:mx-1.5 lg:leading-5 xl:px-12 transition-colors hover:underline focus:underline"
        >
            <Image src={logo} alt="Logo" width={180} height={50} className="h-10 w-auto" />
        </a>


        {/* Navigation links container */}
        <nav
          className={`${
            openNavigation ? "flex bg-default dark:bg-dark" : "hidden"
          } fixed top-16 pt-2 left-0 bg-white right-0 bottom-0 lg:static lg:flex lg:mx-auto`}
        >
          <div className="relative  z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
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
          {/* Schedule appointment button */}
          <button
            onClick={(e) => handleClick(e, '#join')}
            className="flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-800 bg-transparent border px-4 py-2 rounded-2xl hover:bg-opacity-20 transition-colors duration-200 whitespace-nowrap"
          >
            Schedule Appointment
          </button>
        </div>

        {/* Menu SVG for toggling navigation on smaller screens */}
        <MenuSvg toggleNavigation={toggleNavigation} openNavigation={openNavigation} />
      </div>
    </div>
  );
};

export default Topbar;
