import {test, expect, Locator} from '@playwright/test';

test("Comparing methods", async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");
    const products : Locator = page.locator(".product-title");

    //1) innerText() VS textContent()
    // console.log(await products.nth(1).innerText());
    // console.log(await products.nth(1).textContent());
        const count = await products.count();
        for(let i=0; i<count ;i++){
            /*
            const productName : string =await products.nth(i).innerText(); 
            // --> extract plain textnEliminates white space and line brakes
            console.log(productName);
            */
            const productName : string | null = await products.nth(i).textContent();
            console.log(productName?.trim());


            // textContent() extracts text including hidden elements. Includes extra white 
            // spaces and linebrakes etc
        }

        //2) allInnerTexts() Vs allTextContents()

            console.log("**** Comparing allInnerText() and AllTextContent() ****");
            const productNames :string[] = await products.allInnerTexts();
            console.log("Product Names by allInnerText(): ",productNames);

            const productNamess :String[] = await products.allTextContents();
            console.log("Product Names by allTextContents() : ", productNamess);

            const productNamesTrimmed :String[]= productNamess.map(text=>text.trim());
            console.log("Product names after trimmed : ",productNamesTrimmed);
            
        //3) all()
            const productsLocators : Locator[] = await products.all();
            console.log(productsLocators);
            console.log(await productsLocators[1].innerText());
            //for of loop
            console.log("**** using for of loop ****")
            for(const prodloc of productsLocators){
                console.log(prodloc);
                console.log(await prodloc.innerText());
            }
            console.log("**** using for in loop ****")
            // for in loop ( to get index)
             for(let i in productsLocators){
                console.log(await productsLocators[i].innerText());
            }
 
        });

