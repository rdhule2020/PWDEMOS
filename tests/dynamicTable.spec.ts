import {test,expect, Locator} from "@playwright/test";

test("Verify Chrome CPU load in Dynamic web table", async({page})=>{
    await page.goto("https://practice.expandtesting.com/dynamic-table");
    //const table:Locator=page.locator("table.table tbody");
    const table:Locator=page.locator("[class='table table-striped'] tbody");
    await expect(table).toBeVisible();
    console.log(table);

    //Select all the rows , then find number of rows
    const rows : Locator[] =await table.locator("tr").all();
    const count = rows.length;
    console.log("Number of rows in table :",count );
    expect(rows).toHaveLength(4);
   
   
    //Step 1 : for chrome process get value of CPU load
    // Read each row to check Chrome presence
    let CPUload ='';
    for(const row of rows){
        const processName:string =await row.locator("td").nth(0).innerText();
        if(processName === "Chrome"){
            //const CPUload =await row.locator('td:hastext("%")').innerText(); //css syntax
            const CPUload = await row.locator("td",{hasText:'%'}).innerText(); //playwright syntax
            console.log("CPU LOAD OF CHROME ", CPUload);
            break;
        }
        
    }


    //step 2 : compare it with value in yellow label
    let yellowBoxText: string = await page.locator("#chrome-cpu").innerText();
    console.log("Chrome CPU load from yellow box : ",yellowBoxText);

    if(yellowBoxText.includes(CPUload))
    {
        console.log("CPU Load Of chrome is equal");
    }
    else{
              console.log("CPU Load Of chrome is not equal");
    }

    expect(yellowBoxText).toContain(CPUload);
});