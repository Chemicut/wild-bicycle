import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      action="https://formspree.io/f/mrberzkv" // Formspree form endpoint
      method="POST"
      className="my-6 text-base sm:text-lg md:text-xl"
    >
      <h2 className="section-title text-primary text-2xl sm:text-3xl mb-6">
        Contattaci
      </h2>

        <div className="flex flex-col">
          <label className="input-label mb-1">Nome</label>
          <input
            type="text"
            name="name"
            placeholder="Inserisci il tuo nome"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        <div className="flex flex-col mt-4">
          <label className="input-label mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Inserisci la tua email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

      <div className="flex flex-col mt-4">
        <label className="input-label mb-1">Oggetto</label>
        <input
          type="text"
          name="subject"
          placeholder="Inserisci l'oggetto del messaggio"
          value={formData.subject}
          onChange={handleChange}
          required
          className="input-field"
        />
      </div>

      <div className="flex flex-col mt-4">
        <label className="input-label mb-1">Messaggio</label>
        <textarea
          name="message"
          placeholder="Scrivi qui il tuo messaggio"
          value={formData.message}
          onChange={handleChange}
          required
          className="input-field h-32 resize-none"
        ></textarea>
      </div>

      <button type="submit" className="btn-primary w-full mt-6 py-2 cursor-pointer">
        Invia Messaggio
      </button>
    </form>
  );
};

export default ContactForm;