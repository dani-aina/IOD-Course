const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/calculator/add", (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = num1 + num2;
  res.json({ result: result });
});

app.get("/calculator/subtract", (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = num1 - num2;
  res.json({ result: result });
});

app.get("/calculator/multiply", (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = num1 * num2;
  res.json({ result: result });
});

app.get("/calculator/divide", (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = num1 / num2;
  res.json({ result: result });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
