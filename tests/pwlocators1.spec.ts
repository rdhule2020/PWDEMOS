

import {test,expect, Locator} from "@playwright/test" 

test("Verify Locators", async ({page})=>{
 //  6) page.getByTitle() -
    await page.goto("file:///F:/Automation_Workspace/Playwright_Automation/section3/Understanding%20Playwright%20Built-in%20locators/ClassDemos/ClassDemos/app.html");
    // const link : Locator =page.getByTitle("Home page link");
    // expect(link).toHaveText("Home");
    await expect(page.getByTitle("Home page link")).toHaveText("Home");
    await expect(page.getByTitle("HyperText Markup Language")).toHaveText("HTML");
    await expect(page.getByTitle("Tooltip text")).toHaveText("This text has a tooltip");
    await expect(page.getByTitle("Click to save your changes")).toHaveText("Save");

    // 7. page.getByTestId() : Locate an element based on its data-testid attribute 
    // (other attributes can be configured)
    // When to use: When text or role-based locators are unstable or not suitable.

    await expect(page.getByTestId("profile-name")).toHaveText("John Doe");
    await expect (page.getByTestId("profile-email")).toHaveText("john.doe@example.com");
});