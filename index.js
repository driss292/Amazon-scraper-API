require("dotenv").config();
const express = require("express");
const request = require("request-promise");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Bienvenue sur Amazon Scraper API !!!");
});

app.listen(PORT, () => {
  console.log(`Server OK sur port ${PORT}`);
});
