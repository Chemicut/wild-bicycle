import React from "react";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <footer className="bg-primary text-white font-secondary py-8 text-md xl:text-xl">
      <div className="container mx-auto px-4 grid grid-cols-1 gap-6 md:grid-cols-3">
        <FooterLinks />
        <FooterContact />
        <FooterSocial />
      </div>
      <div className="text-center text-gray-400 text-sm mt-6">
        © {new Date().getFullYear()} Wild Bicycle - Tutti i diritti riservati
      </div>
    </footer>
  );
};

export default Footer;
