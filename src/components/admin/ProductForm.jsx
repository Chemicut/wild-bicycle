import { useState } from "react";

const ProductForm = ({ onSubmit }) => {
  // liste di opzioni basate sui dati di riferimento
  const types = ["Muscolare", "Elettrica"];
  const wheelSizes = ["29", "28", "700c"];
  const suspensions = ["Front", "Full", "Rigida"];

  // Elenco delle possibili chiavi per le specifiche tecniche (unione dei campi trovati nel JSON)
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

  const [product, setProduct] = useState({
    id: "",
    name: "",
    brand: "",
    fullprice: "",
    price: "",
    condition: "", // campo aggiunto per la condizione
    type: "",
    wheelSize: "",
    sospensione: "",
    category: "",
    subcategories: [],
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
    // resetta i campi specifici se la categoria cambia
    setProduct({ ...product, category, subcategories: [], specifications: {} });
  };

  const handleSubcategoryChange = (e) => {
    const { value, checked } = e.target;
    setProduct((prev) => {
      const subcategories = checked
        ? [...prev.subcategories, value]
        : prev.subcategories.filter((sub) => sub !== value);
      return { ...prev, subcategories };
    });
  };

  // Nuovo handler per gestire la quantità di immagini
  const handleImageCountChange = (e) => {
    setProduct({ ...product, imageCount: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 border rounded-lg shadow-md bg-white max-w-2xl mx-auto mt-16 space-y-4">
      <h2 className="text-xl font-semibold">Inserisci un nuovo prodotto</h2>
      <div className="flex flex-col">
        <label>ID Prodotto:</label>
        <input 
          type="text"
          name="id"
          value={product.id}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
      </div>
      <div className="flex flex-col">
        <label>Nome Prodotto:</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} required className="border p-2 rounded" />
      </div>
      <div className="flex flex-col">
        <label>Marca:</label>
        <input type="text" name="brand" value={product.brand} onChange={handleChange} required className="border p-2 rounded" />
      </div>
      <div className="flex flex-col">
        <label>Fullprice:</label>
        <input type="text" name="fullprice" value={product.fullprice} onChange={handleChange} required className="border p-2 rounded" />
      </div>
      <div className="flex flex-col">
        <label>Prezzo:</label>
        <input type="number" name="price" value={product.price} onChange={handleChange} required className="border p-2 rounded" />
      </div>
      <div className="flex flex-col">
        <label>Condizione:</label>
        <select name="condition" value={product.condition} onChange={handleChange} required className="border p-2 rounded">
          <option value="">Seleziona una condizione</option>
          <option value="Nuovo">Nuovo</option>
          <option value="Usato">Usato</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label>Categoria:</label>
        <select value={product.category} onChange={handleCategoryChange} required className="border p-2 rounded">
          <option value="">Seleziona una categoria</option>
          {Object.keys(categories).map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      {product.category && (
        <div className="flex flex-col">
          <label>Sottocategorie:</label>
          {categories[product.category].map((sub) => (
            <label key={sub} className="flex items-center gap-2">
              <input type="checkbox" value={sub} checked={product.subcategories.includes(sub)} onChange={handleSubcategoryChange} />
              {sub}
            </label>
          ))}
        </div>
      )}
      {product.category === "Bici" && (
        <>
          <div className="flex flex-col">
            <label>Tipo:</label>
            <select name="type" value={product.type} onChange={handleChange} required className="border p-2 rounded">
              <option value="">Seleziona una tipologia</option>
              {types.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label>Dimensione delle ruote:</label>
            <select name="wheelSize" value={product.wheelSize} onChange={handleChange} required className="border p-2 rounded">
              <option value="">Seleziona una dimensione</option>
              {wheelSizes.map((ws) => (
                <option key={ws} value={ws}>{ws}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label>Sospensione:</label>
            <select name="sospensione" value={product.sospensione} onChange={handleChange} required className="border p-2 rounded">
              <option value="">Seleziona una sospensione</option>
              {suspensions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label>Quantità Immagini:</label>
            <select name="imageCount" value={product.imageCount} onChange={handleImageCountChange} required className="border p-2 rounded">
              <option value="">Seleziona la quantità</option>
              {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label>Descrizione:</label>
            <textarea name="description" value={product.description} onChange={handleChange} className="border p-2 rounded" />
          </div>
          {/* Elenco predefinito delle specifiche tecniche */}
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
                    specifications: { ...product.specifications, [key]: e.target.value },
                  })
                }
                className="border p-2 rounded"
              />
            </div>
          ))}
        </>
      )}

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Salva Prodotto</button>
    </form>
  );
};

export default ProductForm;
