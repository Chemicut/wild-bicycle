import { useState } from "react";

const ProductForm = ({ onSubmit }) => {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    price: "",
    category: "",
    subcategories: [],
    images: [""],
    description: "",
    specifications: {},
  });

  const categories = {
    "Bici": ["MTB", "Strada", "Gravel", "Elettriche"],
    "Abbigliamento": ["Caschi", "Maglie", "Pantaloni", "Guanti"],
    "Componenti": ["Freni", "Trasmissione", "Ruote", "Forcelle"],
    "Accessori": ["Luci", "Portaborracce", "Multitool"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
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

  const handleImageChange = (index, value) => {
    const updatedImages = [...product.images];
    updatedImages[index] = value;
    setProduct({ ...product, images: updatedImages });
  };

  const addImageField = () => {
    setProduct({ ...product, images: [...product.images, ""] });
  };

  const handleSpecificationChange = (key, value) => {
    setProduct((prev) => ({
      ...prev,
      specifications: { ...prev.specifications, [key]: value },
    }));
  };

  const addSpecificationField = () => {
    setProduct((prev) => ({
      ...prev,
      specifications: { ...prev.specifications, "": "" },
    }));
  };

  const removeSpecificationField = (key) => {
    const updatedSpecs = { ...product.specifications };
    delete updatedSpecs[key];
    setProduct((prev) => ({ ...prev, specifications: updatedSpecs }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 border rounded-lg shadow-md bg-white max-w-2xl mx-auto mt-16 space-y-4">
      <h2 className="text-xl font-semibold">Inserisci un nuovo prodotto</h2>
      <div className="flex flex-col">
        <label>Nome Prodotto:</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} required className="border p-2 rounded" />
      </div>
      <div className="flex flex-col">
        <label>Marca:</label>
        <input type="text" name="brand" value={product.brand} onChange={handleChange} required className="border p-2 rounded" />
      </div>
      <div className="flex flex-col">
        <label>Prezzo:</label>
        <input type="number" name="price" value={product.price} onChange={handleChange} required className="border p-2 rounded" />
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
      <div className="flex flex-col">
        <label>Immagini (URL):</label>
        {product.images.map((img, index) => (
          <input key={index} type="text" value={img} onChange={(e) => handleImageChange(index, e.target.value)} className="border p-2 rounded mb-2" />
        ))}
        <button type="button" onClick={addImageField} className="bg-blue-500 text-white px-4 py-2 rounded">Aggiungi immagine</button>
      </div>
      <div className="flex flex-col">
        <label>Descrizione:</label>
        <textarea name="description" value={product.description} onChange={handleChange} className="border p-2 rounded" />
      </div>
      <div className="flex flex-col">
        <label>Specifiche Tecniche:</label>
        {Object.keys(product.specifications).map((key, index) => (
          <div key={index} className="flex gap-2 items-center">
            <input type="text" placeholder="Nome specifica (es. Telaio)" value={key} onChange={(e) => {
              const newKey = e.target.value;
              if (newKey) {
                handleSpecificationChange(newKey, product.specifications[key]);
                removeSpecificationField(key);
              }
            }} className="border p-2 rounded" />
            <input type="text" placeholder="Valore (es. Carbonio)" value={product.specifications[key]} onChange={(e) => handleSpecificationChange(key, e.target.value)} className="border p-2 rounded" />
            <button type="button" onClick={() => removeSpecificationField(key)} className="text-red-500">❌</button>
          </div>
        ))}
        <button type="button" onClick={addSpecificationField} className="bg-green-500 text-white px-4 py-2 rounded">➕ Aggiungi Specifica</button>
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Salva Prodotto</button>
    </form>
  );
};

export default ProductForm;
