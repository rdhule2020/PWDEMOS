import {test, expect, Locator} from "@playwright/test";

test("Verify dropdown contains duplicate ", async ({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");
        const dropdownOptions : Locator =  page.locator('#animals option');  // not having duplicate
        //const dropdownOptions : Locator = page.locator('#colors>option'); // having duplicate
        const optionsText:string[]=(await dropdownOptions.allTextContents()).map(text => text.trim());        
        const myset= new Set<String>(); // set - duplicates not allowed
        const duplicates :string[]=[]; // array - dulicate allowed
        
        for(const text of optionsText)
        {
                if(myset.has(text)){
                        duplicates.push(text);
                }else{
                        myset.add(text);
                }
        }

        console.log("Duplicates options are ====> ",duplicates);
        
        if(duplicates.length>0)
        {
                console.log("Duplicate options are found :", duplicates);
        }else{
                console.log("Duplicates are not found...");
        }
        
        expect(duplicates.length).toBe(0);
        //await page.waitForTimeout(5000);
});