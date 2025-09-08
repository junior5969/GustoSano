import * as functions from "firebase-functions";
import fetch from "node-fetch";

export const getFruits = functions.https.onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET");

  try {
    const path = req.path; // es: /fruit/all oppure /fruit/apple
    let apiUrl = "https://www.fruityvice.com/api";

    if (path === "/fruit/all") {
      apiUrl += "/fruit/all";
    } else if (path.startsWith("/fruit/")) {
      const name = path.split("/").pop();
      apiUrl += `/fruit/${name}`;
    } else {
      res.status(404).send("Endpoint non trovato");
      return;
    }

    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
