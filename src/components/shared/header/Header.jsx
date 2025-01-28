import React, { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import MobileSearch from "./MobileSearch";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);


  // Funzione per aprire il menu e chiudere la ricerca
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    if (searchOpen) setSearchOpen(false);
  };

  // Funzione per aprire la ricerca e chiudere il menu
  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <header
      className="w-[90%] mx-auto px-6 py-3 bg-primary bg-opacity-85 shadow-md rounded-lg backdrop-blur-md z-50 absolute top-4 left-1/2 transform -translate-x-1/2"
    >
      <div className="flex items-center justify-between">
        {/* Logo a sinistra */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Navbar Desktop visibile solo su md+ */}
        <nav className="hidden md:flex flex-grow justify-center">
          <Navbar />
        </nav>

        {/* Sezione per barra di ricerca e menu mobile */}
        <div className="flex items-center space-x-4">
          {/* SearchBar Desktop visibile solo su md+ */}
          <div className="hidden md:block">
            <SearchBar />
          </div>

          {/* Icona Mobile Search */}
          {!searchOpen && <MobileSearch toggleSearch={toggleSearch} />}

          {/* Icona Mobile Menu */}
          <button
            className="md:hidden text-background"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Barra di Ricerca Mobile */}
      <div
        className={`absolute top-14 left-0 w-full p-4 bg-primary shadow-md z-50
        transition-all duration-300 ease-in-out transform
        ${searchOpen ? "translate-y-4 opacity-100" : "translate-y-5 opacity-0 pointer-events-none"}`}
      >
        <SearchBar />
        <button onClick={toggleSearch} className="mt-2 text-sm text-background">
          Chiudi ricerca ✖
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu toggleMenu={toggleMenu} menuOpen={menuOpen} />
    </header>
  );
};

export default Header;
