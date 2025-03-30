import React from "react";
import ContactForm from "../components/contact/ContactForm";

const Contatti = () => {
  return (
    <main className="bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Grid: Left - Contact Form, Right - Map and Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Box: Contact Form */}
          <section aria-label="Modulo di contatto">
            <ContactForm />
          </section>

          {/* Right Box: Map and Contact Information */}
          <section
            className="flex flex-col items-center my-6"
            aria-label="Dove siamo e dettagli di contatto"
          >
            <h2 className="section-title text-primary text-2xl sm:text-3xl mb-6">
              Dove siamo
            </h2>
            <iframe
              title="Mappa di Wild Bicycle"
              className="w-full h-96 rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2957.1475583954093!2d12.584650576698909!3d42.16852514717986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6d40e909c80f%3A0x2c08bd597700c167!2sWild%20Bicycle!5e0!3m2!1sit!2sit!4v1741202092917!5m2!1sit!2sit"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="mt-4 text-center text-primary" aria-label="Informazioni di contatto">
              <p className="text-base sm:text-lg md:text-xl font-semibold">Wild Bicycle</p>
              <p className="text-base sm:text-lg md:text-xl">Via Giovanni Amendola 1</p>
              <p className="text-base sm:text-lg md:text-xl">00065, Fiano Romano (RM), Italia</p>
              <p className="mt-2 text-base sm:text-lg md:text-xl font-semibold">
                Telefono:{" "}
                <a href="tel:+0765422652" aria-label="Telefono Wild Bicycle">
                  +0765 422 652
                </a>
              </p>
              <p className="mt-2 text-base sm:text-lg md:text-xl font-semibold">
                Email:{" "}
                <a href="mailto:vastanodaniele@gmail.com" aria-label="Email Wild Bicycle">
                  vastanodaniele@gmail.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Contatti;