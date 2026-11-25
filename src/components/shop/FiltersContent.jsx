import formatPrice from "../../utils/formatPrice";
import PriceRangeSlider from "./PriceRangeSlider";

const sospensioni = ["Rigida", "Front", "Full"];
const condizioni = ["Nuovo", "Usato"];

const Chip = ({ active, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className={`eyebrow rounded-md px-3 py-2 transition-colors ${
      active ? "bg-signal text-night" : "bg-cream/10 text-cream hover:bg-cream/20"
    }`}
  >
    {children}
  </button>
);

const FiltersContent = ({ filters, setFilters, categories, searchQuery, setSearchQuery }) => {
  const selected = categories.find((cat) => cat.name === filters.mainCategory);
  const showBikeFilters =
    filters.mainCategory === "" || filters.mainCategory === "Biciclette";
  // Con "Tutte" mostriamo comunque i tipi bici: oggi il catalogo è quasi solo quello
  const tipi =
    selected?.subCategories?.length > 0
      ? selected.subCategories
      : showBikeFilters
        ? categories.find((cat) => cat.name === "Biciclette")?.subCategories || []
        : [];

  const set = (patch) => setFilters({ ...filters, ...patch });

  return (
    <div className="space-y-8">
      <div>
        <label htmlFor="cerca-bici" className="eyebrow opacity-60">
          Cerca
        </label>
        <input
          id="cerca-bici"
          type="search"
          placeholder="Nome, modello…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mt-2 w-full rounded-md border border-cream/25 bg-transparent px-4 py-3 text-cream placeholder:text-cream/40 focus:border-signal focus:outline-none"
        />
      </div>

      <div>
        <p className="eyebrow opacity-60 mb-3">Categoria</p>
        <div className="flex flex-wrap gap-2">
          <Chip
            active={filters.mainCategory === ""}
            onClick={() =>
              set({ mainCategory: "", subCategory: "", sospensione: "", condition: "" })
            }
          >
            Tutte
          </Chip>
          {categories.map((cat) => (
            <Chip
              key={cat.name}
              active={filters.mainCategory === cat.name}
              onClick={() =>
                set({
                  mainCategory: filters.mainCategory === cat.name ? "" : cat.name,
                  subCategory: "",
                  sospensione: cat.name === "Biciclette" ? filters.sospensione : "",
                  condition: cat.name === "Biciclette" ? filters.condition : "",
                })
              }
            >
              {cat.name}
            </Chip>
          ))}
        </div>
      </div>

      {tipi.length > 0 && (
        <div>
          <p className="eyebrow opacity-60 mb-3">Tipo</p>
          <div className="flex flex-wrap gap-2">
            {tipi.map((sub) => (
              <Chip
                key={sub}
                active={filters.subCategory === sub}
                onClick={() =>
                  set({ subCategory: filters.subCategory === sub ? "" : sub })
                }
              >
                {sub}
              </Chip>
            ))}
          </div>
        </div>
      )}

      {showBikeFilters && (
        <>
          <div>
            <p className="eyebrow opacity-60 mb-3">Condizione</p>
            <div className="flex flex-wrap gap-2">
              {condizioni.map((cond) => (
                <Chip
                  key={cond}
                  active={filters.condition === cond}
                  onClick={() =>
                    set({ condition: filters.condition === cond ? "" : cond })
                  }
                >
                  {cond}
                </Chip>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow opacity-60 mb-3">Sospensione</p>
            <div className="flex flex-wrap gap-2">
              {sospensioni.map((value) => (
                <Chip
                  key={value}
                  active={filters.sospensione === value}
                  onClick={() =>
                    set({ sospensione: filters.sospensione === value ? "" : value })
                  }
                >
                  {value}
                </Chip>
              ))}
            </div>
          </div>
        </>
      )}

      <div>
        <div className="flex items-baseline justify-between gap-4 mb-4">
          <p className="eyebrow opacity-60">Prezzo</p>
          <p className="text-sm tabular-nums opacity-80">
            {formatPrice(filters.priceRange[0])} – {formatPrice(filters.priceRange[1])}
          </p>
        </div>
        <PriceRangeSlider
          minValue={0}
          maxValue={15000}
          value={filters.priceRange}
          onRangeChange={(range) => set({ priceRange: range })}
        />
      </div>
    </div>
  );
};

export default FiltersContent;
