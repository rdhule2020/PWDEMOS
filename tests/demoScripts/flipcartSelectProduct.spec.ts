import {test, expect} from "@playwright/test";

test("Check iphone 17 from details on flipcart", async({page})=>{

    await page.goto("https://www.flipkart.com/",{
        waitUntil: "domcontentloaded"
    });
    const login = page.locator(`[role="button"]`);
    await login.click();
    const searchbox = page.locator('input[name="q"]').first(); 
    await searchbox.fill("iPhone 17 Pro Max");
    await searchbox.press("Enter");
    await page.waitForLoadState("domcontentloaded");
    const newPagePromise = page.waitForEvent("popup");
    await page.getByText('Apple iPhone 17 Pro Max (Cosmic Orange, 256 GB)', { exact: true }).click();

     // Get the newly opened page
    const newPage = await newPagePromise;

    // Wait until the new page is loaded
    await newPage.waitForLoadState("domcontentloaded");

    console.log("New page URL:", newPage.url());
    console.log("New page title:", await newPage.title());

    // Read information from the new page
    const allInfo: string[] = await newPage
        .locator("grid-formation grid-column-1")
        .allInnerTexts();

    console.log("PRODUCT INFORMATION:");
    console.log(allInfo);
   
});