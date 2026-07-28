import {test, expect, Locator} from "@playwright/test";

test("Verify dropdown is sorted or not ", async ({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");
        const dropdownOptions : Locator =  page.locator('#animals option');
        // const dropdownOptions : Locator = page.locator('#colors>option');
        //console.log(await dropdownOptions.allTextContents());

        const optionText : string[] = (await dropdownOptions.allTextContents()).map(text=> text.trim());

        const originalList : string[] =[...optionText];
        const sortedList : string[] =  [...optionText].sort();

        console.log("Original List :" ,originalList);
        console.log("Sorted List :",sortedList);

        expect(originalList).toEqual(sortedList);

        await page.waitForTimeout(5000);
});

