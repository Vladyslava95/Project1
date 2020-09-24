const {chromium, devices } = require('playwright');


jest.setTimeout(30000);

let browser;

beforeAll (async()=>{
    browser = await chromium.launch({
        headless:false, 
        slowMo:1000,
    });
});

afterAll( async()=>{    
    await browser.close();
    });

describe('BitCoin', () => {
    
    //Change Currency Dropdown//

   test ('Currancy dropdown', async () => {            
      const context = await browser.newContext();  
      page = await context.newPage();
      await page.goto('https://btc.bitaps.com/');      
      await page.click('.btn-group');
      await page.waitForSelector('#collapse-menu-net');     
      await page.click('[href="https://ltc.bitaps.com"]');
      await page.waitForSelector('.litecoin-logo');         
    });

    //Follow Blockchain Link//

     test ('Blockchain Link', async () => {            
        const context = await browser.newContext();  
        page = await context.newPage();
        await page.goto('https://btc.bitaps.com/');      
        await page.click('[href="/statistics"]');        
        await page.waitForSelector('#broadcast_tool');         
      });

      //Site Device View//

      test('iPhone', async () => {  
        const iPhone = devices['iPhone 6'];            
        const context = await browser.newContext({...iPhone});  
        page = await context.newPage();
        await page.goto('https://btc.bitaps.com/');                
        await page.click('#rmenu');
        await page.waitForSelector('#collapse-menu');       
      });

      //Block-List Sort by list//

      test ('Block List', async () => {                    
        const context = await browser.newContext();  
        page = await context.newPage();
        await page.goto('https://btc.bitaps.com/blocks');                
        await page.check('#blocks-toolbar > div > label:nth-child(4)');
        await page.waitForSelector('#blocks-list');
      });

     //Calculator input//
      
      test ('Calculator input', async () => {                    
        const context = await browser.newContext();  
        page = await context.newPage();
        await page.goto('https://btc.bitaps.com/tools');
        await page.click('#bip32_tool');        
        await page.type('#bip32-key', '12');
        await page.click('#gen-tool');
        await page.waitForSelector('#key-info');                  
      });
});



