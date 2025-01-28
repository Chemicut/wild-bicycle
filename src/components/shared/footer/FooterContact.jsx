import React from "react";

const FooterContact = () => {
  return (
    <address className="not-italic text-center md:text-left space-y-2">
      <p>Wild Bicycle S.r.l.</p>
      <p>Via Giovanni Amendola 1, 00065 Fiano Romano (RM)</p>
      <p>Email: <a href="mailto:vastanodaniele@gmail.com" className="hover:text-accent">vastanodaniele@gmail.com</a></p>
      <p>Telefono: <a href="tel:+390765422652" className="hover:text-accent">+39 0765 422 652</a></p>
    </address>
  );
};

export default FooterContact;
