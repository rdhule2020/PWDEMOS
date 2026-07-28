import {test, expect, Locator} from "@playwright/test";

test("Static table ", async({page})=>{
            await page.goto("https://testautomationpractice.blogspot.com/");
            const table : Locator = page.locator("table[name='BookTable'] tbody"); 
            await expect(table).toBeVisible();

            //1) count number of rows in table
            const rows = table.locator("tr");  //returns all the rows including header  (chaining of locators)
            await expect(rows).toHaveCount(7); //approach 1 (7 rows)

            const rowCount : number = await rows.count()
            console.log("Number of rows in a table: ", rowCount);
            expect(rowCount).toBe(7); // approach 2

    //2) count number of headers / columns
            const columns : Locator =  rows.locator("th"); //(chaining of locators)
            await expect(columns).toHaveCount(4);

            const columnCount : number = await columns.count();
            console.log("Number of column header :", columnCount);
            expect(columnCount).toBe(4);

    //3) Read all the data from 2nd row ( index 2 means 3rd row including header)
            const secondRowCells :Locator = rows.nth(2).locator('td');
            const secondRowTexts : string[] = await secondRowCells.allInnerTexts();
            console.log("2nd row data : ",secondRowTexts); // [ 'Learn Java', 'Mukesh', 'Java', '500' ]
            await expect(secondRowCells).toHaveText( [ 'Learn Java', 'Mukesh', 'Java', '500' ]);

            console.log("Printing 2nd row data :");
            for(const text of secondRowTexts)
                {
                    console.log(text);
                }


    //4) Read all data from table excluding header
            console.log("Printing all data from the table");
            console.log(" BookName  Author  subject  price")
            const allRowsData =await rows.all(); // get all row locators   //all() returns array of locators
            for(const row of allRowsData.slice(1))  /// slice(1) --> skip header part
                {
                    const cols =await row.locator("td").allInnerTexts();
                    console.log(cols.join('\t'));
                }

    //5) Print bookname where author is Mukesh
            const mukeshBooks:string[]=[];
            console.log("Books written by Mukesh .....")
        for(const row of allRowsData.slice(1))  /// slice(1) --> skip header part
            {
               const cells : string[] = await row.locator('td').allInnerTexts();
               const author = cells[1];
               const book = cells[0];
               if(author === 'Mukesh')
               {
                console.log(`Author : ${author} \t Book : ${book}`);
                mukeshBooks.push(book);
               }
            }
            expect(mukeshBooks).toHaveLength(2);


        
    //6) Calculate the total value of books price
            let  totalPrice =0;

            for(const row of allRowsData.slice(1))  /// slice(1) --> skip header part
                {
                const cells : string[] = await row.locator('td').allInnerTexts();
                const price = cells[3];
                totalPrice =totalPrice + parseInt(price);
                }
            console.log("Total Price : ", totalPrice);
            expect(totalPrice).toBe(7100);
});