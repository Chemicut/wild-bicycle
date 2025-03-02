import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <nav>
      <ul className="space-y-2 text-center md:text-left">
        <li><Link to="/" className="md:hover:text-accent">Home</Link></li>
        <li><Link to="/negozio" className="md:hover:text-accent">Negozio</Link></li>
        <li><Link to="/wildraceteam" className="md:hover:text-accent">Wild Race Team</Link></li>
        <li><Link to="/blog" className="md:hover:text-accent">Blog</Link></li>
        <li><Link to="/contatti" className="md:hover:text-accent">Contatti</Link></li>
      </ul>
    </nav>
  );
};

export default FooterLinks;
