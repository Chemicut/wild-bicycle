import { useState, useEffect, useCallback } from "react";
import ProductCard from "../components/shop/ProductCard";
import PriceRangeSlider from "../components/shop/PriceRangeSlider";
import productsData from "../data/products.json";

// Componente separato per la SearchBar, memorizzato con React.memo per evitare re-render inutili
const SearchBar = ({ searchQuery, setSearchQuery, onSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div>
      <label htmlFor="search" className="block mb-1 text-sm font-medium">
      </label>
      <div className="flex">
        <input
          id="search"
          type="text"
          placeholder="Inserisci parole chiave..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full p-2 border rounded-lg mb-4"
        />
        <button
          className="btn btn-primary mb-4 rounded-lg"
          onClick={onSearch}
        >
          Cerca
        </button>
      </div>
    </div>
  );
};

const FiltersContent = ({ filters, setFilters, categories, searchBar }) => {
  return (
    <div>
      {/* La barra di ricerca è gestita separatamente */}
      {searchBar}
      {/* Menu delle categorie */}
      <div>
        <h2 className="text-lg font-bold mb-2">Categorie</h2>
        {categories.map((cat) => (
          <div key={cat.name} className="mb-2">
            <button
              onClick={() =>
                setFilters({
                  ...filters,
                  mainCategory: filters.mainCategory === cat.name ? "" : cat.name,
                  subCategory: "",
                })
              }
              className={`w-full text-left px-2 py-1 border rounded ${
                filters.mainCategory === cat.name ? "bg-gray-200" : ""
              }`}
            >
              {cat.name}
            </button>
            {filters.mainCategory === cat.name && cat.subCategories.length > 0 && (
              <ul className="ml-4 mt-2">
                {cat.subCategories.map((sub) => (
                  <li key={sub} className="mb-1">
                    <button
                      onClick={() =>
                        setFilters({
                          ...filters,
                          subCategory: filters.subCategory === sub ? "" : sub,
                        })
                      }
                      className={`w-full text-left px-2 py-1 rounded ${
                        filters.subCategory === sub ? "font-bold" : ""
                      }`}
                    >
                      {sub}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      {/* Slider per il range di prezzo */}
      <div className="mt-4">
        <h2 className="text-lg font-bold mb-2">Prezzo</h2>
        <PriceRangeSlider
          minValue={0}
          maxValue={8000}
          value={filters.priceRange}
          onRangeChange={(range) =>
            setFilters({ ...filters, priceRange: range })
          }
        />
      </div>
    </div>
  );
};

const Negozio = () => {
  const [filters, setFilters] = useState({
    search: "",
    mainCategory: "",
    subCategory: "",
    priceRange: [0, 8000],
  });
  // Stato locale per la barra di ricerca
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const categories = [
    {
      name: "Biciclette",
      subCategories: ["Bici da corsa", "Mountain bike", "Urban/City", "Kids"],
    },
    { name: "Abbigliamento", subCategories: [] },
    { name: "Componenti", subCategories: [] },
    { name: "Accessori", subCategories: [] },
  ];

  const filteredProducts = products.filter((product) => {
    return (
      (filters.search === "" ||
        product.name.toLowerCase().includes(filters.search.toLowerCase())) &&
      (filters.mainCategory === "" ||
        product.category === filters.mainCategory) &&
      (filters.subCategory === "" ||
        product.subCategory === filters.subCategory) &&
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1]
    );
  });

  // Funzione di callback per eseguire la ricerca
  const handleSearch = () => {
    setFilters({ ...filters, search: searchQuery });
  };

  // Memorizza la SearchBar per evitare ricreazioni inutili
  const searchBar = (
    <SearchBar
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      onSearch={handleSearch}
    />
  );

  return (
    <main className="w-full bg-background">
      <div className="px-6 md:px-12 py-12 mx-auto">
        {/* Per mobile: pulsante per espandere i filtri */}
        <div className="lg:hidden mb-6">
          <button
            className="btn btn-primary"
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          >
            {mobileFiltersOpen ? "Nascondi Filtri" : "Filtra Prodotti"}
          </button>
          {mobileFiltersOpen && (
            <div className="mt-4">
              <FiltersContent
                filters={filters}
                setFilters={setFilters}
                categories={categories}
                searchBar={searchBar}
              />
            </div>
          )}
        </div>
        <div className="flex gap-8">
          {/* Per dispositivi desktop: sidebar fissa */}
          <aside className="hidden lg:block w-full lg:w-1/4 xl:w-1/5 mb-8">
            <FiltersContent
              filters={filters}
              setFilters={setFilters}
              categories={categories}
              searchBar={searchBar}
            />
          </aside>
          {/* Vetrina Prodotti */}
          <section className="w-full lg:w-3/4 xl:w-4/5">
            <h1 className="section-title mb-4">Negozio</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <p className="text-center col-span-full text-gray-600">
                  Nessun prodotto trovato.
                </p>
              )}
            </div>
          </section>
        </div>
      </div>
      {/* Call-to-Action Section */}
      <div className="container mx-auto container-padding">
        <section className="mt-12 bg-primary text-white py-10 px-6 rounded-lg shadow-lg text-center">
          <h2 className="section-title text-white text-2xl sm:text-3xl md:text-4xl">
            Non hai trovato quello che cerchi?
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-2xl">
            Contattaci per richiedere un prodotto specifico o per ricevere
            assistenza personalizzata.
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