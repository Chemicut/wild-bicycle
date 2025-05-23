import { useState, useEffect } from "react";
import ProductCard from "../components/shop/ProductCard";
import productsData from "../data/Bici.json";
import SearchBar from "../components/shop/SearchBar";
import FiltersContent from "../components/shop/FiltersContent";

const Negozio = () => {
  const [filters, setFilters] = useState({
    search: "",
    mainCategory: "",
    subCategory: "",
    priceRange: [0, 15000],
    sospensione: "",
    condition: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  // Stato per il sort: "asc" per crescente, "desc" per decrescente
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const categories = [
    {
      name: "Biciclette",
      subCategories: ["MTB", "E-MTB", "Corsa", "Gravel", "Ciclocross", "Urban/City", "Kids"],
    },
    {
      name: "Abbigliamento",
      subCategories: [
        "Giacche",
        "Maglie",
        "Intimo",
        "Salopette e pantaloncini",
        "Pantaloni",
        "Guanti",
        "Scarpe",
        "Calze",
        "Termico",
        "Body",
      ],
    },
    {
      name: "Protezioni",
      subCategories: ["Caschi", "Pettorine", "Ginocchia", "Gomiti"],
    },
    { name: "Componenti", subCategories: [] },
    { name: "Accessori", subCategories: [] },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      filters.search === "" ||
      product.name.toLowerCase().includes(filters.search.toLowerCase());
      
    const matchesMainCategory =
      filters.mainCategory === "" || product.category === filters.mainCategory;
      
    const matchesSubCategory =
      filters.subCategory === "" || product.subCategory === filters.subCategory;
      
    const matchesPrice =
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1];
      
    // Applica il filtro "Sospensione" solo se attivo (vuoto significa ignora)
    const matchesSospensione =
      filters.mainCategory !== "Biciclette" ||
      filters.sospensione === "" ||
      product.sospensione === filters.sospensione;
      
    // Applica il filtro "Condizione" solo se attivo (vuoto significa ignora)
    const matchesCondition =
      filters.mainCategory !== "Biciclette" ||
      filters.condition === "" ||
      product.condition === filters.condition;
      
    return (
      matchesSearch &&
      matchesMainCategory &&
      matchesSubCategory &&
      matchesPrice &&
      matchesSospensione &&
      matchesCondition
    );
  });

  // Ordino i prodotti filtrati in base al prezzo
  const sortedProducts = sortOrder
  ? [...filteredProducts].sort((a, b) => {
      return sortOrder === "asc"
        ? parseFloat(a.price) - parseFloat(b.price)
        : parseFloat(b.price) - parseFloat(a.price);
    })
  : filteredProducts;

  const handleSearch = () => {
    setFilters({ ...filters, search: searchQuery });
  };

  const searchBar = (
    <SearchBar
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      onSearch={handleSearch}
    />
  );

  return (
    <main className="w-full bg-background">
      <div className="p-6 lg:p-12 mx-auto">
        {/* Filtro per mobile */}
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
          {/* Sidebar per desktop */}
          <aside className="hidden lg:block w-full lg:w-1/4 xl:w-1/5 mb-8 font-secondary">
            <FiltersContent
              filters={filters}
              setFilters={setFilters}
              categories={categories}
              searchBar={searchBar}
            />
          </aside>
          {/* Vetrina Prodotti */}
          <section className="w-full lg:w-3/4 xl:w-4/5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl text-primary font-primary">
                  Negozio
                </h1>
                <button
                  className="btn btn-primary cursor-pointer"
                  onClick={() =>
                    setSortOrder((prev) => {
                      if (prev === "") return "asc";
                      return prev === "asc" ? "desc" : "asc";
                    })
                  }
                >
                  Ordina per prezzo {sortOrder === "asc" ? "▲" : sortOrder === "desc" ? "▼" : ""}
                </button>
                
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-6">
              {sortedProducts.length > 0 ? (
                sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <p className="text-center col-span-full text-xl sm:text-2xl md:text-3xl text-secondary">
                  Non ci sono prodotti disponibili con i filtri selezionati.
                </p>
              )}
            </div>
          </section>
        </div>
      </div>
      {/* Sezione Call-to-Action */}
      <div className="container mx-auto container-padding">
        <section className="mt-12 bg-primary text-white py-10 px-6 rounded-lg shadow-lg text-center">
          <h2 className="section-title text-white text-2xl sm:text-3xl md:text-4xl">
            Non hai trovato quello che cerchi?
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-2xl">
            Contattaci per richiedere un prodotto specifico o per ricevere assistenza
            personalizzata.
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