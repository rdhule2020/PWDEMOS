import {test,expect,Locator} from "@playwright/test"

//Text Input / Text Box /Input Box
//Radio Buttons

test("Text Input Actions", async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");
const textBox : Locator = page.locator('#name');

await expect(textBox).toBeVisible();
await expect(textBox).toBeEnabled();
const maxLength : string|null = await textBox.getAttribute("maxlength");
expect(maxLength).toBe("15");

await textBox.fill("John Canedy");

//console.log("Text content of FirstName : "+ await textBox.textContent()); //returns empty

const enteredValue : string = await textBox.inputValue();
console.log("Text content of FirstName : "+enteredValue );// returns the input value of text box

expect ( enteredValue).toBe("John Canedy");
await page.waitForTimeout(3000);
});


//Radio buttons
test('Test radio button Actions', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const maleRadio :Locator= page.locator('#male');

    await expect(maleRadio).toBeVisible();
    await expect(maleRadio).toBeEnabled();
    expect(await maleRadio.isChecked()).toBe(false);
    await maleRadio.check();
   //expect(await maleRadio.isChecked()).toBe(true);
    expect(await maleRadio.isChecked()).toBe(true);  /// Most preferred
    await expect(maleRadio).toBeChecked();//preferable
    await page.waitForTimeout(3000);

});

//checkbox Actions
test.only('Test checkbox Actions', async ({page})=>{
   await page.goto('https://testautomationpractice.blogspot.com/');

    //1) Select a specific checkbox (Sunday) using getByLabel and assert
        expect(await page.getByLabel('Sunday').isChecked()).toBe(false);
        const sundayCheckbox : Locator= page.getByLabel('Sunday');
        // await sundayCheckbox.check();
        // await expect(sundayCheckbox).toBeChecked();
    
    //2) capture all the checkboxes (days of the week) and asset each is checked

        const days:string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const checkboxes : Locator[]= days.map(index =>page.getByLabel(index));
        expect(checkboxes.length).toBe(7);

    //3) Select all checkboxes and assert each is checked
    for( const checkbox of checkboxes)
    {
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }

    //4) Uncheck Last 3 checkboxes and assert
        for(const checkbox of checkboxes.slice(-3))
        {
            await checkbox.uncheck();
            await expect(checkbox).not.toBeChecked();
        }

     await page.waitForTimeout(3000);

     //5) Toggle checkboxes : If checked, uncheck; if unchecked, check. Assert state flipped
     for(const checkbox of checkboxes)
     {

        if(await checkbox.isChecked())
        {
        // only if checkbox is checked
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
        }
        else{
        // only if not checked
        await checkbox.check();
        await expect(checkbox).toBeChecked();
        }
     }

       await page.waitForTimeout(3000);

    //6) Randomely select check boxes - Select checkboxes by index (1,3,6) and assert
    const indexes : number[] = [1,3,6];
    for(const i of indexes)
    {
        await checkboxes[i].check();
        await expect(checkboxes[i]).toBeChecked();
    }
    await page.waitForTimeout(3000);

    // 7) Select the checkbox based on label
    const weekname : String ="Friday";
    for(const label of days)
    {
        if(label.toLowerCase()===weekname.toLowerCase())
        {
            const checkbox :Locator =page.getByLabel(label);
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }
    }
    await page.waitForTimeout(3000);
});