import {test, expect} from "@playwright/test";

test('test1',async ({page})=>{
     await page.goto('https://demowebshop.tricentis.com/');
   // await page.goto('https://demowebshop.tricentis.com/reg');
    //approach1
    //expect(await page.screenshot()).toMatchSnapshot("homepage.png");

    //approach 2
   // await expect(page).toHaveScreenshot();

    //compare snapshot of the element
    const logo=page.locator("img[alt='Tricentis Demo Web Shop']");
    expect(await logo.screenshot())
});
