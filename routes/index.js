const onePgaeRouter = require("./onePage-router");
const morePgaeRouter = require("./morePage-router");

const routes = (server) => {
    server.use(
        onePgaeRouter,
        morePgaeRouter
    );
  };
  
  module.exports = routes;