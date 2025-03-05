import { useState, useEffect } from "react";
import ProductCard from "../components/shop/ProductCard";
import FilterBar from "../components/shop/FilterBar";
import productsData from "../data/products.json";

const Negozio = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: null,
    type: null,
    wheelSize: null,
    suspension: null,
  });

  useEffect(() => {
    setProducts(productsData);
  }, []);

  // Funzione per filtrare i prodotti
  const filteredProducts = products.filter((product) => {
    return (
      (!filters.category || product.category === filters.category) &&
      (!filters.type || product.type === filters.type) &&
      (!filters.wheelSize || product.wheelSize.toString() === filters.wheelSize) &&
      (!filters.suspension || product.suspension === filters.suspension)
    );
  });

  return (
    <main className="w-full bg-background">
      <div className="container mx-auto container-padding">
        <h1 className="section-title">Negozio</h1>
        <FilterBar filters={filters} setFilters={setFilters} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
          ) : (
            <p className="text-center col-span-full text-gray-600">Nessun prodotto trovato.</p>
          )}
        </div>
        <section className="mt-12 bg-primary text-white py-10 px-6 rounded-lg shadow-lg text-center">
          <h2 className="section-title text-white text-2xl sm:text-3xl md:text-4xl">
            Non hai trovato quello che cerchi?
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-2xl">
            Contattaci per richiedere un prodotto specifico o per ricevere assistenza personalizzata.       
          </p>
          <button
            className="mt-6 btn btn-secondary cursor-pointer"
            onClick={() => (window.location.href = "/contatti")}
          >
            Contattaci
          </button>
        </section>
      </div>
    </main>

  );
};

export default Negozio;
