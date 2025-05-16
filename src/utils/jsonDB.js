const fs = require('fs');
const path = require('path');

// Restituisce il percorso del file in base alla categoria
function getCategoryFilePath(category) {
  return path.join(__dirname, '..', 'data', `${category}.json`);
}

// Aggiunge un nuovo prodotto al file JSON relativo alla categoria
function addProduct(product, callback) {
  const filePath = getCategoryFilePath(product.category);
  
  fs.readFile(filePath, 'utf8', (readErr, data) => {
    let products = [];
    if (readErr) {
      if (readErr.code === 'ENOENT') {
        // Se il file non esiste, inizializza un array vuoto
        products = [];
      } else {
        return callback(readErr);
      }
    } else {
      try {
        products = JSON.parse(data);
      } catch (parseErr) {
        return callback(parseErr);
      }
    }
    // (Opzionale) Verifica che l'id del prodotto non esista già
    if (products.find(p => p.id === product.id)) {
      return callback(new Error('Prodotto con questo ID già esistente'));
    }
    // Aggiunge il nuovo prodotto
    products.push(product);
    // Scrive il file aggiornato sulla stessa path
    fs.writeFile(filePath, JSON.stringify(products, null, 2), 'utf8', (writeErr) => {
      if (writeErr) {
        return callback(writeErr);
      }
      callback(null, products);
    });
  });
}

module.exports = { addProduct };