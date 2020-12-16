import express from "express";
import data from "./data";

const app = express();

app.get("/api/product", (req, res) => {
  res.send(data.products);
});

app.listen(5000, () => {
  console.log("helllo");
});
