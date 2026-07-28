import {test, expect, Locator, Page} from "@playwright/test";

async function selectDate(targetYear:string, targetMonth:string, targetDate:string, page:Page, isFuture:boolean)
{

 while(true)
     {
        const currentmonth : string|null = await page.locator(".ui-datepicker-month").textContent();
        const currentyear : string|null = await page.locator(".ui-datepicker-year").textContent();
        if(currentmonth===targetMonth && currentyear===targetYear)
            {
            break;
        }

        if(isFuture)
        {
        // future date
            await page.locator(".ui-datepicker-next").click();
        }else{
         //Past date
          await page.locator(".ui-datepicker-prev").click();
        }
       
    }

        const allDates = await page.locator("table.ui-datepicker-calendar td").all();
        for(let dt of allDates)
        {
           const dateText = await dt.innerText();
           if(dateText === targetDate)
           {
            await dt.click();
            break;
           }
        }

}


test("JQuery Date Picker", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dateInput : Locator = page.locator("[id='datepicker']");
    await expect(dateInput).toBeVisible();
    
    // //way 1 : pass using fill() method
    //  await dateInput.fill('07/10/2026');  // mm-dd-yyyy
    
     //way 2 : using date picker
     await dateInput.click();  //opens the date picker

     //Future target date
     const year ="2027";
     const month = "August"
     const day ="22";

    //  //past target date
    //  const year ="2023";
    //  const month = "May"
    //  const day ="02";

     selectDate(year, month, day, page,true);
     const expectedDate = "08/22/2027"; //mm/dd/yyyy
     await expect(dateInput).toHaveValue(expectedDate);
});