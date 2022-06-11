const routes = require("./routes");

const express = require("express");
const bodyParser= require('body-parser')

const app = express();
app.use(bodyParser.json())
routes(app);
app.listen(3001, function () {
  console.log("Servidor corriendo en el puerto 3001");
});