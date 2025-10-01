"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
import Image from "next/image";

type ImageType = {
  src: string;
  alt: string;
};

type CarouselProps = {
  images: ImageType[];
};

// TODO:
// add details for selected room [fill both sides],
// make carousel linear angles, add bg-transparent for nav dots
// and place them inside slide, then add nav buttons [around dots]

function Carousel({ images }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const totalImages = images.length;

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalImages);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalImages, isHovered]);

  return (
    <div
      className="relative w-[80%] mx-auto overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Slides */}
      <div className="relative flex items-center justify-center h-96">
        {images.map((image, index) => {
          const leftIndex = (activeIndex - 1 + totalImages) % totalImages;
          const rightIndex = (activeIndex + 1) % totalImages;

          let positionClass = "";
          let widthClass = "";
          let opacityClass = "";
          let zClass = "";

          if (index === activeIndex) {
            positionClass = "left-1/2 -translate-x-1/2";
            widthClass = "w-[500px]";
            opacityClass = "opacity-100 scale-100";
            zClass = "z-20";
          } else if (index === leftIndex) {
            positionClass = "left-[35%] -translate-x-1/2";
            widthClass = "w-[300px]";
            opacityClass = "opacity-50 scale-90";
            zClass = "z-10";
          } else if (index === rightIndex) {
            positionClass = "left-[65%] -translate-x-1/2";
            widthClass = "w-[300px]";
            opacityClass = "opacity-50 scale-90";
            zClass = "z-10";
          } else {
            positionClass = "left-1/2 -translate-x-1/2";
            widthClass = "w-[300px]";
            opacityClass = "opacity-0 scale-75 pointer-events-none";
            zClass = "z-0";
          }

          return (
            <a
              href={image.alt}
              key={index}
              className={clsx(
                "absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out",
                positionClass,
                widthClass,
                opacityClass,
                zClass
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-72 rounded-lg shadow-lg select-none"
                width={1920}
                height={1080}
              />
            </a>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={clsx(
              "w-4 h-4 border-accent border-2 rounded-full transition-all duration-200 cursor-pointer",
              index === activeIndex ? "bg-accent" : "bg-primary hover:bg-accent"
            )}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
