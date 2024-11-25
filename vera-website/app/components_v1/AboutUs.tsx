// components_v2/AboutUs.tsx

"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import useInView from "../hooks/useInView"; // Import the custom hook

const AboutUs: React.FC = () => {
  // Use the useInView hook to detect when the section is in view
  const { ref, isInView } = useInView<HTMLDivElement>({
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    <section
      ref={ref}
      className={`my-8 py-16 bg-gray-50 dark:bg-gray-800 rounded-lg transition-opacity duration-700 ease-in-out ${
        isInView ? "animate-fadeInUp" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Welcome</h3>
            <p>
              What sets us apart from the countless advisors you could work
              with? We not only care that our clients are set on a path towards
              financial freedom but that they understand what we are doing
              during the process and why. In this day and age, where we are
              over-saturated with information and options, making decisions can
              be overwhelmingly confusing. At Vera Capital Management, our
              mission is to educate investors and help guide them to make smart
              investment decisions.
            </p>
            <div className="mt-8 text-right">
              <p className="font-semibold">Allan Vera</p>
              <p>President, Vera Capital Management</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutUs;
