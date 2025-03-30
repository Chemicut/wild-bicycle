import React, { useEffect, useRef } from "react";
import brand1 from "/images/brands/lapierre.svg";
import brand2 from "/images/brands/transition.svg";
import brand3 from "/images/brands/ktm.svg";
import brand4 from "/images/brands/bhbikes.svg";
import brand5 from "/images/brands/factor.svg";
import brand6 from "/images/brands/flyer.svg";
import brand7 from "/images/brands/argon18.svg";
import brand8 from "/images/brands/ridley.svg";
import brand9 from "/images/brands/leatt.svg";
import brand10 from "/images/brands/dainese.svg";
import brand11 from "/images/brands/gaerne.svg";
import brand12 from "/images/brands/camelbak.svg";
import brand13 from "/images/brands/bryton.svg";

const brands = [brand1, brand2, brand3, brand4, brand5, brand6, 
                brand7, brand8, brand9, brand10, brand11, brand12,
                brand13];

const BrandCarousel = () => {
  const carouselRef = useRef(null);
  const speed = 0.5;

  useEffect(() => {
    let position = 0;
    let requestId;

    const animate = () => {
      if (carouselRef.current) {
        position -= speed;
        if (position <= -carouselRef.current.scrollWidth / 2) {
          position = 0;
        }
        carouselRef.current.style.transform = `translateX(${position}px)`;
      }
      requestId = requestAnimationFrame(animate);
    };

    requestId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestId);
  }, []);

  return (
    <div className="overflow-hidden w-full py-2 relative bg-background">
      <div ref={carouselRef} className="flex items-center gap-6 whitespace-nowrap">
        {[...brands, ...brands].map((brand, index) => (
          <img
            key={index}
            src={brand}
            alt={`Brand ${index + 1}`}
            className="h-16 md:h-20 lg:h-24 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default BrandCarousel;
