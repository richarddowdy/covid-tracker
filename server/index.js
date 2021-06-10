// server/index.js

const { default: axios } = require("axios");
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.get("/api/states/current", async (req, res) => {
  // console.log("HIT");
  try {
    const response = await axios.get("https://api.covidtracking.com/v1/states/current.json");
    return res.json(response.data);
  } catch (e) {
    return res.json({ error: e });
  }
});

app.get("/api/states/daily", async (req, res) => {
  try {
    const response = await axios.get("https://api.covidtracking.com/v1/states/daily.json");
    return res.json(response.data);
  } catch (e) {
    return res.json({ error: e });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
