import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

// Componenti per pulsanti di navigazione
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-900/50 p-3 rounded-full hover:bg-gray-900"
    onClick={onClick}
  >
    ❮
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-900/50 p-3 rounded-full hover:bg-gray-900"
    onClick={onClick}
  >
    ❯
  </button>
);

const ProductCarousel = ({ products }) => {
  const [autoplay, setAutoplay] = useState(true);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: autoplay,
    autoplaySpeed: 4000, // Velocità media (modificabile)
    swipe: true, // Abilita swipe su mobile
    pauseOnHover: true,
    pauseOnDotsHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: () => setAutoplay(false), // Disattiva autoplay temporaneamente
    afterChange: () => setTimeout(() => setAutoplay(true), 5000), // Riattiva dopo 5s
  };

  return (
    <section className="w-full max-w-[80%] mx-auto py-8">
      <h2 className="text-center font-primary text-2xl md:text-3xl  mb-6">I nostri prodotti</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-2">
            <Link to={`/prodotto/${product.id}`} className="block">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-primary font-bold">{product.price} €</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProductCarousel;
