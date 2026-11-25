import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import GetDiscount from "../components/shared/productcards/GetDiscount";
import ButtonLink from "../components/ui/ButtonLink";
import { contatti } from "../data/contatti";
import { getProductById } from "../data/products";
import formatPrice from "../utils/formatPrice";
import imageUrl from "../utils/imageUrl";

const ProductPage = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!product) {
    return <Navigate to="/negozio" replace />;
  }

  const gallery = product.images?.length ? product.images : [];
  const activeImage = gallery[activeIndex] || gallery[0];
  const techSpecs = (product.specs || []).filter((spec) => spec.label && spec.value);
  const sconto =
    product.fullprice && product.fullprice > product.price
      ? GetDiscount(product.fullprice, product.price)
      : null;

  const whatsappHref = `${contatti.whatsapp.href}?text=${encodeURIComponent(
    `Ciao, sono interessato alla ${product.name}. È ancora disponibile?`
  )}`;

  const meta = [
    product.condition,
    product.subCategory,
    product.sospensione,
    product.wheelSize ? `Ruote ${product.wheelSize}"` : null,
    product.type,
  ].filter(Boolean);

  return (
    <div className="bg-night text-cream">
      <div className="px-5 lg:px-10 pt-8 lg:pt-10">
        <Link to="/negozio" className="eyebrow opacity-60 hover:opacity-100 hover:text-signal">
          ← Torna al negozio
        </Link>
      </div>

      <div className="px-5 lg:px-10 pt-8 pb-16 lg:pb-24 grid lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Galleria */}
        <div className="lg:col-span-7">
          <div className="relative bg-paper rounded-[18px] aspect-[4/3] flex items-center justify-center overflow-hidden">
            {activeImage ? (
              <img
                src={imageUrl(activeImage, 1400)}
                alt={product.name}
                className="max-h-full max-w-full object-contain mix-blend-multiply p-6 lg:p-10"
              />
            ) : (
              <p className="eyebrow text-night/50">Nessuna foto</p>
            )}
            {sconto && (
              <span className="headline absolute right-5 top-5 rotate-6 bg-signal text-night px-3 pt-1.5 pb-1 text-3xl leading-none">
                −{sconto}%
              </span>
            )}
          </div>

          {gallery.length > 1 && (
            <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
              {gallery.map((img, index) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Foto ${index + 1} di ${product.name}`}
                  aria-current={activeIndex === index}
                  className={`shrink-0 w-20 h-20 rounded-md overflow-hidden bg-paper border-2 transition-colors ${
                    activeIndex === index ? "border-signal" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={imageUrl(img, 160)}
                    alt=""
                    className="h-full w-full object-contain mix-blend-multiply p-1"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dettagli */}
        <div className="lg:col-span-5 flex flex-col">
          <p className="eyebrow opacity-60">
            {meta.map((item, i) => (
              <span key={item}>
                {i > 0 && <span className="mx-2 opacity-40">·</span>}
                {item}
              </span>
            ))}
          </p>

          <h1 className="headline mt-4 text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.88]">
            {product.name}
          </h1>

          <div className="mt-8 flex flex-wrap items-end gap-x-6 gap-y-2">
            {product.fullprice && (
              <p className="text-lg line-through opacity-45">{formatPrice(product.fullprice)}</p>
            )}
            <p className="headline text-6xl lg:text-7xl leading-none">
              {formatPrice(product.price)}
            </p>
          </div>

          {product.description && (
            <p className="mt-8 text-base lg:text-lg leading-relaxed opacity-85">
              {product.description}
            </p>
          )}

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={whatsappHref} variant="signal">
              Chiedi su WhatsApp
            </ButtonLink>
            <ButtonLink to="/contatti" variant="outline">
              Contatti
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Scheda tecnica */}
      <section className="border-t border-cream/15 px-5 lg:px-10 py-16 lg:py-20">
        <p className="eyebrow opacity-60">Scheda tecnica</p>
        <h2 className="headline mt-3 text-[clamp(2.5rem,6vw,5rem)]">Specifiche</h2>

        {techSpecs.length > 0 ? (
          <dl className="mt-10 max-w-3xl">
            {techSpecs.map(({ label, value }, index) => (
              <div
                key={`${label}-${index}`}
                className="grid grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] gap-4 border-t border-cream/15 py-4"
              >
                <dt className="eyebrow opacity-60 pt-1">{label}</dt>
                <dd className="text-lg leading-snug">{value}</dd>
              </div>
            ))}
          </dl>
        ) : (
          <p className="mt-8 opacity-70">Nessuna specifica tecnica disponibile.</p>
        )}

        <p className="mt-10 max-w-2xl text-sm leading-relaxed opacity-55">
          I montaggi possono variare in base alla disponibilità dei fornitori e alle esigenze
          del cliente. Contattaci per trovare la soluzione giusta.
        </p>
      </section>
    </div>
  );
};

export default ProductPage;
