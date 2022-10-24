const puppeteer = require('puppeteer');

describe('Geolocalizacion', () => {
    let browser;
    let page;
    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
        });

        page = await browser.newPage();
        
    }, 20000);

    afterAll(async () => {
        await browser.close();
    });
it('Cambio de la geocalizacion', async() => {
    const context = browser.defaultBrowserContext()

    await context.overridePermissions('https://chercher.tech/practice/geo-location.html', ['geolocation'])

    await page.setGeolocation({ latitude: 90, longitude: 20})
    await page.goto('https://chercher.tech/practice/geo-location.html')
    await page.waitForTimeout(5000)

    await page.setGeolocation({ latitude: 90, longitude: 0})
    await page.goto('https://chercher.tech/practice/geo-location.html')
    await page.waitForTimeout(5000)
},350000)


})
