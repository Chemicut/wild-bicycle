import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../data/products.json";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productsData.find((p) => p.id.toString() === id);

  if (!product) {
    return <div>Prodotto non trovato</div>;
  }

  // Gestione immagine attiva e galleria
  const [activeImage, setActiveImage] = useState(product.image);
  const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

  // Filtra le specifiche tecniche
  const techSpecs = product.technicalDetails
    ? Object.entries(product.technicalDetails).filter(([key, value]) => value)
    : [];

  return (
    <main className="bg-background px-4 md:px-20">
      {/* Contenitore responsive in flex-col per dispositivi stretti e flex-row per schermi larghi */}
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        {/* Sezione immagine e miniature */}
        <div className="w-full md:w-1/2">
          {/* Contenitore con dimensione fissa e aspect ratio: */}
          <div className="relative h-64 md:h-96 w-full">
            <img
              src={activeImage}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300"
            />
          </div>
          <div className="flex mt-4 space-x-2 justify-center">
            {gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} thumbnail ${index + 1}`}
                className={`w-16 h-16 object-cover border ${activeImage === img ? "border-primary" : "border-gray-300"} cursor-pointer`}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>
        </div>
        {/* Sezione dettagli prodotto */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl font-semibold mb-4">{product.price} €</p>
          {/* Descrizione, se inserita nel JSON */}
          {product.description && (
            <p className="text-base mb-4">{product.description}</p>
          )}
          <button 
            className="btn btn-primary w-full md:w-1/2 px-4 py-2 rounded cursor-pointer mb-6"
            onClick={() => navigate("/contact")}
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
              {techSpecs.map(([key, value]) => (
                <tr key={key}>
                  <td className="py-2 font-medium">{key}</td>
                  <td className="py-2">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Nessuna specifica tecnica disponibile.</p>
        )}
      </div>
      {/* ...existing footer code... */}
    </main>
  );
};

export default ProductPage;