import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery, onSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div>
      <label htmlFor="search" className="block mb-1 text-sm font-medium">
        {/* ... eventualmente etichetta */}
      </label>
      <div className="flex">
        <input
          id="search"
          type="text"
          placeholder="Inserisci parole chiave..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full p-2 border rounded-lg mb-4 bg-white"
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

export default SearchBar;