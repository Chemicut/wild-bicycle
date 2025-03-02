const express = require("express");
const router = express.Router();
const Product = require("../models/Product"); // Modello Mongoose

// API per ottenere prodotti filtrati per ID
router.get("/products", async (req, res) => {
  try {
    const ids = req.query.ids.split(","); // Converte gli ID in un array
    const products = await Product.find({ _id: { $in: ids } }); // Cerca i prodotti nel database
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Errore nel recupero dei prodotti", error });
  }
});

module.exports = router;
