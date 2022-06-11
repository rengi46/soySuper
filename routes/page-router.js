const {Router} = require("express");
const {onePage,morePage} = require("../controller/page-controller");


const pageRouter = Router();

pageRouter.get("/", onePage)
pageRouter.get("/:id", morePage)

module.exports = pageRouter;