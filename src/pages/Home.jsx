import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/home/HeroSection";
import BrandCarousel from "../components/shared/carousels/BrandCarousel";
import ProductCarousel from "../components/home/ProductCarousel";
import bannerImage from "/images/banner-shop.webp";

const Home = () => {
  return (
    <main className="bg-background">
      {/* Hero section */}
      <HeroSection />

      {/* Sezione introduttiva per il negozio */}
      <section
        className="w-full md:w-[90%] lg:w-[85%] mx-auto my-4 px-4 py-8 text-center"
        aria-label="Introduzione al negozio"
      >
        <h3 className="text-secondary font-secondary text-xl lg:text-2xl xl:text-3xl">
          Dal 2013 <b className="text-primary">Wild Bicycle</b> è una realtà di Roma Nord che spazia dal ciclismo su strada fino al gravity.{" "}
          <br />
          Da anni offriamo le migliori biciclette e accessori per ciclisti di tutti i livelli.
          <br />
          Il nostro team è sempre pronto ad aiutarti con riparazioni, consigli e nuove attrezzature per soddisfare le tue necessità.
        </h3>
      </section>

      {/* Carousel dei prodotti in evidenza */}
      <section
        className="w-full md:w-[90%] lg:w-[85%] mx-auto my-4 px-4 py-8 text-center"
        aria-label="Vetrina dei prodotti"
      >
        <h3 className="text-primary font-primary text-2xl lg:text-3xl xl:text-4xl mb-4">
          Prodotti in evidenza
        </h3>
        <ProductCarousel productIds={[1, 2, 3, 4, 5, 6]} />
      </section>

      {/* Banner del catalogo con effetto parallax */}
      <section
        className="relative flex items-center justify-center w-full h-72 md:h-80 lg:h-[550px] bg-cover bg-center bg-no-repeat md:bg-fixed text-center text-white"
        style={{ backgroundImage: `url(${bannerImage})` }}
        aria-label="Banner del catalogo"
      >
        {/* Overlay per migliorare la leggibilità del testo */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Contenuto del banner */}
        <div className="relative z-10 max-w-4xl px-6">
          <h2 className="text-white font-primary text-3xl md:text-5xl lg:text-6xl">
            Scopri il nostro catalogo
          </h2>
          <h3 className="my-8 lg:my-12 pb-2 text-lg md:text-xl lg:text-2xl font-secondary">
            Una selezione di prodotti per ogni esigenza, dalla strada alla montagna.
          </h3>
          <Link to="/prodotti">
            <button className="btn btn-primary cursor-pointer">Esplora</button>
          </Link>
        </div>
      </section>

      {/* Brand Carousel */}
      <BrandCarousel />
    </main>
  );
};

export default Home;