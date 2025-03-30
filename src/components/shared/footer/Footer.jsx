import React from "react";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <footer
      className="bg-primary text-white font-secondary py-8 text-md xl:text-xl"
      aria-label="Footer del sito"
    >
      {/* Footer Links, Contact, and Social */}
      <div className="container mx-auto px-4 grid grid-cols-1 gap-6 md:grid-cols-3">
        <FooterLinks aria-label="Link utili del footer" />
        <FooterContact aria-label="Contatti del footer" />
        <FooterSocial aria-label="Social media del footer" />
      </div>

      {/* Copyright Notice */}
      <div className="text-center text-white text-sm mt-6" aria-label="Informazioni sul copyright">
        © {new Date().getFullYear()} Wild Bicycle S.R.L. - Tutti i diritti riservati
      </div>
    </footer>
  );
};

export default Footer;