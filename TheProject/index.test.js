const indexModule = require("./index");

describe("test dom element creation", () => {

    it("should create a html element", () => {
        let headerElem = indexModule.create.header("TEST");
        expect(headerElem).toBeTruthy();
    });

    it("Should create a h2 element with text supplied", () => {
        const text = "TEST";
        let headerElem = indexModule.create.header(text);
        expect(headerElem.innerHTML).toBe(text);
    });

    it("Should create a paragraph elem with text supplied", () => {
        const text = "TEST";
        let pElem = indexModule.create.paragraph(text);
        expect(pElem.innerHTML).toBe(text);
    });

    it("Should create an image elem with the url supplied", () => {
        const urlStr = "https://localhost:80/sample";
        let imgElem = indexModule.create.image(urlStr);
        expect(imgElem.src).toBe(urlStr);
    });
})