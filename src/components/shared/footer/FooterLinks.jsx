import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <nav>
      <ul className="space-y-2 text-center md:text-left">
        <li><Link to="/about" className="hover:text-accent">Chi siamo</Link></li>
        <li><Link to="/negozio" className="hover:text-accent">Negozio</Link></li>
        <li><Link to="/blog" className="hover:text-accent">Blog</Link></li>
        <li><Link to="/contact" className="hover:text-accent">Contatti</Link></li>
      </ul>
    </nav>
  );
};

export default FooterLinks;
