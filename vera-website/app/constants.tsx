import {
  investment,
  women_planning,
  planning,
  taxes,
  accountant,
  social_security,
} from "./assets";

export const COMPANY_INFO = {
  ADDRESS: {
    NAME: "Vera Capital Management",
    STREET: "1 Mill Ridge Lane., Suite 201",
    CITY: "Chester",
    STATE: "NJ",
    ZIP: "07930",
  },
  CONTACT: {
    EMAIL: "avera@veracapitalmanagement.com",
    PHONE: "908-888-2878",
    FAX: "877-253-6960",
  },
};

export const SOCIAL_MEDIA_LINKS = {
  FACEBOOK: "https://www.facebook.com/VeraCapMngt/",
  LINKEDIN: "https://www.linkedin.com/in/allan-vera-0b9122122/",
  TWITTER: "https://x.com/VeraCapitalMgmt?lang=en",
};

export const IMPORTANT_LINKS = {
  FORM_CRS: "https://gwnsecurities.com/Content/documents/GWN_Form_CRS.pdf",
  FINRA_BROKERCHECK: "https://brokercheck.finra.org/individual/summary/5980333",
};

export const services = [
  {
    title: "Understanding Our Clients",
    description:
      "We look to spend time with our clients, first and foremost. We strive to gain a clear understanding of their goals, dreams, and current situations. From there, our advice and recommendations are tailored with investment goals, desired return objectives, risk tolerance, time horizon, and income needs.",
    image: accountant, // Add the appropriate image here
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
    image: taxes, // Add the appropriate image here
  },
  {
    title: "Social Security Maximization",
    description:
      "We help retirees understand their Social Security benefits and educate them on different strategies to maximize it. Our goal is to ensure you get the most out of your benefits, bringing you one step closer to a comfortable and secure retirement.",
    image: social_security, // Add the appropriate image here
  },
  {
    title: "Insurance Planning",
    description:
      "Insurance planning helps protect more than just your physical assets; it helps protect your retirement. We structure insurance strategies with your needs and goals in mind to help make sure you take full advantage of insurance benefits available, including long-term care assistance.",
    image: planning, // Add the appropriate image here
  },
  {
    title: "Working with Women",
    description:
      "Women are more financially empowered than ever before. We help women through transitions like career shifts, divorce, or taking care of a parent, ensuring they have a plan in place to secure their future, no matter what life throws at them.",
    image: women_planning, // Add the appropriate image here
  },
];

export const bannerCalltoAction = [
  {
    title: "Protect Your Future",
    description: `
      Secure your life and assets with our tailored insurance strategies. Through comprehensive insurance planning, we help you protect your retirement and fully leverage available benefits, including long-term care assistance. Additionally, our tax planning services aim to minimize tax burdens and establish a foundation for lasting savings through strategic advice.
    `,
    cta: "Plan Your Insurance Today",
    image: planning,
    id: "#services-insure",
  },
  {
    title: "Build Your Wealth",
    description: `
      Invest in your dreams with personalized strategies that grow with you. We begin by understanding your goals, risk tolerance, and income needs, ensuring your journey starts with a deep comprehension of your unique situation. Our investment planning offers realistic, step-by-step strategies tailored to your financial needs, with adjustments made along the way to keep you on track.
    `,
    cta: "Start Investing Now",
    image: investment,
    id: "#services-invest",
  },
  {
    title: "Retire Comfortably",
    description: `
      Maximize your benefits and enjoy a secure retirement. Our social security maximization strategies help you make the most of your benefits for a comfortable retirement. We also specialize in empowering women through life's transitions, ensuring financial security at every stage.
    `,
    cta: "Plan Your Retirement",
    image: women_planning,
    id: "#services-retire",
  },
];
