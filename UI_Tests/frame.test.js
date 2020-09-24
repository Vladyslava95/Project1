const playwright = require ('playwright');
jest.setTimeout(30000);
let browser;
beforeAll (async()=>{
    browser = await playwright.chromium.launch({
        headless:false, 
        slowMo:1000,
    });
});

afterAll( async()=>{    
    await browser.close();
    });

describe('IFrame', () => {
    let page;
    
    //IFrame -Reset password//

   test ('IFrame', async () => {            
    const context = await browser.newContext();  
    page = await context.newPage();
    await page.goto('https://www.w3schools.com/html/html_iframe.asp');     
    const frames = await page.frames();
    const frame = frames[1];
    await frame.waitForSelector ('iframe');     
    await frame.click('#w3loginbtn');     
    await frame.click('[href="https://mypage.w3schools.com/mypage/forgot_password.php"]');
    await frame.waitForSelector('#loginform');    
        
    });
});