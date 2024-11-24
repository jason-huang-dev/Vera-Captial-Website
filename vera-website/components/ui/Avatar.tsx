import React from "react";
import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  width?: number;  // Numeric width in pixels
  height?: number; // Numeric height in pixels
  borderColor?: string; // Optional border color
  borderWidth?: string; // Optional border width
  caption?: string; // Optional caption text
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  width = 192, // Default width in pixels
  height = 192, // Default height in pixels
  borderColor = "border-gray-300", // Default border color
  borderWidth = "border-4", // Default border width
  caption, // Optional caption prop
}) => {
  return (
    <figure className="text-center">
      <div
        className={`relative rounded-full m-auto 
          w-[${width}px] h-[${height}px] 
          sm:w-[300px] sm:h-[300px] lg:w-[450px] lg:h-[450px]`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}  // Use numeric value
          height={height}  // Use numeric value
          className={`object-cover rounded-full ${borderWidth} ${borderColor}`}
        />
      </div>
      {caption && <figcaption className="mt-2 text-xl font-lora italic text-gray-800 dark:text-gray-300">{caption}</figcaption>}
    </figure>
  );
};

export default Avatar;
