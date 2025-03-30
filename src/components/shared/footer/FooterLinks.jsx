import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <nav>
      <ul className="space-y-2 text-center md:text-left">
        <li><Link to="/" className="text-hover">Home</Link></li>
        <li><Link to="/negozio" className="text-hover">Negozio</Link></li>
        <li><Link to="/officina" className="text-hover">Officina</Link></li>
        <li><Link to="/wildraceteam" className="text-hover">Wild Race Team</Link></li>
        <li><Link to="/contatti" className="text-hover">Contatti</Link></li>
      </ul>
    </nav>
  );
};

export default FooterLinks;
