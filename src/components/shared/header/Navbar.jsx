import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-8 text-background lg:text-lg xl:text-lg 2xl:text-xl">
        <li><Link to="/" className="hover:text-accent">Home</Link></li>
        <li><Link to="/prodotti" className="hover:text-accent">Prodotti</Link></li>
        <li><Link to="/wildraceteam" className="hover:text-accent">Wild Race Team</Link></li>
        <li><Link to="/blog" className="hover:text-accent">Blog</Link></li>
        <li><Link to="/contatti" className="hover:text-accent">Contatti</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
