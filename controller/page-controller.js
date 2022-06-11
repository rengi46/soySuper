const getData = require("../services/scraping");


async function onePage(req, res) {
    const data =await getData(1)
    res.send(data);
}


function morePage(req, res) {
    res.send("morePage");
}

module.exports = {
    onePage,
    morePage
}