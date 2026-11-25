import ButtonLink from "../components/ui/ButtonLink";

const ThankYou = () => (
  <div className="bg-night text-cream min-h-[70vh]">
    <div className="px-5 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-28 max-w-3xl">
      <p className="eyebrow text-signal">Messaggio inviato</p>
      <h1 className="headline mt-4 text-[clamp(3.5rem,10vw,8rem)] leading-[0.82]">
        Grazie.
      </h1>
      <p className="mt-6 text-lg leading-relaxed opacity-80 max-w-xl">
        Abbiamo ricevuto il tuo messaggio. Ti rispondiamo appena possibile — di solito
        entro un giorno lavorativo.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink to="/" variant="signal">
          Torna alla home
        </ButtonLink>
        <ButtonLink to="/negozio" variant="outline">
          Guarda il negozio
        </ButtonLink>
      </div>
    </div>
  </div>
);

export default ThankYou;
