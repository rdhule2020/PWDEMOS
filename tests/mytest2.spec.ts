import {test, expect} from "@playwright/test"

//fixtures- global variables : page, browser 
test("verify URL of the page", async ({page})=> {

    await page.goto("https://www.google.com");
    let url :string = await page.url();
    console.log("URL :" , url);
    await expect(page).toHaveURL("https://www.google.com");

});
