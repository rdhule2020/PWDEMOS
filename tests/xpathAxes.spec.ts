import {test, expect , Locator} from "@playwright/test";

test("Xpath Axes Demo", async({page})=>{
    await page.goto("https://www.w3schools.com/html/html_tables.asp");
    await page.waitForTimeout(6000);
    //1. self axis - Select <td> element that contains "Germany"
    const germanyCell : Locator= page.locator("//td[text()='Germany']/self::td");
    const text :string | null =await germanyCell.textContent();
    await expect(germanyCell).toHaveText("Germany");

    //2. parent axis - Get parent <tr> of the "Germany" cell
     const parentRow : Locator = page.locator("//td[text()='Germany']/parent::tr");
    await expect(parentRow).toContainText("Maria Anders");

    
});