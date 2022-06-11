const {Router} = require("express");
const {onePage} = require("../controller/onePage-controller");

const onePageRouter = Router();

onePageRouter.get("/", onePage)

module.exports = onePageRouter;