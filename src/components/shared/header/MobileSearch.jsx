import React from "react";

const MobileSearch = ({ toggleSearch }) => {
  return (
    <button 
      className="md:hidden text-background hover:text-accent"
      onClick={toggleSearch}
      aria-label="Apri ricerca"
    >
      <span className="material-symbols-outlined">
        search
      </span>
    </button>
  );
};

export default MobileSearch;
