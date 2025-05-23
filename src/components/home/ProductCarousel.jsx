import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import products from "../../data/Bici.json";
import GetDiscount from "../shared/productcards/GetDiscount";

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
      }, 3000);
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
    <div className="relative slider-container lg:px-[5%] py-[3%]">
      <Slider ref={sliderRef} {...settings}>
        {selectedProducts.map((product, index) => (
          <div key={index} className="px-[2%] py-[3%]">
            <Link to={`/prodotti/${product.id}`} className="block">
              <div className="card font-primary text-base">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover rounded-md mb-4"
                />
                <h2 className="card-title">{product.name}</h2>

                
                <div className="flex justify-between items-center py-2">
                  {product.fullprice ? (
                    <>
                      <div className="flex items-center gap-4">
                        <p className="text-gray-600 line-through">€ {product.fullprice}</p>
                        <p className="text-black text-lg">€ {product.price}</p>
                      </div>
                      <div className="flex items-center">
                        <p className="text-black text-lg">Sconto del {GetDiscount(product.fullprice, product.price)}%</p>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center">
                      <p className="text-black text-lg">€ {product.price}</p>
                    </div>
                  )}

                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
