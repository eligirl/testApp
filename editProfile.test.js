const puppeteer = require('puppeteer');
const applicationConfig=require('./applicationConfig.js')


    test('editProfile',async ()=>{
        const browser = await puppeteer.launch({
            headless :false,
            slowMo:80,
            args:['--window-size=1920 , 1080']
    
        })
        const page =await browser.newPage()
        await page.goto(applocation_config.serverAddress)
           await page.waitForSelector('form');
           await page.click('#username')
           await page.type('#username','farazjalili@gmail.com')
           await page.click('#password')
           await page.type('#password','12345678')
           await page.click('button[type = submit]')
           await page.waitFor('button[type = submit]')
    
           await page.goto(applocation_config.serverAddress+'/user/profile/editProfile')

           const Url = await page.mainFrame().url()
           expect(Url).toContain('editProfile');
       
           const elementHandle=await page.$('#username');
           await page.click('elementHandle')
           await page.focus('elementHandle')
           await page.click('elementHandle',{clickCount: 3})
           await page.keyboard.press('Backspace')
           await page.type('elementHandle','elahe.ta.72@gmail.com')

           const email=await page.$('#email');
           await page.click('email')
           await page.focus('email')
           await page.click('email',{clickCount: 3})
           await page.keyboard.press('Backspace')
           await page.type('email','12345678')
           
           const mobile=await page.$('#mobile');
           await page.click('mobile')
           await page.focus('mobile')
           await page.click('mobile',{clickCount: 3})
           await page.keyboard.press('Backspace')
           await page.type('mobile','123456784567')

           const  first_name=await page.$('#first_name');
           await page.click('first_name')
           await page.focus('first_name')
           await page.click('first_name',{clickCount: 3})
           await page.keyboard.press('Backspace')
           await page.type('first_name','علی')

           const  last_name=await page.$('#last_name');
           await page.click('last_name')
           await page.focus('last_name')
           await page.click('last_name',{clickCount: 3})
           await page.keyboard.press('Backspace')
           await page.type('last_name','عظیمی')
      
           const bio = await page.$('#bio');
           await page.click('bio')
           await page.focus('bio')
           await page.click('bio',{clickCount: 3})
           await page.keyboard.press('Backspace')
           await page.type('bio','بزنامه نویس')

           const job = await page.$('#job');
           await page.click('job')
           await page.focus('job')
           await page.click('job',{clickCount: 3})
           await page.keyboard.press('Backspace')
           await page.type('job','بزنامه نویس')

           await page.click('#react-select-8-input')
           await page.type('#react-select-8-input','تهران،ایران')
           await page.click('#tealButton')

          await page.click('#old_password')
          await page.type('#old_password','12345678')

          await page.click('#password')
          await page.type('#password','12345678')
          await page.click('.Button-sc-2wq7ng-1')
          console.log('wait For Selector')
          await page.waitForSelector('.Toastify__toast-body')
          await browser.close();
          
          
    },application_config.delay )

