const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // abilita tutte le origini

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
