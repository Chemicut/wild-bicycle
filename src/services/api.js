export const fetchProductsByIds = async (ids) => {
  try {
    const response = await fetch(`/api/products?ids=${ids.join(",")}`);
    if (!response.ok) throw new Error("Errore nel recupero dei prodotti");
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Errore nel recupero dei prodotti:", error);
    return [];
  }
};
