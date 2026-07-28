 //alert(), confirm(), prompt() dialogs/JSalerts
//Reference:  https://playwright.dev/docs/dialogs#alert-confirm-prompt-dialogs

//1) By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. 
// 2) However, you can register a dialog handler before the action that triggers the dialog to either 
// dialog.accept() or dialog.dismiss() it.


import {test, expect, Locator} from "@playwright/test";

test("Simple dialog", async ({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/");

   //Enable alert Handling
   page.on('dialog', (dialog)=>{
    console.log("Dialog type is : ", dialog.type());
    expect(dialog.type()).toContain('alert');
    console.log("Dialog Text : ", dialog.message());
    expect(dialog.message()).toContain("I am an alert box!");
    dialog.accept()
    });

   await page.locator('button#alertBtn').click(); //opens dialog
   await page.waitForTimeout(5000);

});


test("Confirmation dialog", async ({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/");
   
   //Enable alert Handling
   page.on('dialog', (dialog)=>{
    console.log("Dialog type is : ", dialog.type());
    expect(dialog.type()).toContain('confirm');
    console.log("Dialog Text : ", dialog.message());
    expect(dialog.message()).toContain("Press a button!");
    //dialog.accept(); // close dialog by accepting
    dialog.dismiss(); //close dialog by dismissing
    });

   await page.locator('button#confirmBtn').click(); //opens dialog
   const text :string = await page.locator("#demo").innerText();
   console.log(text);
   await expect( page.locator("#demo")).toHaveText('You pressed Cancel!');
    //await expect( page.locator("#demo")).toHaveText('You pressed OK!');
   await page.waitForTimeout(5000);

});

test.only("Prompt dialog", async ({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/");
   
   //Enable alert Handling
   page.on('dialog', (dialog)=>{
    console.log("Dialog type is : ", dialog.type());
    expect(dialog.type()).toContain('prompt');
    console.log("Dialog Text : ", dialog.message());
    expect(dialog.message()).toContain("Please enter your name:");
    expect(dialog.defaultValue()).toContain('Harry Potter');
    dialog.accept('John'); // close dialog by accepting
    //dialog.dismiss(); //close dialog by dismissing
    });

   await page.locator('button#promptBtn').click(); //opens dialog
   const text :string = await page.locator("#demo").innerText();
   console.log("Output Text : ", text);
   //await expect( page.locator("#demo")).toHaveText('User cancelled the prompt.');
    await expect( page.locator("#demo")).toHaveText('Hello John! How are you today?');
   await page.waitForTimeout(5000);

});

