import {test, expect, Locator} from "@playwright/test";

test("Autosuggest Dropdown", async({page})=>{
    await page.goto("https://www.flipkart.com/");
        
        await page.locator("span[role='button']").click();

        // search text
        //Get all the suggested options  --> Ctrl + Shift+P on DOM ---> emulate focused page
        await page.locator("form[class='lilxh_ header-form-search'] input[placeholder='Search for Products, Brands and More']").fill("smart");
    
        await page.waitForTimeout(5000);
        
        const options : Locator= page.locator("ul>li");
        const count = await options.count();
        console.log("Number of suggested options : ", count);

        //printing all suggested options in the console
      console.log("Printing all the options from autosuggestion dropdown ...");
        for(let i=0; i<count; i++)
        {
            //console.log("5th option :",await options.nth(5).innerText());
            console.log(await options.nth(i).innerText());
        }

        //select /click on smartphone option

        for(let i=0; i<count; i++)
        {
            //console.log("5th option :",await options.nth(5).innerText());
            const text = await options.nth(i).innerText();
            if(text ==='smartphone')
            {
                options.nth(i).click();
                break;
            }
        }


    await page.waitForTimeout(5000);

});

