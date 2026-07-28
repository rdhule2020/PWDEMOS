import {test, expect, Locator} from '@playwright/test';

test("BootStrap hidden dropdown", async({page})=>{

   await page.goto("https://opensource-demo.orangehrmlive.com/");

   //Login steps
    await page.locator("[name='username']").fill("Admin");
    await page.locator("[name='password']").fill('admin123');
    await page.locator("[type='submit']").click();

    //click on PIM
    await page.getByText('PIM').click();
    //clicked on job title dropdown
    await page.locator('form i').nth(2).click();
 
    //capture all the optons from dropdown and count
    const options : Locator = page.locator("[role='listbox'] span");
     await page.waitForTimeout(5000);
    const count = await options.count();
    console.log("Number of options in a dropdown : ",count)
    console.log(await options.nth(5).allTextContents());
    console.log("Printing all the options :");
    //print all the options
    for(let i=0; i<count; i++)
    {
       console.log(await options.nth(i).innerText());
           //console.log(await options.nth(i).textContent());
            
    }
   await page.waitForTimeout(5000);
// select / click on particular option
      for(let i=0; i<count; i++)
    {
       const text = await options.nth(i).innerText();
            if(text==='Automation Tester')
            {
                await options.nth(i).click();
                break;
            }
    }

    await page.waitForTimeout(3000);



});