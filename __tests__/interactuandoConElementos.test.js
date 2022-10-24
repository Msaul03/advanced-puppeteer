const puppeteer = require('puppeteer')

const {click,type,doubleClick} = require('../lib/helpers')
describe('Interactuando con elementos',() => {

    it('test llenado de formulario', async() => {
        const browser = await puppeteer.launch({
            headless: false, 
            defaultViewport: null       
        })

        const page = await browser.newPage()
        await page.goto('https://demo.guru99.com/test/simple_context_menu.html')

                    // Event Listener, Para formularios o sitios que muestre una alerta y un dialogo necesites aceptar o cambiar 
        page.on('dialog',async(dialog)=>{
        await dialog.accept()
        })
                    // Click derecho

       // await page.click('#authentication > span', {button: 'right', delay: 500})
       // await page.waitForTimeout(3000)

                    // Doble click

        await page.click('#authentication > button', {clickCount: 2 , delay: 500})
        await page.waitForTimeout(3500)
                    // Pagina de formulario 
        await page.goto("https://devexpress.github.io/testcafe/example/")

        await page.type('#developer-name','Saúl',{delay:100})
        await page.click('#remote-testing')
        await page.click('#traffic-markup-analysis')
        await page.click('#tried-test-cafe')
        await page.click('#slider > span')
        await page.type('#comments', 'hola esto es un comentario')
        await page.click('#windows')
        await page.select('#preferred-interface','JavaScript API')
        await page.click('#submit-button')
        await page.waitForTimeout(3000)

        await browser.close()
        
},350000)


})