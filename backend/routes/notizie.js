// backend/routes/notizie.js
const express = require("express");
const pool = require("../db"); // Importa la connessione al database
const router = express.Router();

// Recupera tutte le notizie
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, titolo, descrizione, immagine_anteprima FROM notizie ORDER BY data_pubblicazione DESC");
    res.json(result.rows);
  } catch (err) {
    console.error("Errore nel recupero delle notizie:", err);
    res.status(500).json({ error: "Errore nel server" });
  }
});

module.exports = router;
