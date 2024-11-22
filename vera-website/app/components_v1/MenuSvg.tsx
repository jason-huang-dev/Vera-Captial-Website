"use client";

import React from 'react';

// Define the props for the MenuSvg component
interface MenuSvgProps {
  openNavigation: boolean;
  toggleNavigation: () => void;
}

const MenuSvg: React.FC<MenuSvgProps> = ({ openNavigation, toggleNavigation }) => {
  return (
    <button
      className="px-4 my-2 ml-auto lg:hidden hover-menu"
      onClick={toggleNavigation}
      aria-label={openNavigation ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={openNavigation}
    >
      <svg
        className="overflow-visible"
        width="20"
        height="20"
        viewBox="0 0 20 12"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <rect
          className={`transition-all origin-center menu-rect ${
            openNavigation ? 'rotate-45' : ''
          } fill-black dark:fill-white`}
          y={openNavigation ? "5" : "0"}
          width="20"
          height="2"
          rx="1"
          transform={`rotate(${openNavigation ? "45" : "0"})`}
        />
        <rect
          className={`transition-all origin-center menu-rect ${
            openNavigation ? '-rotate-45' : ''
          } fill-black dark:fill-white`}
          y={openNavigation ? "5" : "10"}
          width="20"
          height="2"
          rx="1"
          transform={`rotate(${openNavigation ? "-45" : "0"})`}
        />
      </svg>
    </button>
  );
};

export default MenuSvg;
