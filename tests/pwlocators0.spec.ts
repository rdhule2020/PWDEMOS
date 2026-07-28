/*
Locator - Identifies the element on the page
DOM -- Document object model - DOM is an API Interface provided by 

1) page.getByRole() to locate by explicit and implicit accessibility attributes.(Interactive elements)
2) page.getByText() to locate by text content. (non interactive elements)
3) page.getByLabel() to locate a form control by associated label's text.
4) page.getByPlaceholder() to locate an input by placeholder.
5) page.getByAltText() to locate an element, usually image, by its text alternative.
6) page.getByTitle() to locate an element by its title attribute.
7) page.getByTestId() to locate an element based on its data-testid attribute 
    (other attributes can be configured).

*/

import {test, expect, Locator} from "@playwright/test"

 test("Verify Playwright Locators",async ({page})=>{
    await page.goto("https://demo.nopcommerce.com/");

//1. page.getByAltText() to locate an element, usually image, by its text alternative.
//Use this locator when your element supports alt test such as img and area elements

    const Logo:Locator = page.getByAltText('nopCommerce demo store');
    await expect(Logo).toBeVisible();
        // If statement is returning any promise  and 
        // If statement is performing any action then we need to use await
  
    //await expect(page.getByAltText("nopCommerce demo store")).toBeVisible();
    
   
    // 2) page.getByText() - Find an element by the text it contains. You can match by a substring, exact string,
    //     locate by visible text
    // Use this locator to find non interactive elements like div, span, p, etc
    // for interactive elements like button , a, input , etc use role locator.
  

        // const text:Locator= page.getByText("Welcome to our store");
        await expect(page.getByText("Welcome to our store")).toBeVisible(); // full String
        await expect(page.getByText("Welcome to ")).toBeVisible(); //provided substring
        // Instead "Welcome to our store" , "welcome" is also accepted (partial string)

        await expect(page.getByText(/Welcome\s+To\s+Our\s+Store/i)).toBeVisible(); // regular expression


    //3)page.getByRole() - Locating by role (role is not an attribute)
    // to locate by explicit and implicit accessibility attributes.(Interactive elements)
    /*  
    Role locator includes buttons, checkboxes, headings, links, lists, tables,and many
     more and follow w3c specificationsfor ARIA role.
    Prefer for interactive elements linke buttons, checkboxex, table etc
    */
        await page.getByRole("link",{name : 'Register'}).click();

        await expect(page.getByRole("heading",{name:'Register'})).toBeVisible();
        // await  expect(page.getByText("register")).toBeVisible();
        
    //4) page.getByLabel() - locate form control by label's text
    //when to use : Ideal for form fields with visible labels.
     await page.getByLabel('First name:').fill("John");
     await page.getByLabel('Last name:').fill("Kennedy");
     await page.getByLabel('Email:').fill("abc@gmail.com");

    //5)page.getByPlaceholder() - Finds element with a given placeholder text
    // Best for inputs without a lables but having placeholder

    await page.getByPlaceholder("Search store").fill("Apple MacBool Pro");
    
}); 