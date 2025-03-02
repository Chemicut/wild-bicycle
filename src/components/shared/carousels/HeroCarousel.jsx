import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import banner1 from "../../../assets/images/carousels/hero/corsi.jpg";
import banner2 from "../../../assets/images/carousels/hero/rider.jpg";
import banner3 from "../../../assets/images/carousels/hero/wildracingteam.jpg";

// Importa gli stili di slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const cardsData = [
  { 
    route: "/negozio", 
    title: "Card 1", 
    image: banner1, 
    text: "Negozio" 
  },
  { 
    route: "/wildraceteam", 
    title: "Card 2", 
    image: banner2, 
    text: "Officina specializzata" 
  },
  { 
    route: "/blog", 
    title: "Card 3", 
    image: banner3, 
    text: "Wild Race Team" 
  },
  { 
    route: "/blog", 
    title: "Card 3", 
    image: banner1, 
    text: "Wild Race Team" 
  }
];

const SampleNextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ 
      ...style, 
      display: "flex", 
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%" 
    }}
    onClick={onClick}
  >
  </div>
);

const SamplePrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ 
      ...style, 
      display: "flex", 
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%" 
    }}
    onClick={onClick}
  >
  </div>
);

const HeroCarousel = () => {
  const sliderRef = useRef(null);
  const autoScrollTimeoutRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const pauseAutoScroll = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }
      autoScrollTimeoutRef.current = setTimeout(() => {
        sliderRef.current.slickPlay();
      }, 5000);
    }
  };

  const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  const settings = {
    arrows: !isTouchDevice,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipe: true,
    draggable: isTouchDevice,
    nextArrow: !isTouchDevice ? <SampleNextArrow /> : null,
    prevArrow: !isTouchDevice ? <SamplePrevArrow /> : null,
    beforeChange: pauseAutoScroll,
    afterChange: (index) => setActiveSlide(index),
    onSwipe: pauseAutoScroll
  };

  return (
    <div className="relative slider-container px-[5%] py-[3%]">
      <Slider ref={sliderRef} {...settings}>
      {cardsData.map((card, index) => (
        <div key={index} className="px-[2%] py-[3%]">
          <Link to={card.route}>
            <div className="rounded-lg shadow overflow-hidden relative">
              {card.image && (
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[40vw] max-h-[600px] object-cover"
                />
              )}
              {/* Overlay che scurisce l'immagine */}
              <div
                className={`absolute inset-0 bg-black transition-opacity duration-700 ${
                  activeSlide === index ? "opacity-50" : "opacity-0"
                }`}
              ></div>
              {/* Testo centrato */}
              <div
                className={`absolute inset-0 flex items-center justify-center text-accent font-primary transition-opacity duration-700 ${
                  activeSlide === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-2xl lg:text-4xl xl:text-6xl">{card.text}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;