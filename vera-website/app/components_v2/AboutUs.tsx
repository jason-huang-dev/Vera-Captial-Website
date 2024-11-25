import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">
              Invest when you’re ready.
            </h2>
            <p className="text-gray-700 mb-4">
              Dedicate part of each paycheck to big goals, such as retirement or
              education, in accounts tailored for the long term. Feel confident
              about investing:
            </p>
            <ul className="text-blue-600 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  See 3 steps to start investing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to know when you’re ready
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How investing works
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="rounded-full overflow-hidden w-48 h-48">
              <img
                src="/path-to-image1.jpg"
                alt="Invest when you’re ready"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="rounded-full overflow-hidden w-48 h-48">
              <img
                src="/path-to-image2.jpg"
                alt="Retire on your terms"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Retire on your terms.</h2>
            <p className="text-gray-700 mb-4">
              You want to live well when you retire—and while you’re earning it.
              Save a little each month and increase it over time. Your workplace
              may offer a plan to help.
            </p>
            <a href="#" className="text-blue-600 hover:underline font-medium">
              Read 5 retirement savings strategies
            </a>
            <div className="mt-4">
              <Card className="w-64 mx-auto md:mx-0 shadow-lg">
                <CardContent>
                  <h3 className="text-lg font-bold">
                    Check your retirement readiness
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Find out if your retirement savings are on track.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Learn More →
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
