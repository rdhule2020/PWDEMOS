/*
only
skip
fail
fixme
slow
*/

import {test, expect} from "@playwright/test";

test('test1', async({page})=>{
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
})

test.skip('test2', async({page})=>{
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
})
//skip the test based on some condition
test('test3', async({page,browserName})=>{
    test.skip(browserName==='chromium','This test skipped if this browser is firefox');
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
})

test.fail('test4', async({page})=>{
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
})

test('test5', async({page})=>{
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
})

test('fail in WebKit', async ({ page, browserName }) => {
  test.fail(browserName === 'webkit', 'This feature is not implemented for Mac yet');
  // ...
});

//fixme
test.fixme('test6', async({page})=>{
    await page.goto('https://www.google.com/');
    //await expect(page).toHaveTitle('Google');
})

//slow
test('test7', async({page})=>{
    test.slow(); //triple the timeout
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
})