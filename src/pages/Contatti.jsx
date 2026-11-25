import ContactForm from "../components/contact/ContactForm";
import ButtonLink from "../components/ui/ButtonLink";
import { contatti } from "../data/contatti";

const Contatti = () => {
  return (
    <div className="bg-night text-cream">
      <div className="px-5 lg:px-10 pt-10 lg:pt-14 pb-16 lg:pb-24">
        <p className="eyebrow opacity-60">Ritrovo</p>
        <h1 className="headline mt-3 text-[clamp(3.5rem,10vw,9rem)]">Contatti</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed opacity-80">
          Passa in negozio a Fiano Romano, chiamaci o scrivici: rispondiamo per bici,
          officina, team e corsi.
        </p>

        <div className="mt-12 lg:mt-16 grid lg:grid-cols-12 gap-12 lg:gap-16">
          <section className="lg:col-span-5" aria-label="Modulo di contatto">
            <p className="eyebrow opacity-60 mb-6">Messaggio</p>
            <ContactForm />
          </section>

          <section className="lg:col-span-7 space-y-10" aria-label="Dove siamo">
            <div>
              <p className="eyebrow opacity-60">Indirizzo</p>
              <a
                href={contatti.mappa}
                target="_blank"
                rel="noopener noreferrer"
                className="headline mt-3 block text-[clamp(2rem,5vw,4.5rem)] leading-[0.9] hover:text-signal"
              >
                {contatti.indirizzo}
              </a>
              <p className="mt-3 text-lg opacity-75">
                {contatti.cap} {contatti.citta}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <ButtonLink href={contatti.telefono.href} variant="signal">
                {contatti.telefono.label}
              </ButtonLink>
              <ButtonLink href={contatti.whatsapp.href} variant="cream">
                WhatsApp
              </ButtonLink>
              <ButtonLink href={contatti.email.href} variant="outline">
                Email
              </ButtonLink>
            </div>

            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {contatti.social.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="eyebrow opacity-70 hover:opacity-100 hover:text-signal"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <iframe
              title="Mappa di Wild Bicycle"
              className="w-full h-72 lg:h-96 rounded-[18px] border-0 grayscale contrast-125"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2957.1475583954093!2d12.584650576698909!3d42.16852514717986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6d40e909c80f%3A0x2c08bd597700c167!2sWild%20Bicycle!5e0!3m2!1sit!2sit!4v1741202092917!5m2!1sit!2sit"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contatti;
