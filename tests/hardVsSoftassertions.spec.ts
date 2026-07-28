import {test, expect} from "@playwright/test";

test("Hard Vs Soft Assertions", async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");

    // Hard assertions
    // await expect(page).toHaveTitle('Demo Web Shop');
    // await expect(page).toHaveURL('https://demowebshop.tricentis.com/');
    // const logo = page.getByAltText('Tricentis Demo Web Shop');
    // await expect(logo).toBeVisible();

    //soft assertions
    await expect.soft(page).toHaveTitle('Demo Web Shop1');
    await expect.soft(page).toHaveURL('https://demowebshop.tricentis.com/');
    const logo = page.getByAltText('Tricentis Demo Web Shop');
    await expect.soft(logo).toBeVisible();
    await page.waitForTimeout(5000);
})