const routes = require("./routes");

const express = require("express");
const bodyParser= require('body-parser')

const app = express();
app.use(bodyParser.json())

routes(app);

const PORT = 3001;

app.listen(PORT, function () {
  console.log("Servidor corriendo en el puerto 3001");
});


