import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

// react-slick styles
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// images import
import banner1 from "/images/shop.webp";
import banner2 from "/images/officina.webp";
import banner3 from "/images/wildraceteam.webp";
import banner4 from "/images/corsi.webp";

const cardsData = [
  { 
    route: "/negozio", 
    title: "Card 1", 
    image: banner1, 
    text: (
      <>
        Biciclette, <br />
        abbigliamento tecnico <br />
        ed accessori
      </>
    )
  },
  { 
    route: "/officina", 
    title: "Card 2", 
    image: banner2, 
    text: "Officina specializzata" 
  },
  { 
    route: "/wildraceteam", 
    title: "Card 3", 
    image: banner3, 
    text: "Wild Race Team" 
  },
  { 
    route: "/wildraceteam#corso-enduro", 
    title: "Card 4", 
    image: banner4, 
    text: "Corsi di Enduro" 
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
  />
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
  />
);

const HeroCarousel = () => {
  const sliderRef = useRef(null);
  const autoScrollTimeoutRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [initialSlideLoaded, setInitialSlideLoaded] = useState(false);

  // Pausa e riprende l'auto-scroll in caso di interazione (swipe, click)
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

  // Impostiamo autoplay: false inizialmente; successivamente lo avvieremo manualmente quando l'immagine sia caricata.
  const settings = {
    arrows: !isTouchDevice,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2250,
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
                    // Carica la prima slide in modo eager, le altre lazy
                    loading={index === 0 ? "eager" : "lazy"}
                    // Se la slide attiva non è ancora stata caricata, gestiamo l'onLoad
                    onLoad={() => {
                      if (!initialSlideLoaded && activeSlide === index) {
                        setInitialSlideLoaded(true);
                        if (sliderRef.current) {
                          sliderRef.current.slickPlay();
                        }
                      }
                    }}
                    className="w-full h-[50vw] md:h-[40vw] max-h-[600px] object-cover"
                  />
                )}
                <div
                  className={`absolute inset-0 bg-black transition-opacity duration-700 ${
                    activeSlide === index ? "opacity-60" : "opacity-0"
                  }`}
                />
                <div
                  className={`absolute inset-0 flex items-center justify-center text-accent font-primary transition-opacity duration-700 ${
                    activeSlide === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-center text-2xl lg:text-4xl xl:text-6xl">{card.text}</p>
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