import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ButtonLink from "../components/ui/ButtonLink";
import imageUrl from "../utils/imageUrl";

const discipline = [
  { n: "01", title: "Strada", image: "/images/strada.webp" },
  { n: "02", title: "Cross country", image: "/images/xc.webp" },
  { n: "03", title: "Enduro", image: "/images/enduro.webp" },
  { n: "04", title: "Gravel", image: "/images/gravel.webp" },
];

const WildRaceTeam = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const element = document.getElementById(location.hash.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="bg-night text-cream">
      <section className="relative min-h-[85svh] flex flex-col">
        <img
          src={imageUrl("/images/wildraceteam.webp", 2000)}
          alt="Un rider del Wild Race Team in discesa nel bosco"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/50 to-night/15" />
        <div className="relative z-10 mt-auto px-5 lg:px-10 pb-12 lg:pb-16">
          <p className="eyebrow text-signal">Wild Race Team</p>
          <h1 className="headline mt-3 text-[clamp(3.5rem,11vw,11rem)] leading-[0.82]">
            Uniti dalla<br />passione.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed opacity-90">
            Uscite di gruppo, gare, corsi e manutenzione dei sentieri. Quattro discipline,
            una sola squadra a Fiano Romano e Roma Nord.
          </p>
        </div>
      </section>

      <section className="px-5 lg:px-10 py-20 lg:py-28">
        <p className="eyebrow opacity-60">Ordine di partenza</p>
        <ul className="mt-8">
          {discipline.map((d) => (
            <li key={d.n}>
              <div className="group relative flex items-center gap-6 border-t border-cream/20 py-3 lg:py-4">
                <span className="eyebrow w-10 opacity-60">{d.n}</span>
                <span className="headline text-[clamp(3.5rem,10vw,10rem)] leading-[0.9]">
                  {d.title}
                </span>
                <img
                  src={imageUrl(d.image, 600)}
                  alt=""
                  loading="lazy"
                  className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-[85%] aspect-[4/3] object-cover rounded-[14px] opacity-0 scale-95 rotate-2 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
                />
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-2xl text-base lg:text-lg leading-relaxed opacity-75">
          WRT è il punto di riferimento per chi vuole fare della bici più di una passione:
          strada, cross country, enduro e gravel, con uscite, corsi e cura dei trail.
        </p>
      </section>

      <section id="corso-enduro" className="relative min-h-[80vh] flex items-end scroll-mt-8">
        <img
          src={imageUrl("/images/corsoenduro.webp", 2000)}
          alt="I ragazzi del corso di enduro davanti al negozio"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/55 to-night/15" />
        <div className="relative z-10 w-full px-5 lg:px-10 py-14 flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="eyebrow text-signal">Corsi di enduro</p>
            <h2 className="headline mt-3 text-[clamp(3.5rem,9vw,9rem)]">
              Si parte<br />dai 12 anni.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed">
              Tecnica di guida, sicurezza e discese impegnative con istruttori esperti.
              Sessioni di gruppo in base a stagione e meteo, per ogni livello.
            </p>
          </div>
          <ButtonLink to="/contatti" variant="signal">
            Informazioni e iscrizioni
          </ButtonLink>
        </div>
      </section>

      <section className="bg-signal text-night px-5 lg:px-10 py-16 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="eyebrow">Iscrizioni</p>
            <h2 className="headline mt-3 text-[clamp(2.5rem,7vw,6rem)]">
              Entra<br />in squadra.
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed">
              Vuoi uscire con noi, correre o iscriverti a un corso? Scrivici: ti raccontiamo
              calendari e prossime date.
            </p>
          </div>
          <ButtonLink to="/contatti" variant="night">
            Contattaci
          </ButtonLink>
        </div>
      </section>
    </div>
  );
};

export default WildRaceTeam;
