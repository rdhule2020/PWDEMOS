import {test, expect, Locator} from "@playwright/test";

test("JQuery Date Picker", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dateInput : Locator = page.locator("[id='datepicker']");
    await expect(dateInput).toBeVisible();
    
    //way 1 : pass using fill() method
     await dateInput.fill('07/10/2026');  // mm-dd-yyyy
     

     //way 2 : using date picker
     await dateInput.click();  //opens the date picker

     //select target date
     const year ="2024";
     const month = "August"
     const day ="22";

     while(true)
     {
        const currentmonth : string|null = await page.locator(".ui-datepicker-month").textContent();
        const currentyear : string|null = await page.locator(".ui-datepicker-year").textContent();
        if(currentmonth===month && currentyear===year)
            {
            break;
        }

        // future date
       // await page.locator(".ui-datepicker-next").click();

        //Past date
          await page.locator(".ui-datepicker-prev").click();
        
    }
        const allDates = await page.locator("table.ui-datepicker-calendar td").all();
        for(let dt of allDates)
        {
           const dateText = await dt.innerText();
           if(dateText === day)
           {
            await dt.click();
            
            break;
           }
        }

      
     

});