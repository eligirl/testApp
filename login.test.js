const puppeteer = require('puppeteer')
const applicationConfig = require('./applicationConfig.js')

test('inorrect-logintest',async()=>{
    const browser = await puppeteer.launch({
        headless :false,
        slowMo:80,
        args:['--window-size=1920 , 1080']

    })
    const page = await browser.newPage()
    // const app =  ApplicationConfig()
    await page.goto(application_config.serverAddress)    
    await page.waitForSelector('form');
    await page.click('#username')
    await page.type('#username','el.taheri.72@gmail.com')
    await page.click('#password')
    await page.type('#password','12345678')
    await page.click('button[type = submit]')
    
    await page.waitForSelector('.kIyIzC');
    const html = await page.$eval('.kIyIzC', el => el.innerHTML);

    expect(html).toBe('user or password is wrong');
    
},30000)

describe('correct-logintest-Test',()=>{
    
it('ّcorrect-logintest',async()=>{
    let browser = await puppeteer.launch({
        headless :false,
        slowMo:80,
        args:['--window-size=1920 , 1080']

    })
    const page = await browser.newPage()
    await page.goto(application_config.serverAddress+'/auth/login')
    await page.waitForSelector('form');
    await page.click('#username')
    await page.type('#username','farazjalili@gmail.com')
    await page.click('#password')
    await page.type('#password','12345678')
    await page.click('button[type = submit]')

    
    await page.waitFor('button[type = submit]');

    const url = await page.mainFrame().url();
    expect(url).toContain('ads'); // Uses Jest
    
},application_config.delay)

})