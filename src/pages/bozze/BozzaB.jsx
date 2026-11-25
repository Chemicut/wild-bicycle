import { Link } from "react-router-dom";
import Logo from "../../components/shared/header/Logo";
import GetDiscount from "../../components/shared/productcards/GetDiscount";
import { products, featuredProducts } from "../../data/products";
import formatPrice from "../../utils/formatPrice";
import imageUrl from "../../utils/imageUrl";

// Bozza B — "Numero di gara / poster"

const display = "font-['Tanker'] uppercase font-normal";
const label = "text-[12px] uppercase tracking-[0.14em] font-semibold";

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

const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

// Tabella da gara con i fori per le fascette
const Plate = ({ number, top, bottom, className = "" }) => (
  <div className={`relative w-56 rounded-[18px] bg-[#f6f4ea] text-[#13200f] overflow-hidden shadow-[0_2px_0_rgba(0,0,0,0.35)] ${className}`}>
    <div className={`${label} bg-[#2e5422] text-[#f6f4ea] px-4 py-2 flex justify-between`}>
      <span>{top}</span>
      <span>WRT</span>
    </div>
    <p className={`${display} text-center text-[7.5rem] leading-[0.95] pt-3`}>{number}</p>
    <p className={`${label} text-center pb-4 opacity-70`}>{bottom}</p>
    {["left-4", "left-1/2 -translate-x-1/2", "right-4"].map((pos) => (
      <span key={pos} className={`absolute bottom-2 ${pos} h-2 w-2 rounded-full bg-[#13200f]/70`} />
    ))}
  </div>
);

const ProductStart = ({ product, index }) => (
  <Link
    to={`/prodotti/${product.id}`}
    className="group relative flex flex-col bg-[#f6f4ea] text-[#13200f] rounded-[18px] overflow-hidden"
  >
    <div className="flex items-start justify-between px-5 pt-4">
      <span className={`${display} text-6xl leading-none`}>{String(index + 1).padStart(2, "0")}</span>
      <span className={`${label} mt-2 ${product.condition === "Usato" ? "bg-[#13200f] text-[#f6f4ea] px-2 py-1" : "opacity-60"}`}>
        {product.condition}
      </span>
    </div>
    <div className="aspect-[4/3] px-6 flex items-center justify-center">
      <img
        src={imageUrl(product.images[0], 800)}
        alt={product.name}
        loading="lazy"
        className="max-h-full w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.04] group-hover:-rotate-1"
      />
    </div>
    <div className="mt-auto border-t-2 border-dashed border-[#13200f]/25 px-5 py-4 flex items-end justify-between gap-3">
      <div>
        <h3 className="text-lg font-semibold leading-tight">{product.name}</h3>
        {product.fullprice && (
          <p className="text-sm line-through opacity-50 mt-1">{formatPrice(product.fullprice)}</p>
        )}
      </div>
      <p className={`${display} text-4xl leading-none whitespace-nowrap`}>{formatPrice(product.price)}</p>
    </div>
    {product.fullprice && (
      <span className={`${display} absolute right-4 top-14 rotate-6 bg-[#facc15] px-3 pt-1.5 pb-1 text-2xl leading-none`}>
        −{GetDiscount(product.fullprice, product.price)}%
      </span>
    )}
  </Link>
);

const BozzaB = () => {
  return (
    <div className="relative bg-[#13200f] text-[#eeebdc] font-['Switzer'] antialiased overflow-x-hidden">
      <link
        rel="stylesheet"
        href="https://api.fontshare.com/v2/css?f[]=tanker@400&f[]=switzer@400,500,600&display=swap"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.09] mix-blend-overlay"
        style={{ backgroundImage: grain }}
      />

      {/* Apertura */}
      <section className="relative min-h-[100svh] flex flex-col">
        <img
          src={imageUrl("/images/wildraceteam.webp", 2000)}
          alt="Un rider del Wild Race Team in discesa nel bosco"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#13200f]/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#13200f] to-transparent" />

        <header className="relative z-10 px-5 lg:px-10 py-6 flex items-center justify-between">
          <Logo className="text-[#eeebdc]" svgClassName="fill-current w-44 lg:w-56 h-auto" />
          <nav aria-label="Navigazione principale" className="hidden lg:block">
            <ul className={`${label} flex items-center gap-8`}>
              <li><Link to="/negozio" className="hover:text-[#facc15]">Negozio</Link></li>
              <li><Link to="/officina" className="hover:text-[#facc15]">Officina</Link></li>
              <li><Link to="/wildraceteam" className="hover:text-[#facc15]">Race Team</Link></li>
              <li>
                <Link to="/contatti" className="bg-[#facc15] text-[#13200f] rounded-md px-4 py-2.5 hover:bg-[#eeebdc]">
                  Contatti
                </Link>
              </li>
            </ul>
          </nav>
          <Link to="/contatti" className={`${label} lg:hidden bg-[#facc15] text-[#13200f] rounded-md px-3 py-2`}>
            Contatti
          </Link>
        </header>

        <div className="absolute z-10 right-3 top-20 sm:right-6 sm:top-24 lg:right-16 lg:top-32 rotate-[5deg] scale-[0.45] sm:scale-75 lg:scale-100 origin-top-right">
          <Plate number="013" top="Fiano Romano" bottom="Dal 2013" />
        </div>

        <div className="relative z-10 mt-auto px-5 lg:px-10 pb-10">
          <p className={`${label} text-[#facc15]`}>Negozio · Officina · Race team — Roma Nord</p>
          <h1 className={`${display} mt-4 text-[clamp(4.5rem,13vw,14rem)] leading-[0.82]`}>
            Dalla strada<br />al gravity.
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              to="/negozio"
              className={`${label} bg-[#eeebdc] text-[#13200f] rounded-md px-6 py-4 hover:bg-[#facc15] transition-colors`}
            >
              {products.length} bici in negozio
            </Link>
            <p className="max-w-md text-base leading-relaxed opacity-85">
              Dal 2013 vendiamo, ripariamo e prepariamo bici per strada, gravel, cross country ed enduro.
            </p>
          </div>
        </div>
      </section>

      {/* Discipline */}
      <section className="px-5 lg:px-10 py-20 lg:py-28">
        <p className={`${label} opacity-60`}>Ordine di partenza</p>
        <ul className="mt-8">
          {discipline.map((d) => (
            <li key={d.n}>
              <Link
                to="/wildraceteam"
                className="group relative flex items-center gap-6 border-t border-[#eeebdc]/20 py-3 lg:py-4 hover:text-[#facc15]"
              >
                <span className={`${label} w-10 opacity-60`}>{d.n}</span>
                <span className={`${display} text-[clamp(3.5rem,10vw,10rem)] leading-[0.9]`}>{d.title}</span>
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

      {/* Bici */}
      <section className="px-5 lg:px-10 pb-20 lg:pb-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className={`${label} opacity-60`}>Griglia di partenza</p>
            <h2 className={`${display} mt-3 text-[clamp(3rem,7vw,7rem)] leading-[0.85]`}>In negozio</h2>
          </div>
          <Link to="/negozio" className={`${label} border-b-2 border-[#facc15] pb-1 hover:text-[#facc15]`}>
            Tutte le {products.length} bici
          </Link>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProducts.map((product, index) => (
            <ProductStart key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* Officina */}
      <section className="bg-[#facc15] text-[#13200f] px-5 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-6">
          <p className={label}>Box tecnico</p>
          <h2 className={`${display} mt-3 text-[clamp(4rem,11vw,11rem)] leading-[0.82]`}>Officina</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed">
            Ogni intervento è studiato sulla bici e su come la guidi. Componenti di prima scelta e
            tarature precise, dalla manutenzione alla preparazione gara.
          </p>
          <Link
            to="/contatti"
            className={`${label} mt-8 inline-block bg-[#13200f] text-[#facc15] rounded-md px-6 py-4 hover:bg-[#2e5422] transition-colors`}
          >
            Prenota un intervento
          </Link>
        </div>
        <ul className="lg:col-span-6 grid sm:grid-cols-2 gap-px bg-[#13200f]/25 self-end border border-[#13200f]/25">
          {servizi.map((servizio, i) => (
            <li key={servizio} className="bg-[#facc15] p-5 min-h-28 flex flex-col justify-between">
              <span className={`${display} text-3xl leading-none opacity-40`}>{String(i + 1).padStart(2, "0")}</span>
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#13200f] via-[#13200f]/50 to-[#13200f]/10" />
        <div className="relative z-10 w-full px-5 lg:px-10 py-14 flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className={`${label} text-[#facc15]`}>Corsi di enduro</p>
            <h2 className={`${display} mt-3 text-[clamp(3.5rem,9vw,9rem)] leading-[0.85]`}>
              Si parte<br />dai 12 anni.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed">
              Tecnica di guida, sicurezza e discese impegnative con istruttori esperti. Sessioni di
              gruppo in base a stagione e meteo, per ogni livello.
            </p>
          </div>
          <Link
            to="/wildraceteam#corso-enduro"
            className={`${label} bg-[#facc15] text-[#13200f] rounded-md px-6 py-4 hover:bg-[#eeebdc] transition-colors`}
          >
            Informazioni e iscrizioni
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-5 lg:px-10 pt-20 pb-8">
        <p className={`${label} opacity-60`}>Ritrovo</p>
        <address className="not-italic">
          <p className={`${display} mt-3 text-[clamp(3rem,8vw,8rem)] leading-[0.85]`}>
            Via Giovanni Amendola 1
          </p>
          <p className="mt-3 text-xl opacity-80">00065 Fiano Romano (RM)</p>
        </address>
        <ul className={`${label} mt-12 flex flex-wrap gap-3`}>
          <li><a href="tel:+390765422652" className="block border border-[#eeebdc]/40 rounded-md px-4 py-3 hover:bg-[#eeebdc] hover:text-[#13200f]">0765 422 652</a></li>
          <li><a href="https://wa.me/393298152115" target="_blank" rel="noopener noreferrer" className="block border border-[#eeebdc]/40 rounded-md px-4 py-3 hover:bg-[#eeebdc] hover:text-[#13200f]">WhatsApp</a></li>
          <li><a href="mailto:vastanodaniele@gmail.com" className="block border border-[#eeebdc]/40 rounded-md px-4 py-3 hover:bg-[#eeebdc] hover:text-[#13200f]">Email</a></li>
          <li><a href="https://instagram.com/wild_bicycle" target="_blank" rel="noopener noreferrer" className="block border border-[#eeebdc]/40 rounded-md px-4 py-3 hover:bg-[#eeebdc] hover:text-[#13200f]">Instagram</a></li>
          <li><a href="https://facebook.com/wildbicycle1" target="_blank" rel="noopener noreferrer" className="block border border-[#eeebdc]/40 rounded-md px-4 py-3 hover:bg-[#eeebdc] hover:text-[#13200f]">Facebook</a></li>
        </ul>
        <div className="mt-16 pt-6 border-t border-[#eeebdc]/20 flex flex-wrap justify-between gap-4 text-sm opacity-60">
          <span>© {new Date().getFullYear()} Wild Bicycle S.r.l.</span>
          <span>P. IVA IT 12121331008</span>
        </div>
      </footer>
    </div>
  );
};

export default BozzaB;
