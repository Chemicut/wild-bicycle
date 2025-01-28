import React from "react";
import HeroCarousel from "../shared/carousels/HeroCarousel";

const HeroSection = () => {
  return (
    <section className="relative w-full z-0">
      <HeroCarousel />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-center p-6">
        <h1 className="section-title text-white">Benvenuto da Wild Bicycle</h1>
      </div>
    </section>
  );
};

export default HeroSection;
