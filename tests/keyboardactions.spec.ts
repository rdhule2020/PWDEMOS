import {test, expect} from "@playwright/test";


/*
Keyboard methods: 
insertText
down
press
type
up

await page.keybord
*/

test("keyboard actions ", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const input1 = page.locator("#input1");
    //1) focus on input 1 element
        await input1.focus();
        //await input1.click();

    //2) provide the text in input 1
        await page.keyboard.insertText("Welcome");

    //3) ctrl+A- select the text from input 1
        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.up('Control');

    // 4) ctrl+C - copy the text from input 1
        await page.keyboard.down('Control')
        await page.keyboard.press('C');
        await page.keyboard.up('Control');

    //5) press the TAB,-,2 times
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');

    //6) Ctrl + V - paste the text in input 2
        await page.keyboard.down('Control');
        await page.keyboard.press('V');
        await page.keyboard.up('Control');


    //7) press tab 2 TimeRanges
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');

    //8) ctrl + V - paste the text n input 3
     await page.keyboard.down('Control');
        await page.keyboard.press('V');
        await page.keyboard.up('Control');

        await page.waitForTimeout(5000);
}) ;

test.only("Keyboard actions simple way", async({page})=>{

     await page.goto("https://testautomationpractice.blogspot.com/");
    const input1 = page.locator("#input1");
    //1) focus on input 1 element
        await input1.focus();
        //await input1.click();

    //2) provide the text in input 1
        await page.keyboard.insertText("Welcome");

    //3) ctrl+A- select the text from input 1
        await page.keyboard.press('Control+A');
    
    // 4) ctrl+C - copy the text from input 1
        await page.keyboard.press('Control+C');

    //5) press the TAB,-,2 times
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');

    //6) Ctrl + V - paste the text in input 2
        await page.keyboard.press('Control+V');

    //7) press tab 2 TimeRanges
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');

    //8) ctrl + V - paste the text n input 3
        await page.keyboard.press('Control+V');

        await page.waitForTimeout(5000);
})