// FooterComponent.tsx

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
import DisclaimerCollapsible from "./DisclaimerCollapsible";

const FooterComponent: React.FC = () => {
  // Function to construct Google Maps URL
  const getGoogleMapsLink = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 pb-10">
      {/* Legal Section */}
      <div className="flex mb-4 justify-center items-center bg-gray-300">
        <div className="flex justify-center items-center w-full gap-4">
          <a
            href={IMPORTANT_LINKS.FINRA_BROKERCHECK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Check Background of Vera on FINRA BrokerCheck"
            className="hover:underline"
          >
            Check Background of Vera
          </a>
          <p>|</p>
          <a
            href={IMPORTANT_LINKS.FORM_CRS}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CSR Form"
            className="hover:underline"
          >
            CSR Form
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-4 grid grid-cols-1 md:grid-cols-3 pt-1 gap-8">
        {/* Address Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Address</h2>
          <p className="mb-2">
            <a
              href={getGoogleMapsLink(
                `${COMPANY_INFO.ADDRESS.STREET}, ${COMPANY_INFO.ADDRESS.CITY}, ${COMPANY_INFO.ADDRESS.STATE} ${COMPANY_INFO.ADDRESS.ZIP}`
              )}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${COMPANY_INFO.ADDRESS.STREET}, ${COMPANY_INFO.ADDRESS.CITY} on Google Maps`}
              className="hover:underline"
            >
              {COMPANY_INFO.ADDRESS.NAME}
            </a>
          </p>
          <p className="mb-2">
            <a
              href={getGoogleMapsLink(
                `${COMPANY_INFO.ADDRESS.STREET}, ${COMPANY_INFO.ADDRESS.CITY}, ${COMPANY_INFO.ADDRESS.STATE} ${COMPANY_INFO.ADDRESS.ZIP}`
              )}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${COMPANY_INFO.ADDRESS.STREET}, ${COMPANY_INFO.ADDRESS.CITY} on Google Maps`}
              className="hover:underline"
            >
              {COMPANY_INFO.ADDRESS.STREET}
            </a>
          </p>
          <p>
            <a
              href={getGoogleMapsLink(
                `${COMPANY_INFO.ADDRESS.CITY}, ${COMPANY_INFO.ADDRESS.STATE} ${COMPANY_INFO.ADDRESS.ZIP}`
              )}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${COMPANY_INFO.ADDRESS.CITY}, ${COMPANY_INFO.ADDRESS.STATE} on Google Maps`}
              className="hover:underline"
            >
              {COMPANY_INFO.ADDRESS.CITY}, {COMPANY_INFO.ADDRESS.STATE}{" "}
              {COMPANY_INFO.ADDRESS.ZIP}
            </a>
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <p className="mb-2">
            <a
              href={`mailto:${COMPANY_INFO.CONTACT.EMAIL}`}
              className="hover:underline"
              aria-label={`Send an email to ${COMPANY_INFO.CONTACT.EMAIL}`}
            >
              {COMPANY_INFO.CONTACT.EMAIL}
            </a>
          </p>
          <div className="flex items-center space-x-4 mb-2">
            <Phone className="w-5 h-5" />
            <a
              href={`tel:${COMPANY_INFO.CONTACT.PHONE}`}
              className="hover:underline"
              aria-label={`Call ${COMPANY_INFO.CONTACT.PHONE}`}
            >
              {COMPANY_INFO.CONTACT.PHONE}
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Fax className="w-5 h-5" />
            <a
              href={`fax:${COMPANY_INFO.CONTACT.FAX}`}
              className="hover:underline"
              aria-label={`Fax to ${COMPANY_INFO.CONTACT.FAX}`}
            >
              {COMPANY_INFO.CONTACT.FAX}
            </a>
          </div>
        </div>

        {/* Follow Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow</h2>
          <div className="flex items-center space-x-4">
            <a
              href={SOCIAL_MEDIA_LINKS.FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="hover:text-blue-600 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href={SOCIAL_MEDIA_LINKS.TWITTER}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Twitter"
              className="hover:text-blue-400 transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href={SOCIAL_MEDIA_LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on LinkedIn"
              className="hover:text-blue-700 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="mt-8 mx-4 md:px-20">
        <DisclaimerCollapsible />
      </div>
    </footer>
  );
};

export default FooterComponent;
