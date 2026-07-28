/*  
open app ===> beforeAll()

login --> beforeEach()
    find products
logout --> afterEach()

login
    add products to cart
logout

close app === afterAll()

*/


import {test, expect, Page} from '@playwright/test';
let page : Page;

test.beforeAll("Open App", async({browser})=>{
    page = await browser.newPage();
   await page.goto("https://www.demoblaze.com/index.html");
})

test.afterAll("Close App", async()=>{
    await page.close();
})

test.beforeEach('Login', async()=>{
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('rahulpdhule@gmail.com');
    await page.locator('#loginpassword').fill('Admin123');
    await page.getByRole('button',{name:'Log in'}).click();
   
});

test.afterEach('Logout', async()=>{
    await page.locator('#logout2').click();
   
});

test.describe('mygroup',async ()=>{

test('Find number of products', async()=>{
    const products = page.locator("div[class='col-lg-4 col-md-6 mb-4']");
    const count = await products.count();
    console.log("Number of products : ", count);
    await expect(products).toHaveCount(9);
})

test("Add products to the cart", async()=>{

    await page.locator('a[href="prod.html?idp_=1"] [src="imgs/galaxy_s6.jpg"]').click();

    //handle alert before click
    page.on('dialog', async(dialog)=>{
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    });

    await page.locator('[class="btn btn-success btn-lg"]').click();
});

});