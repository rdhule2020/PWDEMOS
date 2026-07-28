# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: reporters.spec.ts >> logotest
- Location: tests\reporters.spec.ts:9:5

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://demowebshop.tricentis.com/", waiting until "load"

```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | 
  3  | test.beforeEach('launching app',async({page})=>{
  4  | 
> 5  | await page.goto("https://demowebshop.tricentis.com/")
     |            ^ Error: page.goto: Test timeout of 30000ms exceeded.
  6  | 
  7  | })
  8  | 
  9  | test('logotest', async ({ page }) => {
  10 |     await expect(page.locator("img[alt='Tricentis Demo Web Shop']")).toBeVisible();
  11 | });
  12 | 
  13 | test('title test', async ({ page }) => {
  14 |     expect(await page.title()).toContain("Demo Web Shop1");
  15 | });
  16 | 
  17 | test('search test', async ({ page }) => {
  18 |     await page.locator('#small-searchterms').fill("laptop");  // fill teh text in search box
  19 |     await page.locator("input[value='Search']").click();      // click on the button
  20 |     await expect.soft(page.locator('h2 a').nth(0)).toContainText("laptop", { ignoreCase: true });
  21 | });
```