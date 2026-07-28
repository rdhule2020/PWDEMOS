import {test, expect, chromium} from '@playwright/test';

test("Handle cookies", async ()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
   await context.addCookies([
        {name:'maycookie', value:'123456', url:'http://www.automationpractice.pl/index.php'}        
        ]);
    console.log("Cookie added ...");
    await page.goto("http://www.automationpractice.pl/index.php");
    //Get the details of cookie by name
    const allcookiesadded =await context.cookies();
    const retrievedcookie = allcookiesadded.find(c => c.name ==='mycookie');
        console.log("Printing cookies : " ,retrievedcookie);
        expect(retrievedcookie?.value).toBe('12345');
        expect(retrievedcookie).toBeDefined();
    await page.waitForTimeout(7000);

    //find number of cookies
        let allcookies = await context.cookies();
        console.log("total number of cookies created : ", allcookies.length);
        expect(allcookies.length).toBeGreaterThan(0);
        console.log('Printing all cookies')
        for(const cookie of allcookies)
        {
            console.log(`${cookie.name} : ${cookie.value}`);
        }

        //clear all cookies
        await context.clearCookies();

        //verify the number of cookies
        const cookiesafterclear = await context.cookies();
        console.log("Number of coookies after clearing: ", cookiesafterclear.length);
        expect(cookiesafterclear.length).toBe(0); 
});