import { test, expect } from '@playwright/test';

// test.use({
//   viewport: {
//     height: 720,
//     width: 1280
//   }
// });

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('Rahul');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('Rahul123');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('dialog', { name: 'Log in' }).getByLabel('Close').click();
});