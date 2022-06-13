const getData = require("../services/scraping");

test("dataPage", async () => {
    const data = await getData(4);
    expect(data.length).toBe(30);
    for (let i = 0; i < data.length; i++) {
        expect(data[i].title).toBeDefined();
        expect(data[i].infoPage).toBeDefined();
        expect(data[i].rank).toBeDefined();
        expect(data[i].score).toBeDefined();
        expect(data[i].author).toBeDefined();
        expect(data[i].time).toBeDefined();
        expect(data[i].coments).toBeDefined();
    }
})