import express from 'express';
import bodyParser from 'body-parser';
import { addProduct } from '../src/utils/jsonDB.js'; // Importa con estensione .js

const app = express();

app.use(bodyParser.json());

app.post('/api/addProduct', (req, res) => { 
  const newProduct = req.body; 
  console.log("Nuovo prodotto ricevuto:", newProduct); 
  addProduct(newProduct, (err, products) => { 
      if (err) { 
          console.error("Errore in addProduct:", err); 
          return res.status(500).json({ error: err.message }); 
      }
      res.json({ success: true, products });
  }); 
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server in ascolto sulla porta ${PORT}`));