import { StaticImageData } from "next/image";

interface BannerProps {
  backgroundImage: string | StaticImageData; // Accept both types
  logoImage: string | StaticImageData; // Accept both types
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function BannerComponent({
  backgroundImage,
  logoImage,
  title,
  subtitle,
  className,
}: BannerProps) {
  const backgroundStyle = {
    backgroundImage: `
      linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),
      url(${typeof backgroundImage === "string" ? backgroundImage : backgroundImage.src})
    `,
  };

  return (
    <div
      className={`relative w-full h-96 flex items-center justify-center text-center bg-cover bg-center ${className}`}
      style={backgroundStyle}
    >
      {/* Overlay */}
      <div className="absolute inset-0"></div>

      {/* Logo */}
      <div className="relative z-10 flex flex-col items-center">
        <img
          src={typeof logoImage === "string" ? logoImage : logoImage.src}
          alt="Company Logo"
          className="w-96 h-96 md:w-140 md:h-140 object-contain animate-fadeIn_2"
        />
        {title && <h1 className="mt-4 text-2xl md:text-4xl font-bold text-white">{title}</h1>}
        {subtitle && <p className="mt-2 text-lg text-gray-300">{subtitle}</p>}
      </div>
    </div>
  );
}
