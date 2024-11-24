import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Avatar from "@/components/ui/Avatar"; // Import the Avatar component
import { president } from "../assets";

const AboutUs: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-8">About Vera Capital Management</h2>
        
        {/* Grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left section: About text (2/3 of the space on large screens) */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg rounded-xl border border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  At Vera Capital Management, we understand that navigating investments can be overwhelming. Our mission is to simplify the process and provide you with the tools and knowledge to achieve your financial goals. Whether expanding on the past, living in the present, or planning for the future, we`&apos;`re here to guide you every step of the way.
                </p>

                <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">What Sets Us Apart?</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We care deeply about our clients`&apos;` financial futures, and we want you to understand exactly what we`&apos;`re doing and why. In a world full of confusing options, we aim to educate you, so you can make confident decisions. We believe you should know what you own in your portfolio and why it`&apos;`s the right choice for you. Our transparent, client-first approach ensures that we`&apos;`re with you at every step.
                </p>

                <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Invest with Confidence</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Our clients believe in our system because we focus on empowering them with knowledge. We are fully transparent about our investment strategies, so you can feel confident in every decision you make.
                </p>

                {/* Divider */}
                <hr className="my-8 border-t-2 border-gray-300 dark:border-gray-700" />

                {/* Footer: CEO */}
                <div className="mt-8 text-right">
                  <p className="font-semibold text-lg text-gray-900 dark:text-white">Allan Vera</p>
                  <p className="text-gray-700 dark:text-gray-300">President, Vera Capital Management</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right section: Large oval image (1/3 of the space on large screens) */}
          <div className="lg:col-span-1">
            <Avatar
              src={president.src}
              alt="Allan Vera, President"
              width={1200}   // Numeric width in pixels
              height={1800}  // Numeric height in pixels
              borderColor="border-blue-300"
              borderWidth="border-4"
              caption="Allan Vera, President"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
