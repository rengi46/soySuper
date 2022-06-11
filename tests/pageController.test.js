const {onePage,morePage} = require("../controller/page-controller");

test("onePage", async () => {
    const data = await onePage();
    expect(data.length).toBe(30);
})

test("morePage", async () => {
    for(let i=1;i<=10;i++){
    const data = await morePage(i);
    expect(data.length).toBe(30*i);
    }
})