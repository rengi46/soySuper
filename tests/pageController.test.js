const {getDataByPage} = require("../controller/page-controller");


test("dataPage", async () => {
    for(let i=1;i<=3;i++){
    const data = await getDataByPage(i);
    expect(data.length).toBe(30*i);
    }
})