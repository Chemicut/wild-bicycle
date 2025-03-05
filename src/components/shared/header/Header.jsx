import React, { useState, useRef, useEffect } from "react";
import Logo from "./Logo";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Menu } from "lucide-react"; // Icona per aprire il menu

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  // Alterna apertura/chiusura del menu/sidebar
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Chiude menu quando si clicca fuori
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header ref={headerRef} className="bg-background font-secondary lg:pt-3">
        <div className="relative w-full px-4 py-5 lg:py-3 lg:bg-primary lg:w-[95vw] lg:mx-auto lg:rounded-4xl lg:top-4 transform z-50">
          {/* VERSIONE MOBILE: due righe */}
          <div className="flex flex-col lg:hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {/* Bottone per attivare la Sidebar */}
                <button
                  onClick={toggleMenu}
                  className="lg:hidden focus:outline-none mr-2 text-primary"
                >
                  <Menu size={24} className="cursor-pointer" />
                </button>
                <Logo />
              </div>
            </div>

          </div>

          {/* VERSIONE DESKTOP: una singola riga */}
          <div className="hidden lg:flex items-center justify-between h-10">
            <div className="flex items-center min-w-[150px]">
              <Logo />
            </div>
            <div className="flex items-center gap-8 mr-6">
              <nav>
                <Navbar />
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Offcanvas */}
      <Sidebar isOpen={menuOpen} toggleSidebar={toggleMenu} />
    </>
  );
};

export default Header;