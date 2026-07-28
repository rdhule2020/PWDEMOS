import {test, expect, Locator} from "@playwright/test"

test(" Multi-Select dropdown ", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //1)Select option from the dropdown // (4 ways)
    // await page.locator('#colors').selectOption(['Red','Blue','Green']); // using visible text
    // await page.locator('#colors').selectOption(['red','green', 'white','yellow']); // values
    //await page.locator('#colors').selectOption([{label:'Red'}, {label:'Green'},{label:'Yellow'}]); // By using label
    //await page.locator('#colors').selectOption([{index:0},{index:2},{index:4}]);
   
    //2) check number of options in the dropdown(count)
    const dropdownOptions :Locator = page.locator('#colors option');
    await expect(dropdownOptions).toHaveCount(7);
    
    //3) check options present in the dropdown

    const optionsText :string []= (await dropdownOptions.allTextContents()).map(text=>text.trim());
    console.log(optionsText);
    expect(optionsText).toContain('Green');


    //4) printing options from dropdown
    for(const option of optionsText)
    {
        console.log(option);
    }

    await page.waitForTimeout(5000);


});