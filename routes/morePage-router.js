const {Router} = require("express");
const {morePage} = require("../controller/morePage-controller");

const morePageRouter = Router();

morePageRouter.get("/:id", morePage)

module.exports = morePageRouter;