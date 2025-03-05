import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/home/HeroSection";
import BrandCarousel from "../components/shared/carousels/BrandCarousel";
import bannerImage from "../assets/images/banner-shop.jpg";
import ProductCarousel from "../components/shared/carousels/ProductCarousel";
import { fetchProductsByIds } from "../services/api"; // Funzione che recupera i prodotti dal DB


const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const selectedIds = ["id1", "id2", "id3", "id4", "id5", "id6", "id7", "id8"];
    fetchProductsByIds(selectedIds).then(setProducts);
  }, []);
  
  return (
    <main className="bg-background">
      <HeroSection />

      {/* Sezione introduttiva del negozio */}
        <div className="w-full md:w-[90%] lg:w-[85%] mx-auto text-center my-4 px-4 py-8">
          <h3 className="text-secondary font-secondary text-xl lg:text-2xl xl:text-3xl">
            Dal 2013 <b className="text-primary">Wild Bicycle</b> è una realtà di Roma Nord che spazia dal ciclismo su strada fino al gravity. <br className="hidden xl:block" />
            Da anni offriamo le migliori biciclette e accessori per ciclisti di tutti i livelli.<br className="hidden xl:block" /> Il nostro team è sempre pronto ad aiutarti con riparazioni, consigli e nuove attrezzature
            per soddisfare le tue necessità.
          </h3>
        </div>

      <ProductCarousel products={products} />



      {/* Banner per le Bici in Vendita con Effetto Parallax */}
      <section
        className="relative w-full h-64 md:h-80 lg:h-[550px] flex items-center justify-center text-center text-white 
        bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        {/* Overlay per migliorare la leggibilità del testo */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Contenuto del banner */}
        <div className="relative z-10 max-w-2xl px-6">
          <h2 className="section-title text-white font-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Scopri il nostro catalogo
          </h2>
          <h3 className="my-4 text-base sm:text-lg md:text-xl lg:text-2xl pb-2 font-secondary">
            Una selezione di prodotti per ogni esigenza,<br /> dalla strada alla montagna.
          </h3>
          <Link to="/prodotti">
            <button className="btn btn-primary cursor-pointer">Esplora</button>
          </Link>
        </div>
      </section>

      {/* Carosello dei Brand */}
      <BrandCarousel />
    </main>
  );
};

export default Home;
