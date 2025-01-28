import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ toggleMenu, menuOpen }) => {
  return (
    <div
      className={`absolute top-16 left-0 w-full bg-primary shadow-lg p-4 flex flex-col space-y-3 md:hidden z-50
      transition-all duration-300 ease-in-out transform
      ${menuOpen ? "translate-y-4 opacity-100" : "translate-y-5 opacity-0 pointer-events-none"}`}
    >
      <Link to="/" className="text-background hover:text-accent" onClick={toggleMenu}>Home</Link>
      <Link to="/negozio" className="text-background hover:text-accent" onClick={toggleMenu}>Negozio</Link>
      <Link to="/wildraceteam" className="text-background hover:text-accent" onClick={toggleMenu}>Squadra</Link>
      <Link to="/blog" className="text-background hover:text-accent" onClick={toggleMenu}>Blog</Link>
      <Link to="/contact" className="text-background hover:text-accent" onClick={toggleMenu}>Contatti</Link>
    </div>
  );
};

export default MobileMenu;
