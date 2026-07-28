import {test, expect} from '@playwright/test';

/*
test("title", ()=>{
//step1
//step2
//step3

});

*/

//fixtures- global variables : page, browser 
test("verify page title", async ({page})=> {

    await page.goto("https://www.google.com");
    let title :string =await page.title();
    console.log("Title :" +title);
    await expect(page).toHaveTitle("Google");

});
