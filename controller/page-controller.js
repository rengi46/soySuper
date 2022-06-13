const getData = require("../services/scraping");
const {cache} = require("../services/cache");



async function onePage(req, res) {
    const data =await getDataByPage(1);
    res.send(sortData(data));
}


async function morePage(req, res) {
    const id = req.params.id;
    if(typeof id !== "number" && id < 0 && id > 30){
        res.status(400).send("Bad request");
    }
    const data =await getDataByPage(id);
    res.send(sortData(data));
}

async function getDataByPage(nPage){
    let data =[]
    for (let i = 1; i <= nPage; i++) {
        let dataPage = cache.get("page"+i)
        if(dataPage === undefined){
            dataPage =await getData(i)
            cache.set("page"+i,dataPage)
        }
        data = [...dataPage,...data];
    }
    return data
}

function sortData(data){
    return data.sort((a,b)=>{
        return a.rank-b.rank;
    })
}


module.exports = {
    onePage,
    morePage,
    getDataByPage
}