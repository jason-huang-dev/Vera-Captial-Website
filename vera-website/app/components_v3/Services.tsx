import React from "react";
import Image from "next/image";  // Import Next.js Image component
import { investment } from "../assets"; // Ensure the path to the asset is correct

const ServicesSection = () => {
  const services = [
    {
      title: "Understanding Our Clients",
      description:
        "We look to spend time with our clients, first and foremost. We strive to gain a clear understanding of their goals, dreams, and current situations. From there, our advice and recommendations are tailored with investment goals, desired return objectives, risk tolerance, time horizon, and income needs.",
      image: investment, // Add the appropriate image here
    },
    {
      title: "Investment Planning",
      description:
        "Our goal is to come up with a realistic investment plan tailored to your financial needs. Our main objective is to be by your side at every step of this plan. Together we will work to stay in line and make any adjustments along the way. Vera Capital Management can help create a strategy after analyzing your big picture.",
      image: investment, // Add the appropriate image here
    },
    {
      title: "Tax Planning",
      description:
        "Our clients can receive proactive tax advice through strategic alliances we have built. We help focus on tax reduction strategies based on income, expenses, individual needs, and goals. Proactive planning allows our clients the opportunity to minimize tax burdens and build a solid foundation of tax reduction strategies that can result in years of tax savings.",
      image: investment, // Add the appropriate image here
    },
    {
      title: "Social Security Maximization",
      description:
        "We help retirees understand their Social Security benefits and educate them on different strategies to maximize it. Our goal is to ensure you get the most out of your benefits, bringing you one step closer to a comfortable and secure retirement.",
      image: investment, // Add the appropriate image here
    },
    {
      title: "Insurance Planning",
      description:
        "Insurance planning helps protect more than just your physical assets; it helps protect your retirement. We structure insurance strategies with your needs and goals in mind to help make sure you take full advantage of insurance benefits available, including long-term care assistance.",
      image: investment, // Add the appropriate image here
    },
    {
      title: "Working with Women",
      description:
        "Women are more financially empowered than ever before. We help women through transitions like career shifts, divorce, or taking care of a parent, ensuring they have a plan in place to secure their future, no matter what life throws at them.",
      image: investment, // Add the appropriate image here
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group h-96 rounded-lg overflow-hidden shadow-lg"
            >
              {/* Background Image using Next.js Image component */}
              <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-70">
                <Image
                  src={typeof service.image === "string" ? service.image : service.image.src}  // Handle image source
                  alt={service.title}
                  layout="fill"  // Use fill to make it cover the div
                  objectFit="cover"  // Ensure the image covers the area
                  className="object-cover"
                />
              </div>
              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 opacity-0 transition-opacity duration-300 group-hover:opacity-70">
                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                <p className="text-sm text-gray-300 mt-2 px-3">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
