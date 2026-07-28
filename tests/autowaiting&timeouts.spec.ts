import {test, expect} from "@playwright/test";

test("Autowaitinng & timeouts ", async({page})=>{

    test.setTimeout(60000);
   await page.goto("https://demowebshop.tricentis.com/");

   // Assertions - Auto wait works
   await expect(page).toHaveURL("https://demowebshop.tricentis.com/",{timeout:10000});
   await expect(page.locator('text=Welcome to our store')).toBeVisible({timeout:10000});

   //Actions - auto wait works
   await page.locator("#small-searchterms").fill("Laptop",{force:true}); //search box - Force action( it will not so actionalibity checks)
   await page.locator("input[value='Search']").click({force:true}); // clicking on search button -Force action
})