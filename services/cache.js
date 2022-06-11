const NodeCache = require("node-cache");
const cache = new NodeCache ( {stdTTL: 2500}) ;

module.exports = {cache};