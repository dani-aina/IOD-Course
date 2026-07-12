const express = require("express");
const app = express();
const app2 = express();

const port = 3000;
const port2 = 3001;

app.get("/products", (req, res) => {
  res.send("This is a products page");
});

app2.get("/users", (req, res) => {
  res.send("This is a users page");
});

app.listen(port, () => {
  console.log("listening on port 300");
});

app2.listen(port2, () => {
  console.log("listening on port 301");
});
