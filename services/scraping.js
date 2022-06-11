const puppeteer = require('puppeteer');

async function  getData(page) {
    let url = "https://news.ycombinator.com/news?p="
    const browser = await puppeteer.launch({
        headless: true,
    });
    const page1=await browser.newPage();
    await page1.goto(url+page);
    await page1.waitForSelector('.itemlist');
    const data =await page1.evaluate(() => {
        //cojemos el selcector de los titulos
        let header = document.querySelectorAll('.athing');
        let headerArray = Array.from(header);
        //cojemos el titulo y la pagina de cada noticia con la clase athing
        let headerValues = headerArray.map(function(item){
            let title= item.querySelector('.titlelink');
            if(title !== null){
                title= title.innerText;
            }

            let infoPage = item.querySelector('.sitestr');
            if(infoPage !== null){
                infoPage= infoPage.innerText;
            }

            let rank = item.querySelector('.rank');
            if(rank !== null){
                rank= rank.innerText;
            }
            return {title,infoPage,rank};
        })
        //cojemos el selcector de subText
        let substext = document.querySelectorAll('.subtext');
        let substextArray = Array.from(substext);
        //cojemos los points , el autor, la fecha y los comentarios de cada noticia con la clase subtext
        let substextValues = substextArray.map(function(item){
            let score = item.querySelector('.score');
            if(score !== null){
                score = score.innerText;
            }

            let author = item.querySelector('.hnuser');
            if(author !== null){
                author = author.innerText;
            }

            let time = item.querySelector('.age a');
            if(time !== null){
                time = time.innerText;
            }

            let coments = item.querySelector('.subtext > a[href^="item?id="]');
            if(coments !== null){
                coments = coments.innerText;
            }

            return {score,author,time,coments};
        })
        // juntamos todos los datos con un solo objeto
        const data = headerValues.map((item,index) => {
            return {...item,...substextValues[index]}
        });
        return data;
    });
    await browser.close();
    return data;
}

module.exports = getData;