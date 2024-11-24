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
        className={`relative ${borderWidth} ${borderColor} rounded-full w-${width} h-${height} m-auto`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}  // Use numeric value
          height={height}  // Use numeric value
          className="object-cover rounded-full"
        />
      </div>
      {caption && <figcaption className="mt-2 text-lg text-gray-800 dark:text-gray-300">{caption}</figcaption>}
    </figure>
  );
};

export default Avatar;
