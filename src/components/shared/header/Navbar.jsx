import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-14 text-background">
        <li><Link to="/" className="hover:text-accent">Home</Link></li>
        <li><Link to="/negozio" className="hover:text-accent">Negozio</Link></li>
        <li><Link to="/wildraceteam" className="hover:text-accent">Squadra</Link></li>
        <li><Link to="/blog" className="hover:text-accent">Blog</Link></li>
        <li><Link to="/contatti" className="hover:text-accent">Contatti</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
