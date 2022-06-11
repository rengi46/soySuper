const {Router} = require("express");
const {onePage,morePage} = require("../controller/page-controller");
const {cache} = require("../middleware/cache");

const pageRouter = Router();

pageRouter.get("/",cache, onePage)
pageRouter.get("/:id", morePage)

module.exports = pageRouter;