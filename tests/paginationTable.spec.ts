import {test, expect, Locator} from "@playwright/test";

test("Read table data from all the pages", async({page})=>{
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

     let hasmorepages= true;
            const rows:Locator[] =await page.locator("#example tbody tr").all();
            for(let row of rows){
                console.log(await row.innerText());
            }
    
        while(hasmorepages)
        {
            const rows:Locator[] =await page.locator("#example tbody tr").all();
            for(let row of rows){
                console.log(await row.innerText());
            }
            await page.waitForTimeout(2000);
            //Locator of next button ->
            //button[aria-label='Next']
            //button[aria-controls='example']:nth-child(9)
            //nav[aria-label="pagination"] button:nth-child(9)

            const nextButton = page.locator("button[aria-label='Next']");
            const isDisabled =await nextButton.getAttribute('class');   //dt-pagging-button disabled next
            if(isDisabled?.includes('disabled')){
                hasmorepages=false;
            }else{
                await nextButton.click();
            }
        }
    
});


test("Filter the rows and check the rows count", async ({page})=>{
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
    const dropdown : Locator =  page.locator("#dt-length-0");
    await dropdown.selectOption({label: '25'});
    const rows:Locator[]=await page.locator("#example tbody tr").all();
    expect(rows.length).toBe(25);
    console.log("Way 1: ",rows);
    await page.waitForTimeout(2000);

    const rows2 = page.locator("#example tbody tr")
    await expect(rows2).toHaveCount(25);
       console.log("Way2: ",rows2);
    await page.waitForTimeout(2000);
});

test("Search for specific data in a table", async ({page})=>{
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

    const searchbox : Locator= page.locator("#dt-search-0");
    await searchbox.fill('Paul Byrd');
    await page.waitForTimeout(5000);
    const rows:Locator[]=await page.locator("#example tbody tr").all();
    if(rows.length>=1)
    {
        let matchfound=false;
        for(const row of rows)
        {
            const text =await row.innerText();
            if(text.includes('Paul Byrd')){
                console.log("Record exist - found");
                matchfound=true;
                break;
            }
        }
        //expect(matchfound).toBe(true);
        expect(matchfound).toBeTruthy();
    }
    else{
        console.log("No rows found with search text");
    }

        await page.waitForTimeout(2000);
})