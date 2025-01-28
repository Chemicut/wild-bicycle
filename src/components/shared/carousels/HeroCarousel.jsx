import React, { useState, useEffect } from "react";
import banner1 from "../../../assets/images/carousels/hero/corsi.jpg";
import banner2 from "../../../assets/images/carousels/hero/rider.jpg";
import banner3 from "../../../assets/images/carousels/hero/wildracingteam.jpg";

const images = [banner1, banner2, banner3];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia slide ogni 5 secondi

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[300px] md:h-[450px] lg:h-[550px] relative overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        />
      ))}
    </div>
  );
};

export default HeroCarousel;
