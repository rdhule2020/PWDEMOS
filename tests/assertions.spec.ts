import {test, expect} from "@playwright/test";

test("Playwright assertions demo", async({page})=>{

   await page.goto("https://demowebshop.tricentis.com/");
   
   await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

   await expect(page.getByText('Welcome to our store')).toBeVisible();
   await expect(page.getByText('Featured products')).toHaveText('Featured products');

    const title = await page.title();
   console.log(title);
   expect(title.includes('Demo Web Shop')).toBeTruthy();

   const welcometext = await page.locator('text=Welcome to our store').textContent();
   expect(welcometext).toContain('Welcome');

   // await expect(page.locator('text=Welcome to our store')).not.toBeVisible();
   // expect(welcometext).not.toContain('Welcome');

   await page.waitForTimeout(5000);
})