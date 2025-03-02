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
      action="https://formspree.io/f/mrberzkv"
      method="POST"
      className="max-w-2xl my-6"
    >
      <h2 className="section-title text-primary">Contattaci</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="input-label text-primary">Nome</label>
          <input
            type="text"
            name="name"
            placeholder="Inserisci il tuo nome"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field bg-white"
          />
        </div>
        <div className="flex flex-col">
          <label className="input-label">Cognome</label>
          <input
            type="text"
            name="surname"
            placeholder="Inserisci il tuo cognome"
            value={formData.surname}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="flex flex-col">
          <label className="input-label">Cellulare</label>
          <input
            type="tel"
            name="phone"
            placeholder="Inserisci il tuo numero"
            value={formData.phone}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="flex flex-col">
          <label className="input-label">Email</label>
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
      </div>

      <div className="flex flex-col mt-4">
        <label className="input-label">Oggetto</label>
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
        <label className="input-label">Messaggio</label>
        <textarea
          name="message"
          placeholder="Scrivi qui il tuo messaggio"
          value={formData.message}
          onChange={handleChange}
          required
          className="input-field h-32 resize-none"
        ></textarea>
      </div>

      <button type="submit" className="btn-primary w-full mt-6">
        Invia Messaggio
      </button>
    </form>
  );
};

export default ContactForm;