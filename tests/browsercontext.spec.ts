import {test, expect, chromium} from "@playwright/test";

// browser --> context --> page

test("Browser settings", async()=>{

const browser = await chromium.launch({headless:false}); 
//const broswer = await chromium.launch({headless:true});

const context = await browser.newContext(
    {
        viewport : {width:1200, height:800},
        locale:'en-US',
       // proxy :{server:'http://myproxy.com:3245'},
        ignoreHTTPSErrors:true
    }

);

const page = await context.newPage();

//await page.goto("https://www.google.com/");
await page.goto("https://expired.badssl.com/");
console.log("title of the page : ", await page.title());
await page.waitForTimeout(7000);
});