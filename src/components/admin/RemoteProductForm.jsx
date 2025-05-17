import { useState } from "react";
import generateImageUrls from "../../utils/generateImageUrls";

const RemoteProductForm = ({ onSubmit }) => {
  // Opzioni fisse
  const types = ["Muscolare", "Elettrica"];
  const wheelSizes = ["29", "28", "700c"];
  const suspensions = ["Front", "Full", "Rigida"];

  // Elenco delle chiavi per le specifiche tecniche
  const technicalKeys = [
    "Telaio",
    "Forcella",
    "Guarnitura",
    "Cassetta",
    "Cambio",
    "Freni",
    "Ruote",
    "Pneumatici",
    "Manubrio",
    "Attacco manubrio",
    "Reggisella",
    "Sella",
    "Ammortizzatore",
    "Motore",
    "Batteria",
    "Batteria aggiuntiva",
    "Cerchi",
    "Manopole",
    "Pedali",
    "Peso",
    "Ruota anteriore",
    "Ruota posteriore",
    "Serie sterzo",
    "Nastro"
  ];

  // Stato iniziale – segue l'ordine di riferimento:
  // id, name, brand, fullprice, price, condition, category, subCategory, type, wheelSize, sospensione, imageCount, description, specifications
  const [product, setProduct] = useState({
    id: "",
    name: "",
    brand: "",
    fullprice: "",
    price: "",
    condition: "",
    category: "",
    subCategory: "",
    type: "",
    wheelSize: "",
    sospensione: "",
    imageCount: "",
    description: "",
    specifications: {},
  });

  const categories = {
    "Bici": ["MTB", "E-MTB", "Corsa", "Gravel", "Ciclocross", "Urban/City", "Kids"],
    "Abbigliamento": ["Giacche", "Maglie", "Intimo", "Pantaloni", "Guanti", "Scarpe", "Calze", "Termico", "Body"],
    "Protezioni": ["Caschi", "Pettorine", "Ginocchia", "Gomiti"],
    "Componenti": ["Freni", "Trasmissione", "Ruote", "Forcelle"],
    "Accessori": ["Luci", "Portaborracce", "Multitool"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    // Resetta sottocategorie e specifiche se la categoria cambia
    setProduct({ ...product, category, subCategory: "", specifications: {} });
  };

  // Per la sottocategoria usiamo radio button (scelta esclusiva)
  const handleSubcategoryChange = (e) => {
    setProduct({ ...product, subCategory: e.target.value });
  };

  // Gestione della quantità di immagini (necessario per generare gli URL)
  const handleImageCountChange = (e) => {
    setProduct({ ...product, imageCount: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit trigger");
    // Genera gli URL per le immagini usando la funzione generateImageUrls
    const imageUrls = generateImageUrls(product);
    // Costruisci l'oggetto da inviare escludendo imageCount
    const { imageCount, ...productWithoutImageCount } = product;
    const productWithImages = {
      ...productWithoutImageCount,
      image: imageUrls[0],         // la prima immagine come principale
      gallery: imageUrls           // il resto come galleria
    };

    try {
      const res = await fetch("/api/addProduct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productWithImages)
      });
      if (!res.ok) {
        console.error("Errore nell'aggiunta del prodotto");
        return;
      }
      const result = await res.json();
      console.log("Prodotto aggiunto:", result);
      if (onSubmit) onSubmit(result);
    } catch (err) {
      console.error("Errore:", err);
    }
  };

  return (
    // Aggiungiamo gli attributi per Netlify Forms
    <form 
      onSubmit={handleSubmit} 
      name="remote-product" 
      data-netlify="true" 
      data-netlify-honeypot="bot-field"
      className="p-6 border rounded-lg shadow-md bg-white max-w-2xl mx-auto mt-16 space-y-4"
    >
      {/* Campo nascosto per il honeypot */}
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="remote-product" />
      <h2 className="text-xl font-semibold">Inserisci un nuovo prodotto</h2>
      {/* ID */}
      <div className="flex flex-col">
        <label>ID Prodotto:</label>
        <input type="text" name="id" value={product.id} onChange={handleChange} required className="border p-2 rounded" />
        <p>Formato: marca-modello-anno (es. lapierre-spicycf89-2024)</p>
      </div>
      {/* Nome */}
      <div className="flex flex-col">
        <label>Nome Prodotto:</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} required className="border p-2 rounded" />
      </div>
      {/* Brand */}
      <div className="flex flex-col">
        <label>Brand:</label>
        <input type="text" name="brand" value={product.brand} onChange={handleChange} required className="border p-2 rounded" />
      </div>
      {/* Fullprice */}
      <div className="flex flex-col">
        <label>Prezzo non scontato:</label>
        <input type="number" name="fullprice" value={product.fullprice} onChange={handleChange} required className="border p-2 rounded" />
        <p>Se non presente, lasciare vuoto</p>
      </div>
      {/* Prezzo */}
      <div className="flex flex-col">
        <label>Prezzo base e/o scontato:</label>
        <input type="number" name="price" value={product.price} onChange={handleChange} required className="border p-2 rounded" />
      </div>
      {/* Condizione */}
      <div className="flex flex-col">
        <label>Condizione:</label>
        <select name="condition" value={product.condition} onChange={handleChange} required className="border p-2 rounded">
          <option value="">Seleziona una condizione</option>
          <option value="Nuovo">Nuovo</option>
          <option value="Usato">Usato</option>
        </select>
      </div>
      {/* Categoria */}
      <div className="flex flex-col">
        <label>Categoria:</label>
        <select value={product.category} onChange={handleCategoryChange} required className="border p-2 rounded">
          <option value="">Seleziona una categoria</option>
          {Object.keys(categories).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      {/* Sottocategorie */}
      {product.category && (
        <div className="flex flex-col">
          <label>Sottocategorie:</label>
          {categories[product.category].map((sub) => (
            <label key={sub} className="flex items-center gap-2">
              <input
                type="radio"
                name="subCategory"
                value={sub}
                checked={product.subCategory === sub}
                onChange={handleSubcategoryChange}
              />
              {sub}
            </label>
          ))}
        </div>
      )}
      {/* Campi specifici per "Bici" */}
      {product.category === "Bici" && (
        <>
          <div className="flex flex-col">
            <label>Tipo:</label>
            <select name="type" value={product.type} onChange={handleChange} required className="border p-2 rounded">
              <option value="">Seleziona una tipologia</option>
              {types.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label>Dimensione delle ruote:</label>
            <select name="wheelSize" value={product.wheelSize} onChange={handleChange} required className="border p-2 rounded">
              <option value="">Seleziona una dimensione</option>
              {wheelSizes.map((ws) => (
                <option key={ws} value={ws}>
                  {ws}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label>Sospensione:</label>
            <select name="sospensione" value={product.sospensione} onChange={handleChange} required className="border p-2 rounded">
              <option value="">Seleziona una sospensione</option>
              {suspensions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </>
      )}
      {/* Quantità Immagini (necessario per generare gli URL) */}
      <div className="flex flex-col">
        <label>Quantità Immagini:</label>
        <select name="imageCount" value={product.imageCount} onChange={handleImageCountChange} required className="border p-2 rounded">
          <option value="">Seleziona la quantità</option>
          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>
      {/* Descrizione */}
      <div className="flex flex-col">
        <label>Descrizione:</label>
        <textarea name="description" value={product.description} onChange={handleChange} className="border p-2 rounded" />
      </div>
      {/* Specifiche Tecniche */}
      <h3 className="text-lg font-semibold mt-4">Specifiche Tecniche</h3>
      {technicalKeys.map((key) => (
        <div key={key} className="flex flex-col">
          <label>{key}:</label>
          <input
            type="text"
            value={product.specifications[key] || ""}
            onChange={(e) =>
              setProduct({
                ...product,
                specifications: { ...product.specifications, [key]: e.target.value }
              })
            }
            className="border p-2 rounded"
          />
        </div>
      ))}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Salva Prodotto</button>
    </form>
  );
};

export default RemoteProductForm;
