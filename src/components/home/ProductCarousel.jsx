import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import products from "../../data/products.json";

// react-slick styles
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Arrow Components: semplificati per maggiore chiarezza
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

const ProductCarousel = ({ productIds }) => {
  const sliderRef = useRef(null);
  const autoScrollTimeoutRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const selectedProducts = products.filter(product => productIds.includes(product.id));

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

  // Disabilita le frecce su dispositivi touch
  const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  const settings = {
    arrows: !isTouchDevice,
    dots: true,
    infinite: true,
    slidesToShow: 3,
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
    onSwipe: pauseAutoScroll,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="relative slider-container px-[5%] py-[3%]">
      <Slider ref={sliderRef} {...settings}>
        {selectedProducts.map((product, index) => (
          <div key={index} className="px-[2%] py-[3%]">
            <Link to={`/prodotti/${product.id}`}>
              <div className="card font-primary">
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="w-full h-56 object-cover rounded-md mb-4"
                  />
                )}
                <h2 className="card-title">{product.name}</h2>
                <p className="card-text">€ {product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
