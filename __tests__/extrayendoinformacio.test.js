const puppeteer = require('puppeteer')

const {getText, getCount} = require('../lib/helpers')

describe('Extrayendo información ',() => {

 let browser
 let page
 beforeEach (async()=>{
     browser = await puppeteer.launch({
        headless: false, 
        defaultViewport: null,
        //slowMo : 50   
    })

    page = await browser.newPage()
 })
 
    afterEach(async() =>{
       await browser.close()
    } )

it('Extraer el titulo de la pagina y la url', async() => {
    
    await page.goto('https://platzi.com', { waitUntil: 'networkidle0' } )
    const titulo = await page.title()
    const url = await page.url()

    console.log('titulo', titulo)
    console.log('url', url)
     

    
},350000)

it('Contar los elementos de una pagina', async() => {
   
    await page.goto('https://platzi.com', { waitUntil: 'networkidle0' } )

    const imagen = await getCount(page, 'img')
    console.log('imagen', imagen)
   
}, 350000)

it('Extraer información de un elemento', async() => {
       
    await page.goto('https://platzi.com', { waitUntil: 'networkidle0' } )
    await page.waitForSelector('#home-public-old > header > nav > div.Actionsv2 > a')

     const nombreBoton = await getText( page , '#home-public-old > header > nav > div.Actionsv2 > a' )
    
     console.log('nombreBoton',nombreBoton)


  

},350000)

})

