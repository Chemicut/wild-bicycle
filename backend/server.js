require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 5000;

// Configurazione della connessione al database
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/notizie", require("./routes/notizie"));

// Test API
app.get('/', (req, res) => {
  res.send('API di Wild Bicycle attiva! 🚴');
});

// Endpoint per ottenere tutti i prodotti
app.get('/api/products', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        p.id, 
        p.name, 
        p.price, 
        p.description, 
        p.brand, 
        p.main_image, 
        ARRAY_AGG(c.name) AS categories
      FROM products p
      LEFT JOIN product_categories pc ON p.id = pc.product_id
      LEFT JOIN categories c ON pc.category_id = c.id
      GROUP BY p.id
      ORDER BY p.id DESC;
    `);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Errore nel recupero dei prodotti:', error);
    res.status(500).json({ error: 'Errore del server' });
  }
});

// Endpoint per ottenere un prodotto specifico
app.get('/api/products/:id', async (req, res) => {
  try {
    const productId = req.params.id;

    const result = await pool.query(`
      SELECT 
        p.id, 
        p.name, 
        p.price, 
        p.description, 
        p.brand, 
        p.main_image, 
        ARRAY_AGG(c.name) AS categories
      FROM products p
      LEFT JOIN product_categories pc ON p.id = pc.product_id
      LEFT JOIN categories c ON pc.category_id = c.id
      WHERE p.id = $1
      GROUP BY p.id;
    `, [productId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Prodotto non trovato" });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Errore nel recupero del prodotto:', error);
    res.status(500).json({ error: 'Errore del server' });
  }
});

// Endpoint per aggiungere un nuovo prodotto
app.post('/api/products', async (req, res) => {
  try {
    const { name, price, description, brand, main_image, categories } = req.body;

    if (!name || !price || !main_image || !categories || categories.length === 0) {
      return res.status(400).json({ error: 'Nome, prezzo, immagine principale e almeno una categoria sono obbligatori.' });
    }

    const result = await pool.query(
      'INSERT INTO products (name, price, description, brand, main_image) VALUES ($1, $2, $3, $4, $5) RETURNING id',
      [name, price, description, brand, main_image]
    );

    const productId = result.rows[0].id;

    for (const categoryId of categories) {
      await pool.query(
        'INSERT INTO product_categories (product_id, category_id) VALUES ($1, $2)',
        [productId, categoryId]
      );
    }

    res.status(201).json({ message: 'Prodotto aggiunto con successo!', productId });

  } catch (error) {
    console.error('Errore nell’inserimento del prodotto:', error);
    res.status(500).json({ error: 'Errore del server' });
  }
});

// 🚀 **NUOVA ROUTE: Protezione reCAPTCHA v3 per il Form Contatti**
app.post("/api/contact", async (req, res) => {
  try {
    const { name, surname, phone, email, subject, message, recaptchaToken } = req.body;

    if (!recaptchaToken) {
      return res.status(400).json({ error: "reCAPTCHA token mancante" });
    }

    // Verifica il token con Google
    const googleVerifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${recaptchaToken}`;
    const googleResponse = await fetch(googleVerifyURL, { method: "POST" });
    const googleData = await googleResponse.json();

    if (!googleData.success || googleData.score < 0.5) {
      return res.status(403).json({ error: "reCAPTCHA non valido" });
    }

    // Simuliamo il salvataggio del messaggio (in futuro, potresti inviare una mail o salvare nel DB)
    console.log("📩 Nuovo messaggio ricevuto:", { name, surname, phone, email, subject, message });

    res.json({ success: true, message: "Messaggio inviato con successo!" });
  } catch (error) {
    console.error("Errore nel form contatti:", error);
    res.status(500).json({ error: "Errore del server" });
  }
});

// Avvio del server
app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
