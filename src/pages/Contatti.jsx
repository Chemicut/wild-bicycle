import React from "react";
import ContactForm from "../components/contact/ContactForm";

const Contatti = () => {
  return (
    <main className="w-full bg-background">
    <div className="container bg-background px-4 pb-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Box Sinistro: Form Contatti */}
          <ContactForm />

        {/* Box Destro: Mappa + Info */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">Dove siamo</h2>
          <iframe
            title="Mappa Wild Bicycle"
            className="w-full h-64 rounded"
            src="https://www.google.com/maps/place/Wild+Bicycle/@42.1685212,12.5846506,1195m/data=!3m2!1e3!4b1!4m6!3m5!1s0x132f6d40e909c80f:0x2c08bd597700c167!8m2!3d42.1685212!4d12.5872255!16s%2Fg%2F12lrlcc65?entry=ttu&g_ep=EgoyMDI1MDEyMS4wIKXMDSoASAFQAw%3D%3D"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="mt-4 text-center">
            <p className="text-lg font-semibold">Wild Bicycle</p>
            <p>Via Giovanni Amendola 1</p>
            <p>00065, Fiano Romano (RM), Italia</p>
            <p className="mt-2 font-semibold">Telefono: <a href="tel:+0765 422 652">+0765 422 652</a></p>
            <p className="mt-2 font-semibold">Email: <a href="mailto:vastanodaniele@gmail.com" >vastanodaniele@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
};

export default Contatti;
