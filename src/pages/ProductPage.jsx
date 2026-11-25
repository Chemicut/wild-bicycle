import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../data/products";
import GetDiscount from "../components/shared/productcards/GetDiscount";
import formatPrice from "../utils/formatPrice";
import imageUrl from "../utils/imageUrl";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const [activeImage, setActiveImage] = useState(product?.images[0]);

  if (!product) {
    return <div>Prodotto non trovato</div>;
  }

  const gallery = product.images;
  const techSpecs = product.specs.filter((spec) => spec.label && spec.value);

  return (
    <main className="bg-background px-4 py-10 md:px-20">
      {/* Contenitore responsive in flex-col per dispositivi stretti e flex-row per schermi larghi */}
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        {/* Sezione immagine e miniature */}
        <div className="w-full lg:w-1/2 p-4">
          {/* Contenitore con dimensione fissa e aspect ratio: */}
          <div className="relative w-full h-96 md:h-[500px] ">
            <img
              src={imageUrl(activeImage, 1400)}
              alt={product.name}
              className="absolute inset-0 w-full max-h-full object-contain transition-transform duration-300 bg-white"
            />
          </div>
          <div className="flex mt-4 space-x-2 overflow-x-auto lg:justify-center">
            {gallery.map((img, index) => (
              <img
                key={img}
                src={imageUrl(img, 160)}
                alt={`${product.name} thumbnail ${index + 1}`}
                className={`flex-shrink-0 w-16 h-16 object-cover border ${activeImage === img ? "border-primary" : "border-gray-300"} cursor-pointer`}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>
        </div>
        {/* Sezione dettagli prodotto */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-4">
            {product.name}
            {product.condition === "Usato" && (
            <span className="ml-10 bg-primary text-white text-lg font-bold px-4 py-2 rounded">
              Usato
            </span>
            )}
          </h1>

          {/* Prezzo e sconto */}
          <div className="w-full xl:w-1/2 flex justify-between items-center py-4 font-semibold">
            {product.fullprice ? (
              <>
                <div className="flex items-center gap-4">
                  <p className="text-gray-600 line-through">{formatPrice(product.fullprice)}</p>
                  <p className="text-black text-lg">{formatPrice(product.price)}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-black text-lg underline">Sconto del {GetDiscount(product.fullprice, product.price)}%</p>
                </div>
              </>
            ) : (
              <div className="flex items-center">
                <p className="text-black text-lg">{formatPrice(product.price)}</p>
              </div>
            )}
          </div>
          {/* Descrizione, se inserita nel JSON */}
          {product.description && (
            <p className="text-base mb-8">{product.description}</p>
          )}
          <button 
            className="btn btn-primary w-full lg:w-1/2 px-4 py-2 rounded cursor-pointer mb-6 text-xl"
            onClick={() => navigate("/contatti")}
          >
            Scopri le disponibilità
          </button>
        </div>
      </div>
      {/* Scheda tecniche */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Specifiche Tecniche</h2>
        {techSpecs.length > 0 ? (
          <table className="w-full">
            <tbody>
              {techSpecs.map(({ label, value }) => (
                <tr key={label}>
                  <td className="py-2 font-medium">{label}</td>
                  <td className="py-2">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Nessuna specifica tecnica disponibile.</p>
        )}
      </div>
      <div className="mt-6 text-center text-lg ">
        Nota: I montaggi possono variare in base alla disponibilità dei fornitori e alle esigenze del cliente. Contattaci per trovare la soluzione perfetta per te.
      </div>
    </main>
  );
};

export default ProductPage;