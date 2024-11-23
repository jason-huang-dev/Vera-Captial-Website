"use client";

import React from "react";
import {
  COMPANY_INFO,
  SOCIAL_MEDIA_LINKS,
  IMPORTANT_LINKS,
} from "../constants";
import {
  Facebook,
  Twitter,
  Linkedin,
  Phone,
  VoicemailIcon as Fax,
} from "lucide-react";

const FooterComponent: React.FC = () => {
  const getGoogleMapsLink = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  };

  return (
    <footer className="bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 border-b border-gray-400 dark:border-gray-700">
        {/* Address Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Office</h2>
          <address className="not-italic space-y-2">
            <p>
              <a
                href={getGoogleMapsLink(
                  `${COMPANY_INFO.ADDRESS.STREET}, ${COMPANY_INFO.ADDRESS.CITY}, ${COMPANY_INFO.ADDRESS.STATE} ${COMPANY_INFO.ADDRESS.ZIP}`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors text-base"
              >
                {COMPANY_INFO.ADDRESS.NAME}
              </a>
            </p>
            <p className="text-sm">
              {COMPANY_INFO.ADDRESS.STREET},<br />
              {COMPANY_INFO.ADDRESS.CITY}, {COMPANY_INFO.ADDRESS.STATE}{" "}
              {COMPANY_INFO.ADDRESS.ZIP}
            </p>
          </address>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <ul className="space-y-3">
            <li>
              <a
                href={`mailto:${COMPANY_INFO.CONTACT.EMAIL}`}
                className="hover:text-blue-500 transition-colors text-base"
              >
                {COMPANY_INFO.CONTACT.EMAIL}
              </a>
            </li>
            <li className="flex items-center space-x-3 text-sm">
              <Phone className="w-5 h-5" />
              <a
                href={`tel:${COMPANY_INFO.CONTACT.PHONE}`}
                className="hover:text-blue-500 transition-colors"
              >
                {COMPANY_INFO.CONTACT.PHONE}
              </a>
            </li>
            <li className="flex items-center space-x-3 text-sm">
              <Fax className="w-5 h-5" />
              <a
                href={`fax:${COMPANY_INFO.CONTACT.FAX}`}
                className="hover:text-blue-500 transition-colors"
              >
                {COMPANY_INFO.CONTACT.FAX}
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-6">
            <a
              href={SOCIAL_MEDIA_LINKS.FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href={SOCIAL_MEDIA_LINKS.TWITTER}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href={SOCIAL_MEDIA_LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-700 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-2 pb-4 flex flex-col md:flex-row justify-between items-center md:space-x-4">
        {/* Links Section */}
        <div className="flex flex-col sm:items-center md:items-start justify-center text-base space-y-2 pb-2">
          <a
            href={IMPORTANT_LINKS.FINRA_BROKERCHECK}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 underline transition-colors"
          >
            Check Our Background
          </a>
          <a
            href={IMPORTANT_LINKS.FORM_CRS}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 underline transition-colors"
          >
            CSR Form
          </a>
        </div>


        {/* Disclaimer Section */}
        <div className="mt-2 pt-2 sm:mt-0 sm:pl-8 flex-grow border-t-2 md:border-t-0 md:border-l-2 border-gray-400">
          <span className="pt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            <strong>Securities and Advisory Services Disclaimer</strong>
          </span>

          <p className="text-sm mt-2 border-t-2 border-gray-300 pt-2">
            Securities and Advisory services offered through GWN Securities, Inc., Member FINRA/SIPC, a Registered Investment Advisor. 
            11440 N. Jog Road, Palm Beach Gardens, FL 33418. (561) 472-2700. Vera Capital Management and GWN Securities, Inc. are separate companies.
          </p>
          <p className="text-sm mt-2">
            <strong>PLEASE NOTE:</strong> The information being provided is strictly as a courtesy. When you link to any of the web sites provided here, 
            you are leaving this web site. We make no representation as to the completeness or accuracy of information provided at these web sites. 
            Nor is the company liable for any direct or indirect technical or system issues or any consequences arising out of your access to or your use of 
            third-party technologies, web sites, information, and programs made available through this web site. When you access one of these web sites, 
            you are leaving our web site and assume total responsibility and risk for your use of the web sites you are linking to.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default FooterComponent;
