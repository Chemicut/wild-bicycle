import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-8 text-background lg:text-lg xl:text-lg 2xl:text-xl">
        <li><Link to="/" className="hover:text-accent">Home</Link></li>
        <li><Link to="/negozio" className="hover:text-accent">Negozio</Link></li>
        <li><Link to="/officina" className="hover:text-accent">Officina</Link></li>
        <li><Link to="/wildraceteam" className="hover:text-accent">Wild Race Team</Link></li>
        <li><Link to="/contatti" className="hover:text-accent">Contatti</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
