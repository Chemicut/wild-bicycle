import { Link } from "react-router-dom";
import ButtonLink from "../components/ui/ButtonLink";
import ProductCard from "../components/shop/ProductCard";
import { products, featuredProducts } from "../data/products";
import imageUrl from "../utils/imageUrl";

const discipline = [
  { n: "01", title: "Strada", image: "/images/strada.webp" },
  { n: "02", title: "Cross country", image: "/images/xc.webp" },
  { n: "03", title: "Enduro", image: "/images/enduro.webp" },
  { n: "04", title: "Gravel", image: "/images/gravel.webp" },
];

const servizi = [
  "Manutenzione ordinaria",
  "Riparazioni complesse",
  "Upgrade su misura",
  "Preparazione gara",
  "Tarature sospensioni",
  "Motori Bosch · Shimano · Polini",
];

const Home = () => {
  return (
    <div className="bg-night text-cream">
      {/* Apertura */}
      <section className="relative min-h-[100svh] flex flex-col">
        <img
          src={imageUrl("/images/wildraceteam.webp", 2000)}
          alt="Un rider del Wild Race Team in discesa nel bosco"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-night to-transparent" />

        <div className="relative z-10 mt-auto px-5 lg:px-10 pb-10">
          <p className="eyebrow text-signal">Negozio · Officina · Race team — Roma Nord</p>
          <h1 className="headline mt-4 text-[clamp(4.5rem,13vw,14rem)] leading-[0.82]">
            Dalla strada<br />al gravity.
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <ButtonLink to="/negozio">{products.length} bici in negozio</ButtonLink>
            <p className="max-w-md text-base leading-relaxed opacity-85">
              Dal 2013 vendiamo, ripariamo e prepariamo bici per strada, gravel, cross country ed enduro.
            </p>
          </div>
        </div>
      </section>

      {/* Discipline */}
      <section className="px-5 lg:px-10 py-20 lg:py-28">
        <p className="eyebrow opacity-60">Ordine di partenza</p>
        <ul className="mt-8">
          {discipline.map((d) => (
            <li key={d.n}>
              <Link
                to="/wildraceteam"
                className="group relative flex items-center gap-6 border-t border-cream/20 py-3 lg:py-4 hover:text-signal"
              >
                <span className="eyebrow w-10 opacity-60">{d.n}</span>
                <span className="headline text-[clamp(3.5rem,10vw,10rem)] leading-[0.9]">{d.title}</span>
                <img
                  src={imageUrl(d.image, 600)}
                  alt=""
                  loading="lazy"
                  className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-[85%] aspect-[4/3] object-cover rounded-[14px] opacity-0 scale-95 rotate-2 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Bici in evidenza */}
      <section className="px-5 lg:px-10 pb-20 lg:pb-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow opacity-60">Griglia di partenza</p>
            <h2 className="headline mt-3 text-[clamp(3rem,7vw,7rem)]">In negozio</h2>
          </div>
          <Link to="/negozio" className="eyebrow border-b-2 border-signal pb-1 hover:text-signal">
            Tutte le {products.length} bici
          </Link>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* Officina */}
      <section className="bg-signal text-night px-5 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-6">
          <p className="eyebrow">Box tecnico</p>
          <h2 className="headline mt-3 text-[clamp(4rem,11vw,11rem)] leading-[0.82]">Officina</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed">
            Ogni intervento è studiato sulla bici e su come la guidi. Componenti di prima scelta e
            tarature precise, dalla manutenzione alla preparazione gara.
          </p>
          <ButtonLink to="/contatti" variant="night" className="mt-8">
            Prenota un intervento
          </ButtonLink>
        </div>
        <ul className="lg:col-span-6 grid sm:grid-cols-2 gap-px bg-night/25 self-end border border-night/25">
          {servizi.map((servizio, i) => (
            <li key={servizio} className="bg-signal p-5 min-h-28 flex flex-col justify-between">
              <span className="headline text-3xl leading-none opacity-40">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-lg font-semibold leading-tight mt-4">{servizio}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Corsi */}
      <section className="relative min-h-[80vh] flex items-end">
        <img
          src={imageUrl("/images/corsoenduro.webp", 2000)}
          alt="I ragazzi del corso di enduro davanti al negozio"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/50 to-night/10" />
        <div className="relative z-10 w-full px-5 lg:px-10 py-14 flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="eyebrow text-signal">Corsi di enduro</p>
            <h2 className="headline mt-3 text-[clamp(3.5rem,9vw,9rem)]">
              Si parte<br />dai 12 anni.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed">
              Tecnica di guida, sicurezza e discese impegnative con istruttori esperti. Sessioni di
              gruppo in base a stagione e meteo, per ogni livello.
            </p>
          </div>
          <ButtonLink to="/wildraceteam#corso-enduro" variant="signal">
            Informazioni e iscrizioni
          </ButtonLink>
        </div>
      </section>
    </div>
  );
};

export default Home;
