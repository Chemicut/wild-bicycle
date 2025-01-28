import React, { useEffect, useRef } from "react";
import brand1 from "../../../assets/images/brands/lapierre.svg";
import brand2 from "../../../assets/images/brands/transition.svg";
import brand3 from "../../../assets/images/brands/ktm.svg";
import brand4 from "../../../assets/images/brands/bhbikes.svg";
import brand5 from "../../../assets/images/brands/factor.svg";
import brand6 from "../../../assets/images/brands/flyer.svg";
import brand7 from "../../../assets/images/brands/argon18.svg";
import brand8 from "../../../assets/images/brands/ridley.svg";
import brand9 from "../../../assets/images/brands/camelbak.svg";
import brand10 from "../../../assets/images/brands/gaerne.svg";
import brand11 from "../../../assets/images/brands/dainese.svg";
import brand12 from "../../../assets/images/brands/bell.svg";
import brand13 from "../../../assets/images/brands/bryton.svg";

const brands = [brand1, brand2, brand3, brand4, brand5, brand6, 
                brand7, brand8, brand9, brand10, brand11, brand12,
                brand13];

const BrandCarousel = () => {
  const carouselRef = useRef(null);
  const speed = 0.5; // Velocità dello scorrimento (più basso = più lento)

  useEffect(() => {
    let position = 0;
    let requestId;

    const animate = () => {
      if (carouselRef.current) {
        position -= speed;
        if (position <= -carouselRef.current.scrollWidth / 2) {
          position = 0; // Reset senza interruzioni visibili
        }
        carouselRef.current.style.transform = `translateX(${position}px)`;
      }
      requestId = requestAnimationFrame(animate);
    };

    requestId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestId);
  }, []);

  return (
    <div className="overflow-hidden w-full py-6 relative bg-background">
      <div ref={carouselRef} className="flex items-center gap-6 whitespace-nowrap">
        {[...brands, ...brands].map((brand, index) => (
          <img
            key={index}
            src={brand}
            alt={`Brand ${index + 1}`}
            className="h-16 md:h-20 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default BrandCarousel;
