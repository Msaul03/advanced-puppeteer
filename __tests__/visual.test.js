const puppeteer = require('puppeteer');
const {toMatchImageSnapshot} = require("jest-image-snapshot")

expect.extend({toMatchImageSnapshot})

describe('Capturas de pantallas', () => {
    let browser;
    let page;
    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
        });

        page = await browser.newPage();
        await page.goto('https://platzi.com');
    }, 20000);

    afterAll(async () => {
        await browser.close();
    });
it('Snapshot de toda la pagina', async() => {
    await page.waitForSelector('img')

    const screenshot = await page.screenshot()

    expect(screenshot).toMatchImageSnapshot()
},350000)

test('Snapshot de solo un elemento', async() => {

    const image = await page.waitForSelector('img')

    const screenshot = await page.screenshot()

    expect(screenshot).toMatchImageSnapshot({
        failureThreshold:0.05,
        failureThresholdType:'percent'
    })
},350000)

test('Snapshot de un celular', async() => {

    const tablet =puppeteer.devices['iPad Pro']
    await page.emulate(tablet)
    const image = await page.waitForSelector('img')

    const screenshot = await page.screenshot()

    expect(screenshot).toMatchImageSnapshot({
        failureThreshold:0.05,
        failureThresholdType:'percent'
    })
},350000)
test('Remover la imagen antes de crear snapshot ', async() => {

    await page.waitForSelector('img')

    await page.evaluate(()=>(document.querySelectorAll('img') || []).forEach((img) =>img.remove()))

    const screenshot = await page.screenshot()

    expect(screenshot).toMatchImageSnapshot({
        failureThreshold:0.05,
        failureThresholdType:'percent'
    })
},350000)
})

