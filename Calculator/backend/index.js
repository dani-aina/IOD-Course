const express = require("express");
const path = require("path");
const {
  add,
  subtract,
  multiply,
  divide,
} = require("./controllers/calculatorControllers");
const app = express();

app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/calculator/add", add);

app.get("/calculator/subtract", subtract);

app.get("/calculator/multiply", multiply);

app.get("/calculator/divide", divide);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
