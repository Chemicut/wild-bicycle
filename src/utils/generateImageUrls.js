function generateImageUrls(product) {
  // Costruisce il percorso base utilizzando la categoria e l'id del prodotto.
  const basePath = `/images/products-gallery/${product.category}/${product.id}`;
  const total = parseInt(product.imageCount, 10);
  if (isNaN(total) || total < 1) {
    return [];
  }
  const urls = [];
  // La prima immagine (senza suffisso)
  urls.push(`${basePath}.webp`);
  // Le immagini successive aggiungendo il suffisso -n
  for (let i = 1; i < total; i++) {
    urls.push(`${basePath}-${i}.webp`);
  }
  return urls;
}

export default generateImageUrls;