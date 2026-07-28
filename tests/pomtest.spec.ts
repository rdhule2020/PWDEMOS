import {test, expect} from '@playwright/test';

import {LoginPage} from '../pages/LoginPage';
import {HomePage} from '../pages/HomePage';
import {CartPage} from '../pages/CartPage';

test('user can login, Add product to the cart', async({page})=>{

    await page.goto("https://www.demoblaze.com/index.html");

    // Login Page
    const loginpage = new LoginPage(page);
    /*
    await loginpage.clickLoginLink();
    await loginpage.enterUserName('rahulpdhule@gmail.com');
    await loginpage.enterPassword('Admin123');
    await loginpage.clickLoginButton();
    */
    await loginpage.performLogin('rahulpdhule@gmail.com','Admin123');

    //Home Page
    const homepage = new HomePage(page);
    await homepage.addProductToCart("Samsung galaxy s6");
    await homepage.gotoCart();
 
   

    //Cart Page
    const cartpage = new CartPage(page);
    await page.waitForTimeout(2000);
    const isProductIncart = await cartpage.checkProductInCart('Samsung galaxy s6');
    await page.waitForTimeout(2000);
    expect (isProductIncart).toBeTruthy();
});