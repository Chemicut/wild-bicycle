import fs from 'fs';
import path from 'path';

// Funzione per ottenere in modo dinamico il percorso del file JSON in base alla categoria
function getCategoryFilePath(category) {
  // Risale di una directory per arrivare a wild-bicycle, poi src/data/{category}.json
  return path.join(process.cwd(), '..', 'src', 'data', `${category}.json`);
}

export function addProduct(product, callback) {
  const filePath = getCategoryFilePath(product.category);
  fs.readFile(filePath, 'utf8', (readErr, data) => {
    let products = [];
    if (readErr) {
      if (readErr.code === 'ENOENT') {
        console.log("File non trovato, verrà creato un nuovo file.");
        products = [];
      } else {
        console.error("Errore durante la lettura del file:", readErr);
        return callback(readErr);
      }
    } else {
      try {
        products = JSON.parse(data);
      } catch (parseErr) {
        console.error("Errore nel parsing del JSON:", parseErr);
        return callback(parseErr);
      }
    }
    if (products.find(p => p.id === product.id)) {
      const err = new Error("Prodotto con questo ID già esistente");
      console.error(err);
      return callback(err);
    }
    products.push(product);
    fs.writeFile(filePath, JSON.stringify(products, null, 2), 'utf8', (writeErr) => {
      if (writeErr) {
        console.error("Errore durante la scrittura del file:", writeErr);
        return callback(writeErr);
      }
      callback(null, products);
    });
  });
}