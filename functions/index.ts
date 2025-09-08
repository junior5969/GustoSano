import * as functions from "firebase-functions";
import fetch from "node-fetch";

export const getFruits = functions.https.onRequest(async (req, res) => {
  try {
    const response = await fetch("https://www.fruityvice.com/api/fruit/all");
    const data = await response.json();

    // Permette richieste dal client
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET");
    res.json(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Per frutto singolo
export const getSingleFruit = functions.https.onRequest(async (req, res) => {
  const name = req.path.split('/').pop();
  try {
    const response = await fetch(`https://www.fruityvice.com/api/fruit/${name}`);
    const data = await response.json();

    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET");
    res.json(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
