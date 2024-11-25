// components_v2/CtaButton.tsx

"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { CalendarPlus } from "lucide-react";
import useInView from "../hooks/useInView"; // Import the useInView hook

interface CtaButtonProps {
  onClick?: () => void;
}

const CtaButton: React.FC<CtaButtonProps> = ({ onClick }) => {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section
      ref={ref}
      className={`text-center py-24 transition-opacity duration-700 ease-in-out ${
        isInView ? "animate-fadeInUp" : "opacity-0"
      }`}
    >
      <h2 className="text-3xl font-bold mb-6">
        Ready to Secure Your Financial Future?
      </h2>
      <Button
        size="lg"
        className="bg-blue2 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={onClick}
      >
        <CalendarPlus className="mr-2 h-5 w-5" />
        Schedule My Complimentary Appointment
      </Button>
    </section>
  );
};

export default CtaButton;
