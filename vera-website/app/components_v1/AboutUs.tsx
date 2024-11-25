import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs: React.FC = () => {
  return (
    <section className="my-8 py-16 bg-gray-50 dark:bg-gray-800 rounded-lg">
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
