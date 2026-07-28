import {test, expect} from "@playwright/test";

// test("Screenshot demo", async ({page})=>{

//     await page.goto("https://demowebshop.tricentis.com/");
//     const timestamp = Date.now();

//     //visible page screenshot
//     await page.screenshot({path:'screenshots/'+'homepage'+timestamp+'.png'});

//     //full page screenshot
//     await page.screenshot({path:'screenshots/'+'homepage'+timestamp+'.png', fullPage:true});

//     //screenshot of logo
//    //const logo = page.getByAltText('Tricentis Demo Web Shop');
//    await page.getByAltText('Tricentis Demo Web Shop').screenshot({path:'screenshots/'+'logo'+timestamp+'.png'});
   
//    // screenshot of particular section
//    const featuredproducts = page.locator('div[class="product-grid home-page-product-grid"]');
//    await featuredproducts.screenshot({path:'screenshots/'+timestamp+'featuredproducts'+'.png'});
   
// });


test.only('screenshots from config',async ({page})=>{
 await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('Welcome rahulpdhule@gmail.com');
  await page.locator('#loginpassword').fill('Admin123'); //check with password incorrect
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');
  
})