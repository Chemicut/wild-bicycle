import { useEffect, useState } from "react";
import ProductCard from "../components/shop/ProductCard";
import FiltersContent from "../components/shop/FiltersContent";
import ButtonLink from "../components/ui/ButtonLink";
import { products } from "../data/products";

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

const initialFilters = {
  mainCategory: "",
  subCategory: "",
  priceRange: [0, 15000],
  sospensione: "",
  condition: "",
};

const Negozio = () => {
  const [filters, setFilters] = useState(initialFilters);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileFiltersOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileFiltersOpen]);

  const query = searchQuery.trim().toLowerCase();

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      query === "" ||
      product.name.toLowerCase().includes(query) ||
      (product.brand && product.brand.toLowerCase().includes(query));

    const matchesMainCategory =
      filters.mainCategory === "" || product.category === filters.mainCategory;

    const matchesSubCategory =
      filters.subCategory === "" || product.subCategory === filters.subCategory;

    const matchesPrice =
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];

    const matchesSospensione =
      filters.sospensione === "" || product.sospensione === filters.sospensione;

    const matchesCondition =
      filters.condition === "" || product.condition === filters.condition;

    return (
      matchesSearch &&
      matchesMainCategory &&
      matchesSubCategory &&
      matchesPrice &&
      matchesSospensione &&
      matchesCondition
    );
  });

  const sortedProducts = sortOrder
    ? [...filteredProducts].sort((a, b) =>
        sortOrder === "asc" ? a.price - b.price : b.price - a.price
      )
    : filteredProducts;

  const filtriAttivi =
    filters.mainCategory ||
    filters.subCategory ||
    filters.sospensione ||
    filters.condition ||
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < 15000 ||
    query !== "";

  const resetFiltri = () => {
    setFilters(initialFilters);
    setSearchQuery("");
    setSortOrder("");
  };

  const filtersPanel = (
    <FiltersContent
      filters={filters}
      setFilters={setFilters}
      categories={categories}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    />
  );

  return (
    <div className="bg-night text-cream min-h-screen">
      <div className="px-5 lg:px-10 pt-10 lg:pt-14 pb-20 lg:pb-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h1 className="headline text-[clamp(3.5rem,10vw,9rem)]">Negozio</h1>
          <p className="text-sm font-semibold tracking-[0.14em] uppercase tabular-nums opacity-70">
            {sortedProducts.length} di {products.length}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="eyebrow rounded-md bg-cream text-night px-5 py-3 lg:hidden"
            onClick={() => setMobileFiltersOpen(true)}
          >
            Filtri{filtriAttivi ? " · attivi" : ""}
          </button>

          <button
            type="button"
            onClick={() =>
              setSortOrder((prev) => {
                if (prev === "") return "asc";
                return prev === "asc" ? "desc" : "";
              })
            }
            className={`eyebrow rounded-md px-5 py-3 transition-colors ${
              sortOrder
                ? "bg-signal text-night"
                : "border border-cream/30 hover:border-cream"
            }`}
          >
            Prezzo{" "}
            {sortOrder === "asc" ? "↑" : sortOrder === "desc" ? "↓" : "·"}
          </button>

          {filtriAttivi && (
            <button
              type="button"
              onClick={resetFiltri}
              className="eyebrow opacity-60 hover:opacity-100 hover:text-signal"
            >
              Azzera
            </button>
          )}
        </div>

        <div className="mt-10 flex gap-10 xl:gap-14">
          <aside className="hidden lg:block w-64 xl:w-72 shrink-0">
            <div className="sticky top-8 border border-cream/15 rounded-[18px] p-6">
              {filtersPanel}
            </div>
          </aside>

          <section className="min-w-0 flex-1">
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="border border-dashed border-cream/30 rounded-[18px] px-6 py-16 text-center">
                <p className="headline text-5xl lg:text-7xl">Nessuna bici</p>
                <p className="mt-4 max-w-md mx-auto opacity-75 leading-relaxed">
                  Non ci sono prodotti con i filtri selezionati. Prova ad allargare la ricerca
                  o azzera i filtri.
                </p>
                <button
                  type="button"
                  onClick={resetFiltri}
                  className="eyebrow mt-8 rounded-md bg-signal text-night px-6 py-4"
                >
                  Azzera filtri
                </button>
              </div>
            )}
          </section>
        </div>
      </div>

      <section className="bg-signal text-night px-5 lg:px-10 py-16 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <h2 className="headline text-[clamp(2.5rem,7vw,6rem)]">
              Non l&apos;hai trovata?
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed">
              Scrivici il modello che cerchi: ordiniamo, importiamo e troviamo soluzioni su
              misura.
            </p>
          </div>
          <ButtonLink to="/contatti" variant="night">
            Contattaci
          </ButtonLink>
        </div>
      </section>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Chiudi filtri"
            className="absolute inset-0 bg-night/70"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 w-full max-w-md bg-night text-cream border-l border-cream/15 overflow-y-auto px-5 py-6">
            <div className="flex items-center justify-between mb-8">
              <p className="eyebrow">Filtri</p>
              <button
                type="button"
                className="eyebrow hover:text-signal"
                onClick={() => setMobileFiltersOpen(false)}
              >
                Chiudi
              </button>
            </div>
            {filtersPanel}
            <button
              type="button"
              className="eyebrow mt-10 w-full rounded-md bg-signal text-night px-6 py-4"
              onClick={() => setMobileFiltersOpen(false)}
            >
              Mostra {sortedProducts.length} risultati
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Negozio;
