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
];

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "var(--color-primary)", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",alignItems: "center" , background: "var(--color-primary)", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
};

const HeroCarousel = () => {
  const sliderRef = useRef(null);
  const autoScrollTimeoutRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Funzione per sospendere l'auto-scroll dopo un'interazione dell'utente
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

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1, // Mostra una slide per volta
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => {
      pauseAutoScroll();
    },
    // Aggiorna l'indice della slide attiva ogni volta che il carousel cambia slide
    afterChange: (current) => {
      setActiveSlide(current);
    },
    onSwipe: () => {
      pauseAutoScroll();
    }    
  };

  return (
    <div className="relative slider-container px-[5%] py-[3%]">
      {/* Applichiamo un padding laterale per centrare la slide */}
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
                {/* Overlay con effetto fade in quando la slide è attiva */}
                <div className={`absolute bottom-20 w-full text-accent font-primary p-4 transition-opacity duration-700 ${activeSlide === index ? "animate-fast-fade-in" : "opacity-0"}`}>
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