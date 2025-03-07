import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-8 text-background lg:text-lg xl:text-lg 2xl:text-xl">
        <li><Link to="/" className="text-hover">Home</Link></li>
        <li><Link to="/negozio" className="text-hover">Negozio</Link></li>
        <li><Link to="/officina" className="text-hover">Officina</Link></li>
        <li><Link to="/wildraceteam" className="text-hover">Wild Race Team</Link></li>
        <li><Link to="/contatti" className="text-hover">Contatti</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
