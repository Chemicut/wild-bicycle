import { useState, useEffect } from "react";
import ProductCard from "../components/shop/ProductCard";
import FilterBar from "../components/shop/FilterBar";
import productsData from "../data/products.json";

const Products = () => {
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
      </div>
    </main>

  );
};

export default Products;
