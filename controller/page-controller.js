const getData = require("../services/scraping");
const {cache} = require("../services/cache");



async function onePage(req, res) {
    let data = cache.get("page1")
    if(data === undefined){
        data =await getData(1)
        cache.set("page1",data)
    }
    res.send(sortData(data));
}


async function morePage(req, res) {
    const id = req.params.id;
    let data = []
    for (let i = 1; i <= id; i++) {
        let dataPage = cache.get("page"+i)
        if(dataPage === undefined){
            dataPage =await getData(i)
            cache.set("page"+i,dataPage)
        }
        data= [...dataPage,...data];
    }
    res.send(sortData(data));
}



function sortData(data){
    return data.sort((a,b)=>{
        return a.rank-b.rank;
    })
}


module.exports = {
    onePage,
    morePage
}