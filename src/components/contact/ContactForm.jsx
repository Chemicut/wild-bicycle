import { useState } from "react";

const fieldClass =
  "mt-2 w-full rounded-md border border-cream/25 bg-transparent px-4 py-3 text-cream placeholder:text-cream/40 focus:border-signal focus:outline-none";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
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
      className="space-y-5"
    >
      <input type="hidden" name="_next" value="https://wildbicycle.it/thankyou" />
      <input type="hidden" name="_subject" value="Messaggio dal sito Wild Bicycle" />

      <div>
        <label htmlFor="contact-name" className="eyebrow opacity-60">
          Nome
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          placeholder="Come ti chiami"
          value={formData.name}
          onChange={handleChange}
          required
          autoComplete="name"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="eyebrow opacity-60">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          placeholder="La tua email"
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="email"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="contact-subject" className="eyebrow opacity-60">
          Oggetto
        </label>
        <input
          id="contact-subject"
          type="text"
          name="subject"
          placeholder="Di cosa si tratta"
          value={formData.subject}
          onChange={handleChange}
          required
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="eyebrow opacity-60">
          Messaggio
        </label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Scrivi qui il tuo messaggio"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className={`${fieldClass} resize-y min-h-32`}
        />
      </div>

      <button
        type="submit"
        className="eyebrow w-full rounded-md bg-signal text-night px-6 py-4 hover:bg-cream transition-colors"
      >
        Invia messaggio
      </button>
    </form>
  );
};

export default ContactForm;
