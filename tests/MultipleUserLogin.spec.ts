// Demo without actual URL and other data -- update data to run 
import {test, expect} from "@playwright/test";

test('Multiple user login',async({browser})=>{

    //create independent browser sessions
    const adminContext = await browser.newContext();
    const managerContext = await browser.newContext();
    const userContext = await browser.newContext();

    //Create pages
    const adminPage = await adminContext.newPage();
    const managerPage = await managerContext.newPage();
    const userPage = await userContext.newPage();

    //login simultaneously
    await Promise.all([
        login(adminPage, 'admin', 'admin123'),
        login(managerPage, "manager", 'manager123'),
        login(userPage, 'user1', 'user123')
    ]);

    //validate each user's dashboard 
    

    //close Sessions
    await adminContext.close();
    await managerContext.close();
    await userContext.close();

});

async function login(page: any, username:string, password:string){
    await page.goto('URL');
    await page.getByLabel("Username").fill(username);
    await page.getByLabel("Password").fill(password);
    await page.getByRole('button',{name: 'login'}).click();
}

