// Ogni bici è un file in src/content/bici, gestito da Pages CMS (.pages.yml).
// Il nome del file è l'id usato nell'URL /prodotti/:id.
const files = import.meta.glob("../content/bici/*.json", { eager: true, import: "default" });

const allProducts = Object.entries(files).map(([path, data]) => ({
  id: path.split("/").pop().replace(/\.json$/, ""),
  ...data,
  images: data.images || [],
  specs: data.specs || [],
}));

export const products = allProducts.filter((product) => product.published !== false);

export const featuredProducts = products.filter((product) => product.featured);

export const getProductById = (id) => products.find((product) => product.id === id);
