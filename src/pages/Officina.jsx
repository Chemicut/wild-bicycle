import ButtonLink from "../components/ui/ButtonLink";
import imageUrl from "../utils/imageUrl";

const servizi = [
  {
    title: "Manutenzione ordinaria",
    text: "Controlli periodici, regolazioni e tagliandi per tenere la bici pronta a ogni uscita.",
  },
  {
    title: "Riparazioni complesse",
    text: "Diagnosi e interventi su telaio, trasmissione, freni e componenti danneggiati.",
  },
  {
    title: "Upgrade su misura",
    text: "Componenti scelti sul tuo stile di guida, non sul catalogo generico.",
  },
  {
    title: "Preparazione gara",
    text: "Set-up da gara: peso, affidabilità e regolazioni fine per il giorno della partenza.",
  },
  {
    title: "Tarature sospensioni",
    text: "Sag, click e pressioni tarati su peso, percorso e sensazioni in sella.",
  },
  {
    title: "Motori Bosch · Shimano · Polini",
    text: "Centro assistenza per e-bike: diagnosi, aggiornamenti e riparazioni specialistiche.",
  },
];

const Officina = () => {
  return (
    <div className="bg-night text-cream">
      <section className="relative min-h-[70svh] flex flex-col">
        <img
          src={imageUrl("/images/officina-3.webp", 2000)}
          alt="Il banco di lavoro dell'officina Wild Bicycle"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/55 to-night/20" />
        <div className="relative z-10 mt-auto px-5 lg:px-10 pb-12 lg:pb-16">
          <p className="eyebrow text-signal">Box tecnico</p>
          <h1 className="headline mt-3 text-[clamp(4rem,12vw,12rem)] leading-[0.82]">
            Officina
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed opacity-90">
            Dal 2013 curiamo bici muscolari ed e-bike a Fiano Romano: manutenzioni,
            riparazioni, upgrade e set-up da gara, con componenti di prima scelta.
          </p>
        </div>
      </section>

      <section className="px-5 lg:px-10 py-16 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="headline text-[clamp(2.5rem,6vw,5rem)]">Cosa facciamo</h2>
          <p className="max-w-md text-base leading-relaxed opacity-75">
            Ogni intervento è studiato sulla bici e su come la guidi. Niente pacchetti
            generici: diagnosi, pezzi giusti, taratura precisa.
          </p>
        </div>

        <ul className="mt-12 grid sm:grid-cols-2 gap-px bg-cream/15 border border-cream/15">
          {servizi.map((servizio) => (
            <li key={servizio.title} className="bg-night p-6 lg:p-8 min-h-36 flex flex-col justify-end">
              <h3 className="text-xl font-semibold leading-tight">{servizio.title}</h3>
              <p className="mt-2 text-base leading-relaxed opacity-70">{servizio.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-signal text-night px-5 lg:px-10 py-16 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <h2 className="headline text-[clamp(2.5rem,7vw,6rem)]">
              Portala<br />in officina.
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed">
              Scrivici o passa in negozio: ti diciamo tempi, costi e cosa conviene fare
              prima.
            </p>
          </div>
          <ButtonLink to="/contatti" variant="night">
            Prenota un intervento
          </ButtonLink>
        </div>
      </section>
    </div>
  );
};

export default Officina;
