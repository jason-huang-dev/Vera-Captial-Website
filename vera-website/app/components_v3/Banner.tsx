import { StaticImageData } from "next/image";
import Image from "next/image";

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
        <div className="w-4/5 h-4/5 md:w-1/2 md:h-1/2">
          <Image
            src={logoImage}
            alt="Company Logo"
            layout="intrinsic"
            objectFit="cover"
            className="animate-fadeIn_2"
          />
        </div>
        {title && <h1 className="mt-4 text-2xl md:text-4xl font-bold text-white">{title}</h1>}
        {subtitle && <p className="mt-2 text-lg text-gray-300">{subtitle}</p>}
      </div>
    </div>
  );
}
