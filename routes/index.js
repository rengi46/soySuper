const pageRouter = require("./page-router");


const routes = (server) => {
    server.use(
        pageRouter
    );
  };
  
  module.exports = routes;