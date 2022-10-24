const puppeteer = require('puppeteer');

describe('Capturas de pantallas', () => {
    let browser;
    let page;
    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
        });

        page = await browser.newPage();
        await page.goto('https://google.com', { waitUntil: 'networkidle0' });
    }, 20000);

    afterAll(async () => {
        await browser.close();
    });
// Prueba en dispositivos movil
    test('Capturas de pantalla completa', async () => {
        await page.screenshot({
          path:'./capturasDePantallas.png',
          fullpage:true
        });
        //await page.waitForTimeout(3000);
    }, 40000)

test('Capturas de pantalla seleccionado un area', async () => {
    await page.screenshot({
      path:'./capturasDePantallaSeleccionandoUnArea.png',
      clip:{
        x:0,
        y:0,
        width:500,
        height:500
      }
    });
    //await page.waitForTimeout(3000);
}, 40000)

test('Captura de pantalla con fondo transparente', async () => {
    await page.evaluate(()=>(document.body.style.background ='Transparent'))
    await page.screenshot({
      path:'./capturasDePantallaConFondoTransparente1.png',
      omitBackground:true
    });
}, 40000)

test('Captura de pantalla a un elemento', async () => {
 const element = await page.waitForSelector('body > div.L3eUgb > div.o3j99.LLD4me.yr19Zb.LS8OJ > div > img')
    await element.screenshot({
      path:'./capturasDePantallaConUnElemento.png',
    
    });
}, 40000)
})