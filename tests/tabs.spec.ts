import {test, expect, chromium} from "@playwright/test";

test("Handle Tabs", async()=>{

    const  browser = await chromium.launch();// create browser
    const  context =await browser.newContext(); //create context
    //creating 2 pages
    const parentPage =await context.newPage();
    await parentPage.goto("https://testautomationpractice.blogspot.com/");

    // context.waitForEvent('page'); // pending, fullfiled, rejected
    // await parentPage.locator("button[onclick='myFunction()']").click(); // opens new tab

    const [childPage]=await Promise.all([context.waitForEvent('page'), parentPage.locator("button[onclick='myFunction()']").click()]);
    
    //switch between pages and get tiles
    //approach 1 :
    const pages = context.pages();
    console.log("Number of pages created : ", pages.length);

    console.log("Title of the parent page :",await pages[0].title());
    console.log("Title of the child page :",await pages[1].title());

    //Approach 2 :
    console.log("Title of the parent page : ", await parentPage.title());
    console.log("Title of the child page : ", await childPage.title());
})