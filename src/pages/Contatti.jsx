import React from "react";
import ContactForm from "../components/contact/ContactForm";

const Contatti = () => {
  return (
    <main className="w-full bg-background">
    <div className="container mx-auto container-padding bg-background">
      <h1 className="section-title">Contattaci</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Box Sinistro: Form Contatti */}
          <ContactForm />

        {/* Box Destro: Mappa + Info */}
        <div className="card flex flex-col items-center hover:scale-100">
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
            <p>Via Nome, 123</p>
            <p>00100, Città, Italia</p>
            <p className="mt-2 font-semibold">Telefono: <a href="tel:+39123456789" className="hover:text-accent">+39 123 456 789</a></p>
            <p className="mt-2 font-semibold">Email: <a href="mailto:info@wildbicycle.com" className="hover:text-accent">info@wildbicycle.com</a></p>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
};

export default Contatti;
