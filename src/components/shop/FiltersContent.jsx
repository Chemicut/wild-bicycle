import React from "react";
import PriceRangeSlider from "./PriceRangeSlider";

const FiltersContent = ({ filters, setFilters, categories, searchBar }) => {
  // Lista opzioni per le sospensioni
  const sospensioni = ["Rigida", "Front", "Full"];

  const handleCategoryClick = (catName) => {
    // Se la categoria selezionata non è "Biciclette", resetto anche "sospensione"
    setFilters({
      ...filters,
      mainCategory: filters.mainCategory === catName ? "" : catName,
      subCategory: "",
      sospensione: catName === "Biciclette" ? filters.sospensione : "",
    });
  };

  return (
    <div>
      {searchBar}
      {/* Filtro per le categorie */}
      <div>
        <h2 className="text-lg font-bold mb-2">Categorie</h2>
        {categories.map((cat) => (
          <div key={cat.name} className="mb-2">
            <button
              onClick={() => handleCategoryClick(cat.name)}
              className={`w-full text-left px-2 py-1 cursor-pointer ${
                filters.mainCategory === cat.name ? "font-bold bg-primary/15 rounded" : ""
              }`}
            >
              {cat.name}
            </button>
            {filters.mainCategory === cat.name && cat.subCategories.length > 0 && (
              <ul className="ml-4 mt-2 rounded">
                {cat.subCategories.map((sub) => (
                  <li key={sub} className="mb-1">
                    <button
                      onClick={() =>
                        setFilters({
                          ...filters,
                          subCategory: filters.subCategory === sub ? "" : sub,
                        })
                      }
                      className={`w-full text-left px-2 py-1 cursor-pointer ${
                        filters.subCategory === sub ? "font-bold bg-primary/15 rounded" : ""
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
      {/* Filtro per "Sospensione": visibile solo se categoria Biciclette è selezionata */}
      {filters.mainCategory === "Biciclette" && (
        <div className="mt-4">
          <h2 className="text-lg font-bold mb-2">Sospensione</h2>
          <div className="flex gap-2">
            {sospensioni.map((value) => (
              <button
                key={value}
                onClick={() =>
                  setFilters({
                    ...filters,
                    sospensione: filters.sospensione === value ? "" : value,
                  })
                }
                className={`px-2 py-1 cursor-pointer ${
                  filters.sospensione === value ? "font-bold bg-primary/15 rounded" : ""
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Filtro per il range di prezzo */}
      <div className="mt-4">
        <h2 className="text-lg text-primary font-bold mb-2">Prezzo</h2>
        <PriceRangeSlider
          minValue={0}
          maxValue={8000}
          value={filters.priceRange}
          onRangeChange={(range) => setFilters({ ...filters, priceRange: range })}
        />
      </div>
    </div>
  );
};

export default FiltersContent;