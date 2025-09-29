"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CarouselNavButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  const navBtnClass =
    "p-3 text-accent hover:text-primary duration-200 bg-gray-800 hover:bg-accent transition-all rounded-full opacity-0 bg-opacity-30 group-hover:opacity-100 hover:bg-opacity-50 cursor-pointer";

  return (
    <button onClick={onClick} className={navBtnClass}>
      {children}
    </button>
  );
}

type Image = {
  src: string;
  alt: string;
};

type CarouselProps = {
  images: Image[];
};

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

  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + totalImages) % totalImages);
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % totalImages);
  };

  return (
    <div
      className="relative w-full max-w-4xl mx-auto overflow-hidden group"
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
            positionClass = "left-[25%] -translate-x-1/2";
            widthClass = "w-[300px]";
            opacityClass = "opacity-50 scale-90";
            zClass = "z-10";
          } else if (index === rightIndex) {
            positionClass = "left-[75%] -translate-x-1/2";
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
                className="object-cover w-full h-72 rounded-lg shadow-lg"
                width={1920}
                height={1080}
              />
            </a>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 flex items-center justify-between w-full px-6">
        <CarouselNavButton onClick={handlePrev}>
          <ChevronLeft strokeWidth={3} size={24} />
        </CarouselNavButton>
        <CarouselNavButton onClick={handleNext}>
          <ChevronRight strokeWidth={3} size={24} />
        </CarouselNavButton>
      </div>
    </div>
  );
}

export default Carousel;
