import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/home/HeroSection";
import BrandCarousel from "../components/shared/carousels/BrandCarousel";
import homeImage from "../assets/images/home.jpg";
import bannerImage from "../assets/images/banner-shop.jpg";

const Home = () => {
  return (
    <main>
      <HeroSection />

      {/* Sezione introduttiva del negozio */}
      <section className="container-padding flex flex-col md:flex-row-reverse items-center gap-8 md:justify-center bg-background">
        <div className="w-full md:w-2/5 lg:w-3/5 text-center md:text-left">
          <p className="mt-4 text-secondary text-lg md:text-xl lg:text-2xl">
            <b className="text-primary">Wild Bicycle</b> è una realtà di Roma Nord che spazia dal ciclismo su strada fino al gravity.
            Da anni offriamo le migliori biciclette e accessori per ciclisti di tutti i livelli. <br className="block md:hidden" />
            <br className="hidden md:block" />
            Il nostro team è sempre pronto ad aiutarti con riparazioni, consigli e nuove attrezzature
            per soddisfare le tue necessità.
          </p>
        </div>
        <div className="w-full md:w-1/3 lg:w-2/5 flex justify-center md:justify-end px-12">
          <img 
            src={homeImage}
            alt="Wild Bicycle" 
            className="w-64 max-w-xs md:max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Carosello dei Brand */}
      <BrandCarousel />

      {/* Banner per le Bici in Vendita con Effetto Parallax */}
      <section
        className="relative w-full h-64 md:h-80 lg:h-[550px] flex items-center justify-center text-center text-white bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        {/* Overlay per migliorare la leggibilità del testo */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Contenuto del banner */}
        <div className="relative z-10 max-w-2xl px-6">
          <h2 className="section-title text-white">Scopri le nostre biciclette in vendita</h2>
          <p className="mt-4 text-lg md:text-xl">
            Una selezione di bici per ogni esigenza, dalla strada alla montagna.
          </p>
          <Link to="/negozio">
            <button className="btn-primary">Esplora le Bici</button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
