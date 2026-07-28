/*
CSS Selectors

2 types :
1) Absolute css
2) relative CSS

tag with id         tag#id        or      #id
tag with class      tag.class     or     .class
tag with any other sttribute    tag[attribute=value]   or     [attribute=value]
tag with class and attribute    tag.class[attribute=value]   or     .class[attribute=value]

page.locator(css/xpath)
*/

import {test, expect,Locator} from "@playwright/test";

test("verify css locators ", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    //1) tag#id
    // const searchBox : Locator =page.locator('input#small-searchterms');
    // await searchBox.fill("T-Shirts");

    //2) #id
    // await expect(page.locator('input#small-searchterms')).toBeVisible();
    // await page.locator('#small-searchterms').fill('I-Shirts');
    // await page.waitForTimeout(5000);

    //3) tag.class
    // await page.locator("input.search-box-text").clear();
    //     await page.waitForTimeout(5000);

    // await expect(page.locator("input[name='q']")).toBeVisible();
    // await page.locator("[name='q']").fill("T-Shirt");

    //4) tag with class and attribute 
    await expect(page.locator("input.search-box-text[value='Search store']")).toBeVisible();
    await page.locator("input.search-box-text[name='q']").fill("T-Shirt");
    await page.waitForTimeout(5000);

});