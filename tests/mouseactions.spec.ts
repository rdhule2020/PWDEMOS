import {test , expect, Locator} from "@playwright/test";

test("Mouse Hover", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const pointme = page.locator(".dropbtn");
    await pointme.hover();

    const laptops = page.locator(".dropdown-content a:nth-child(2)")
    await laptops.hover();

    await page.waitForTimeout(5000);
});

test("right click", async ({page})=>{
    await page.goto("http://swisnl.github.io/jQuery-contextMenu/demo.html");
    const button = page.locator("span[class='context-menu-one btn btn-neutral']");
    await button.click({button:'right'});


    await page.waitForTimeout(5000);
});

test("Double click", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const btncopy =page.locator("button[ondblclick='myFunction1()']");
    await btncopy.dblclick();
     
    const field2 = page.locator("#field2");
    await expect(field2).toHaveValue("Hello World!");

    await page.waitForTimeout(5000);
});

test("Drag and Drop", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const source =page.locator("div[id='draggable']");
    const target = page.locator("div[id='droppable']");
    //approach 1:
    // await source.hover();
    // await page.mouse.down();
    // await target.hover();
    // await page.mouse.up();

    //approach2:
    await source.dragTo(target);
    await page.waitForTimeout(5000);
});