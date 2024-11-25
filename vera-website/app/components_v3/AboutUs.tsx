import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Avatar from "@/components/ui/Avatar"; // Import the Avatar component
import { president } from "../assets";

const AboutUs: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left section: About text (2/3 of the space on large screens) */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg rounded-xl font-lora italic border border-gray-200 dark:border-gray-700 bg-orange-50">
              <CardContent className="p-6">
                <h3 className="text-3xl font-lora italic text-center text-gray-900 dark:text-white mb-4">
                  Welcome
                </h3>

                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mx-4">
                  Welcome to Vera Capital Management where we take a holistic approach to investing with our clients. 
                  Our process is not complicated, it’s not out of the ordinary and it’s not confusing. 
                  In fact, it’s based on one simple idea: the belief that your advisor should be there for you. 
                  Whether it is expanding on the past, living in the present, or thinking about the future, 
                  we will provide you with the latest tools and essential knowledge to help achieve your financial goals.
                  <br/><br/>
                  What sets us apart from the countless advisors you could work with? We not only care that our clients are set on a path towards financial freedom but that they understand what we are doing during the process and why. In this day and age, where we are over-saturated with information and options, making decisions can be overwhelmingly confusing. At Vera Capital Management, our mission is to educate investors and help guide them to make smart investment decisions. We believe you should have the ability to know what you own in your portfolio and why. We question the norm and will explain why we think this is the right choice for you. We are fully transparent with what we do and will be there with you every step of the way.
                  <br/><br/>
                  This is why Vera Capital Management is here; this is why Vera Capital Management is different. Our investors believe in our system, and that is in investing with knowledge.
                </p>

                {/* Divider */}
                <hr className="my-8 border-t-2 border-gray-300 dark:border-gray-700" />

                {/* Footer: CEO */}
                <div className="mt-8 text-right">
                  <p className="font-semibold text-2xl text-gray-900 dark:text-white">
                    Allan Vera
                  </p>
                  <p className="text-xl text-gray-700 dark:text-gray-300">
                    President, Vera Capital Management
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right section: Large oval image (1/3 of the space on large screens) */}
          <div className="lg:col-span-1">
            <Avatar
              src={president.src}
              alt="Allan Vera, President"
              width={1200} // Numeric width in pixels
              height={1800} // Numeric height in pixels
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
