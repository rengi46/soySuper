const routes = require("./routes");

const express = require("express");

const app = express();
app.use(express.json())
routes(app);
app.listen(3001, function () {
  console.log("Servidor corriendo en el puerto 3001");
});