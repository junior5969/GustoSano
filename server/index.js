// server/index.js
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Abilita CORS per tutte le origini
app.use(cors());

// Rotta di test per verificare che il server sia attivo
app.get("/", (req, res) => {
  res.send("Server GustoSano attivo");
});

// Tutti i frutti
app.get("/fruit/all", async (req, res) => {
  try {
    const response = await fetch("https://www.fruityvice.com/api/fruit/all");
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Singolo frutto per nome
app.get("/fruit/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const response = await fetch(`https://www.fruityvice.com/api/fruit/${name}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Avvio del server
app.listen(PORT, () => {
  console.log(`✅ Server GustoSano avviato su porta ${PORT}`);
});