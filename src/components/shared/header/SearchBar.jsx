import React from "react";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Cerca..."
        className="input-field border bg-background focus:ring-accent"
      />
      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-800">
        <span className="material-symbols-outlined">
          search
        </span>
      </button>
    </div>
  );
};

export default SearchBar;
