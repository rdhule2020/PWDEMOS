import { test, expect } from '@playwright/test';

test('Infinite scroll on booksbykilo.in', async ({ page }) => {
    test.slow();
await page.goto("https://www.booksbykilo.in/children-books?pricerange=201to500");

    // window.scrollTo(0,document.body.scrollHeight);
    let previousHeight=0;
    let bookFound =false;
    while(true){
    const titles = await page.locator("#productsDiv h3").allInnerTexts();
        if(titles.includes("The Blue Eye"))
        {
            console.log("Book found");
            bookFound=true;
            expect(bookFound).toBeTruthy();
            break;
        }
        //scroll down the page
        await page.evaluate(()=>{
            window.scrollTo(0,document.body.scrollHeight);
        })

        // wait for the new content to load
        await page.waitForTimeout(5000);

        //capture the current height of the page
       const currentHeight = await page.evaluate(()=>{
            return document.body.scrollHeight;
        })

        console.log("previous Height : ", previousHeight);
         console.log("current Height : ", currentHeight);

         if(currentHeight === previousHeight){
            break;
         }
         previousHeight=currentHeight;
    }
    console.log("Reached end of the page");
    if(!bookFound){
        console.log("Bok not found");
    }
});