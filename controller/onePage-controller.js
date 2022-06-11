const getData = require("../services/scraping");

async function onePage(req, res) {
    const data =await getData(1)
    res.send(data);
}

module.exports = {
    onePage
}