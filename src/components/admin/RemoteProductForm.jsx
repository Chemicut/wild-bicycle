import { useState } from "react";
import generateImageUrls from "../../utils/generateImageUrls";

const RemoteProductForm = ({ onSubmit }) => {
  // Opzioni fisse
  const types = ["Muscolare", "Elettrica"];
  const wheelSizes = ["29", "28", "700c", "27.5", "26", "24", "20"];
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
    technicalDetails: {},
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
    setProduct({ ...product, category, subCategory: "", specifications: {} });
  };

  const handleSubcategoryChange = (e) => {
    setProduct({ ...product, subCategory: e.target.value });
  };

  const handleImageCountChange = (e) => {
    setProduct({ ...product, imageCount: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // intercetta per computare i dati

    console.log("Submit trigger");
    const imageUrls = generateImageUrls(product);
    const { imageCount, ...productWithoutImageCount } = product;
    const productWithImages = {
      ...productWithoutImageCount,
      image: imageUrls[0],
      gallery: imageUrls
    };

    // Inseriamo il prodotto in un campo hidden in formato JSON
    const hiddenInput = document.getElementById("productData");
    if (hiddenInput) {
      hiddenInput.value = JSON.stringify(productWithImages);
    }

    // Procedura di submit standard, che invierà i dati a Formspree
    e.target.submit();
  };

  return (
    <div className="bg-background">
      <form 
        method="POST"
        action="https://formspree.io/f/xovdbvjb" 
        onSubmit={handleSubmit}
        className="p-6 border rounded-lg shadow-md bg-white max-w-2xl mx-auto mt-16 space-y-4"
      >
        {/* Campo hidden per redirect dopo l'invio, opzionale */}
        <input type="hidden" name="_next" value="/thankyou" />
        {/* Campo hidden per inviare il JSON */}
        <input type="hidden" id="productData" name="productData" />
        
        <h2 className="text-xl font-semibold">Inserisci un nuovo prodotto</h2>
        {/* ID Prodotto */}
        <div className="flex flex-col">
          <label>ID Prodotto:</label>
          <input type="text" name="id" value={product.id} onChange={handleChange} required className="border p-2 rounded" />
          <p>Formato: marca-modello-anno (es. lapierre-spicycf89-2024)</p>
        </div>
        {/* Nome Prodotto */}
        <div className="flex flex-col">
          <label>Nome Prodotto:</label>
          <input type="text" name="name" value={product.name} onChange={handleChange} required className="border p-2 rounded" />
        </div>
        {/* Brand */}
        <div className="flex flex-col">
          <label>Brand:</label>
          <input type="text" name="brand" value={product.brand} onChange={handleChange} required className="border p-2 rounded" />
        </div>
        {/* Prezzo non scontato */}
        <div className="flex flex-col">
          <label>Prezzo non scontato:</label>
          <input type="number" name="fullprice" value={product.fullprice} onChange={handleChange} required className="border p-2 rounded" />
          <p>Se non presente, lasciare vuoto</p>
        </div>
        {/* Prezzo base/scontato */}
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
              <option key={cat} value={cat}>{cat}</option>
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
          </>
        )}
        {/* Quantità immagini */}
        <div className="flex flex-col">
          <label>Quantità Immagini:</label>
          <select name="imageCount" value={product.imageCount} onChange={handleImageCountChange} required className="border p-2 rounded">
            <option value="">Seleziona la quantità</option>
            {[1, 2, 3, 4, 5, 6, 7].map((n) => (
              <option key={n} value={n}>{n}</option>
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
              value={product.technicalDetails[key] || ""}
              onChange={(e) =>
                setProduct({
                  ...product,
                  technicalDetails: { ...product.technicalDetails, [key]: e.target.value }
                })
              }
              className="border p-2 rounded"
            />
          </div>
        ))}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Salva Prodotto</button>
      </form>
    </div>
  );
};

export default RemoteProductForm;
