import { Link } from "react-router-dom";
import Logo from "../../components/shared/header/Logo";
import GetDiscount from "../../components/shared/productcards/GetDiscount";
import { products, featuredProducts } from "../../data/products";
import formatPrice from "../../utils/formatPrice";
import imageUrl from "../../utils/imageUrl";

// Bozza A — "Scheda tecnica d'officina"

const mono = "font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.08em]";
const condensed = "[font-stretch:68%] font-[800] uppercase";

const indice = [
  {
    n: "01",
    title: "Negozio",
    text: "Bici nuove e usate, abbigliamento tecnico, protezioni e accessori.",
    to: "/negozio",
    image: "/images/shop.webp",
  },
  {
    n: "02",
    title: "Officina",
    text: "Manutenzione, riparazioni, upgrade e tarature. Centro assistenza Bosch, Shimano e Polini.",
    to: "/officina",
    image: "/images/officina-3.webp",
  },
  {
    n: "03",
    title: "Wild Race Team",
    text: "Strada, cross country, enduro e gravel. Uscite di gruppo e cura dei sentieri.",
    to: "/wildraceteam",
    image: "/images/wildraceteam.webp",
  },
  {
    n: "04",
    title: "Corsi di enduro",
    text: "Per ragazze e ragazzi dai 12 anni, di ogni livello.",
    to: "/wildraceteam#corso-enduro",
    image: "/images/corsoenduro.webp",
  },
];

const servizi = [
  "Manutenzione ordinaria",
  "Riparazioni complesse",
  "Upgrade personalizzati",
  "Preparazione gara",
  "Taratura di sospensioni, trasmissione e freni",
  "Assistenza motori Bosch, Shimano e Polini",
];

const marchi = [
  "lapierre", "transition", "ktm", "bhbikes", "factor", "flyer", "argon18",
  "ridley", "leatt", "dainese", "gaerne", "camelbak", "bryton", "bell",
];

const SchedaLabel = ({ n, children, className = "" }) => (
  <p className={`${mono} flex gap-3 ${className}`}>
    <span className="opacity-50">Scheda {n}</span>
    <span>{children}</span>
  </p>
);

const ProductTag = ({ product, index }) => {
  const specs = [
    ["Ruote", product.wheelSize && `${product.wheelSize}"`],
    ["Sospensione", product.sospensione],
    ["Tipo", product.type],
  ].filter(([, value]) => value);

  return (
    <Link
      to={`/prodotti/${product.id}`}
      className="group flex flex-col border-r border-b border-[#1c1d18]/20 p-5 transition-colors hover:bg-[#e4e0cc]"
    >
      <div className={`${mono} flex justify-between`}>
        <span>N. {String(index + 1).padStart(2, "0")}</span>
        <span className={product.condition === "Usato" ? "text-[#a23b1c]" : "opacity-50"}>
          {product.condition}
        </span>
      </div>
      <div className="aspect-[4/3] my-4 flex items-center justify-center">
        <img
          src={imageUrl(product.images[0], 800)}
          alt={product.name}
          loading="lazy"
          className="max-h-full w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:-translate-y-1"
        />
      </div>
      <h3 className="text-[22px] leading-tight font-semibold">{product.name}</h3>
      <dl className={`${mono} mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1`}>
        {specs.map(([label, value]) => (
          <div key={label} className="contents">
            <dt className="opacity-50">{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-auto pt-6 flex items-end justify-between gap-4">
        <div>
          {product.fullprice && (
            <p className={`${mono} line-through opacity-50`}>{formatPrice(product.fullprice)}</p>
          )}
          <p className={`${condensed} text-[44px] leading-none`}>{formatPrice(product.price)}</p>
        </div>
        {product.fullprice && (
          <span className={`${mono} bg-[#facc15] px-2 py-1 text-[#1c1d18]`}>
            −{GetDiscount(product.fullprice, product.price)}%
          </span>
        )}
      </div>
    </Link>
  );
};

const BozzaA = () => {
  return (
    <div className="bg-[#eeebdc] text-[#1c1d18] font-['Archivo'] antialiased">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=IBM+Plex+Mono:wght@400;500&display=swap"
      />

      {/* Striscia dati */}
      <div className={`${mono} border-b border-[#1c1d18]/20 px-5 lg:px-10 py-2 flex flex-wrap justify-between gap-x-6 gap-y-1`}>
        <span>Wild Bicycle S.r.l. — dal 2013</span>
        <span className="hidden md:inline">42.1687° N · 12.5872° E · Fiano Romano (RM)</span>
        <a href="tel:+390765422652" className="hover:underline">Tel 0765 422 652</a>
      </div>

      {/* Header */}
      <header className="border-b border-[#1c1d18]/20 px-5 lg:px-10 py-5 flex items-center justify-between gap-8">
        <Logo className="text-[#2e5422]" svgClassName="fill-current w-44 lg:w-56 h-auto" />
        <nav aria-label="Navigazione principale" className="hidden lg:block">
          <ul className="flex gap-8 text-[15px] font-medium">
            {indice.slice(0, 3).map((item) => (
              <li key={item.n}>
                <Link to={item.to} className="flex items-baseline gap-2 hover:text-[#2e5422]">
                  <span className={`${mono} opacity-50`}>{item.n}</span>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          to="/contatti"
          className="border border-[#1c1d18] px-4 py-2 text-[15px] font-medium hover:bg-[#1c1d18] hover:text-[#eeebdc] transition-colors"
        >
          Contatti
        </Link>
      </header>

      <main>
        {/* Apertura */}
        <section className="grid lg:grid-cols-12 border-b border-[#1c1d18]/20">
          <div className="lg:col-span-5 px-5 lg:px-10 py-12 lg:py-20 flex flex-col">
            <SchedaLabel n="000">Il negozio</SchedaLabel>
            <h1 className={`${condensed} mt-8 text-[clamp(3.25rem,7.2vw,8rem)] leading-[0.88]`}>
              Bici, officina e sentieri di Roma Nord.
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed">
              Dal 2013 vendiamo, ripariamo e mettiamo a punto biciclette per chi pedala su strada,
              gravel, cross country ed enduro. Siamo a Fiano Romano, in via Giovanni Amendola 1.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                to="/negozio"
                className="bg-[#2e5422] text-[#eeebdc] px-6 py-4 font-medium hover:bg-[#1c1d18] transition-colors"
              >
                Vedi le {products.length} bici in negozio
              </Link>
              <Link to="/contatti" className="font-medium underline underline-offset-4 decoration-1 hover:text-[#2e5422]">
                Porta la bici in officina
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7 relative min-h-[55vh] lg:min-h-0 lg:border-l border-[#1c1d18]/20">
            <img
              src={imageUrl("/images/shop.webp", 1600)}
              alt="Le bici esposte nel negozio Wild Bicycle"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Cartellino d'officina */}
            <div className="absolute left-5 bottom-5 lg:left-10 lg:bottom-10 w-60 -rotate-3 bg-[#facc15] p-4 pt-8 shadow-[0_1px_0_rgba(0,0,0,0.25)]">
              <span className="absolute top-3 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-[#eeebdc] ring-1 ring-[#1c1d18]/30" />
              <p className={`${mono} opacity-60`}>Centro assistenza</p>
              <p className={`${condensed} mt-1 text-3xl leading-none`}>Bosch · Shimano · Polini</p>
            </div>
          </div>
        </section>

        {/* Dati essenziali */}
        <section className="grid grid-cols-2 lg:grid-cols-4 border-b border-[#1c1d18]/20">
          {[
            ["Aperto dal", "2013"],
            ["Discipline", "Strada · Gravel · XC · Enduro"],
            ["Corsi di enduro", "Dai 12 anni"],
            ["Dove", "Fiano Romano (RM)"],
          ].map(([label, value], i) => (
            <div
              key={label}
              className={`px-5 lg:px-10 py-6 border-[#1c1d18]/20 ${i % 2 === 0 ? "border-r" : "lg:border-r"} ${i < 2 ? "border-b lg:border-b-0" : ""} last:border-r-0`}
            >
              <p className={`${mono} opacity-50`}>{label}</p>
              <p className="mt-2 text-xl font-medium">{value}</p>
            </div>
          ))}
        </section>

        {/* Indice */}
        <section className="px-5 lg:px-10 pt-16 lg:pt-24 pb-8">
          <SchedaLabel n="001">Indice</SchedaLabel>
          <ul className="mt-8 border-b border-[#1c1d18]/20">
            {indice.map((item) => (
              <li key={item.n}>
                <Link
                  to={item.to}
                  className="group grid grid-cols-[3rem_1fr_auto] lg:grid-cols-12 items-center gap-4 border-t border-[#1c1d18]/20 py-6 lg:py-8 transition-all hover:bg-[#2e5422] hover:text-[#eeebdc] lg:hover:px-4"
                >
                  <span className={`${mono} lg:col-span-1`}>{item.n}</span>
                  <span className={`${condensed} text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.9] lg:col-span-5`}>
                    {item.title}
                  </span>
                  <span className="hidden lg:block lg:col-span-4 text-[17px] leading-snug opacity-80">{item.text}</span>
                  <span className="hidden lg:block lg:col-span-1 h-16 overflow-hidden">
                    <img
                      src={imageUrl(item.image, 240)}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </span>
                  <span className="text-2xl justify-self-end lg:col-span-1" aria-hidden="true">→</span>
                  <span className="col-span-3 lg:hidden text-base opacity-80 -mt-2">{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* In negozio */}
        <section className="px-5 lg:px-10 py-16 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SchedaLabel n="002">In negozio adesso</SchedaLabel>
              <h2 className={`${condensed} mt-6 text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.9]`}>Bici in evidenza</h2>
            </div>
            <Link to="/negozio" className="font-medium underline underline-offset-4 decoration-1 hover:text-[#2e5422]">
              Tutte le {products.length} bici →
            </Link>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-[#1c1d18]/20">
            {featuredProducts.map((product, index) => (
              <ProductTag key={product.id} product={product} index={index} />
            ))}
          </div>
        </section>

        {/* Officina */}
        <section className="bg-[#2e5422] text-[#eeebdc] grid lg:grid-cols-12">
          <div className="lg:col-span-5 px-5 lg:px-10 py-16 lg:py-24">
            <SchedaLabel n="003">Officina</SchedaLabel>
            <h2 className={`${condensed} mt-6 text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.9]`}>
              Ogni bici esce regolata sul suo ciclista.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed opacity-90">
              Interventi studiati su misura, componenti di prima scelta e tarature fatte in base al tuo
              modo di guidare.
            </p>
            <Link
              to="/contatti"
              className="mt-10 inline-block bg-[#facc15] text-[#1c1d18] px-6 py-4 font-medium hover:bg-[#eeebdc] transition-colors"
            >
              Prenota un intervento
            </Link>
          </div>
          <div className="lg:col-span-7 lg:border-l border-[#eeebdc]/20 px-5 lg:px-10 py-16 lg:py-24">
            <ol className="border-t border-[#eeebdc]/20">
              {servizi.map((servizio, i) => (
                <li key={servizio} className="grid grid-cols-[4rem_1fr] border-b border-[#eeebdc]/20 py-4">
                  <span className={`${mono} opacity-60 pt-1`}>03.{i + 1}</span>
                  <span className="text-xl">{servizio}</span>
                </li>
              ))}
            </ol>
            <img
              src={imageUrl("/images/officina-3.webp", 1200)}
              alt="Il banco di lavoro dell'officina"
              loading="lazy"
              className="mt-10 w-full aspect-[16/7] object-cover"
            />
          </div>
        </section>

        {/* Race team */}
        <section className="grid lg:grid-cols-12 border-b border-[#1c1d18]/20">
          <div className="lg:col-span-7 relative min-h-[50vh]">
            <img
              src={imageUrl("/images/wildraceteam.webp", 1600)}
              alt="Un rider del Wild Race Team in gara"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Tabella numerata da gara */}
            <div className="absolute right-5 top-5 lg:right-10 lg:top-10 w-44 rotate-2 rounded-xl bg-white text-[#1c1d18] overflow-hidden">
              <div className={`${mono} bg-[#2e5422] text-[#eeebdc] px-3 py-1.5 flex justify-between`}>
                <span>WRT</span>
                <span>Fiano R.</span>
              </div>
              <p className={`${condensed} text-center text-[5.5rem] leading-none py-2`}>013</p>
            </div>
          </div>
          <div className="lg:col-span-5 lg:border-l border-[#1c1d18]/20 px-5 lg:px-10 py-16 lg:py-24">
            <SchedaLabel n="004">Wild Race Team</SchedaLabel>
            <h2 className={`${condensed} mt-6 text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.9]`}>
              Uniti dalla passione, guidati dalla velocità.
            </h2>
            <p className="mt-6 text-lg leading-relaxed">
              Il team del negozio: uscite di gruppo, gare, manutenzione dei trail e corsi di enduro per
              ragazze e ragazzi dai 12 anni.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {["Strada", "Cross country", "Enduro", "Gravel"].map((d) => (
                <li key={d} className={`${mono} border border-[#1c1d18]/40 px-3 py-1.5`}>{d}</li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-6">
              <Link to="/wildraceteam" className="font-medium underline underline-offset-4 decoration-1 hover:text-[#2e5422]">
                Scopri il team →
              </Link>
              <Link to="/wildraceteam#corso-enduro" className="font-medium underline underline-offset-4 decoration-1 hover:text-[#2e5422]">
                Corsi di enduro →
              </Link>
            </div>
          </div>
        </section>

        {/* Marchi */}
        <section className="px-5 lg:px-10 py-16">
          <SchedaLabel n="005">Marchi trattati</SchedaLabel>
          <ul className="mt-8 grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 border-l border-t border-[#1c1d18]/20">
            {marchi.map((marchio) => (
              <li key={marchio} className="border-r border-b border-[#1c1d18]/20 h-24 flex items-center justify-center p-4">
                <img
                  src={`/images/brands/${marchio}.svg`}
                  alt={marchio}
                  loading="lazy"
                  className="max-h-12 w-auto grayscale opacity-70 mix-blend-multiply"
                />
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1c1d18] text-[#eeebdc] px-5 lg:px-10 pt-16 pb-8">
        <div className="grid lg:grid-cols-12 gap-10">
          <address className="not-italic lg:col-span-6">
            <p className={`${mono} opacity-50`}>Dove siamo</p>
            <p className={`${condensed} mt-4 text-[clamp(2.25rem,4.5vw,4rem)] leading-[0.9]`}>
              Via Giovanni Amendola 1<br />00065 Fiano Romano (RM)
            </p>
          </address>
          <div className="lg:col-span-3">
            <p className={`${mono} opacity-50`}>Contatti</p>
            <ul className="mt-4 space-y-2 text-lg">
              <li><a href="tel:+390765422652" className="hover:text-[#facc15]">0765 422 652</a></li>
              <li><a href="https://wa.me/393298152115" target="_blank" rel="noopener noreferrer" className="hover:text-[#facc15]">WhatsApp</a></li>
              <li><a href="mailto:vastanodaniele@gmail.com" className="hover:text-[#facc15]">vastanodaniele@gmail.com</a></li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <p className={`${mono} opacity-50`}>Seguici</p>
            <ul className="mt-4 space-y-2 text-lg">
              <li><a href="https://instagram.com/wild_bicycle" target="_blank" rel="noopener noreferrer" className="hover:text-[#facc15]">Instagram</a></li>
              <li><a href="https://facebook.com/wildbicycle1" target="_blank" rel="noopener noreferrer" className="hover:text-[#facc15]">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className={`${mono} mt-16 pt-6 border-t border-[#eeebdc]/20 flex flex-wrap justify-between gap-4 opacity-60`}>
          <span>© {new Date().getFullYear()} Wild Bicycle S.r.l.</span>
          <span>P. IVA IT 12121331008</span>
        </div>
      </footer>
    </div>
  );
};

export default BozzaA;
