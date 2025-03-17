import { useState, useEffect } from "react";
import ProductCard from "../components/shop/ProductCard";
import productsData from "../data/products.json";
import SearchBar from "../components/shop/SearchBar";
import FiltersContent from "../components/shop/FiltersContent";

const Negozio = () => {
  const [filters, setFilters] = useState({
    search: "",
    mainCategory: "",
    subCategory: "",
    priceRange: [0, 15000],
    sospensione: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const categories = [
    {
      name: "Biciclette",
      subCategories: ["MTB", "E-MTB", "Corsa", "Gravel", "Urban/City", "Kids"],
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
    const matchesSospensione =
      filters.mainCategory !== "Biciclette" ||
      filters.sospensione === "" ||
      product.sospensione === filters.sospensione;

    return (
      matchesSearch &&
      matchesMainCategory &&
      matchesSubCategory &&
      matchesPrice &&
      matchesSospensione
    );
  });

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
      <div className="px-6 md:px-12 py-12 mx-auto">
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
            <h1 className="section-title mb-4 font-primary text-primary">Negozio</h1>
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