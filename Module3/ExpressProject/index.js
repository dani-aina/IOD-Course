const express = require("express");
const routes = require("./routes/allRoutes");

const app = express();

const port = 3000;

app.use("/", routes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
