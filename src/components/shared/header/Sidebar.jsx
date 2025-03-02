import React from "react";
import { X } from "lucide-react"; // Icona per chiudere il menu
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, closeSidebar }) => {
  const handleClose = (e) => {
    e.stopPropagation();
    closeSidebar(); // Usa la funzione che imposta su false
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeSidebar}
        className={`fixed inset-0 bg-black z-50 transition-all duration-450 ${
          isOpen ? "opacity-75 visible" : "opacity-0 invisible"
        }`}
      />
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-background shadow-lg z-60 transform transition-transform duration-450 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <button
            onClick={handleClose}
            className="absolute right-5 mb-4 focus:outline-none text-primary"
          >
            <X size={28} />
          </button>
          {/* Contenuto della sidebar */}
          <nav>
            <ul className="text-primary text-2xl/10">
              <li>
                <Link to="/" className="hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/prodotti" className="hover:text-accent">
                  Prodotti
                </Link>
              </li>
              <li>
                <Link to="/wildraceteam" className="hover:text-accent">
                  Wild Race Team
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-accent">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contatti" className="hover:text-accent">
                  Contatti
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;