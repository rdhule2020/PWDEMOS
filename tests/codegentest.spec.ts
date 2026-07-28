import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 15'],
});

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await expect(page.getByRole('dialog', { name: 'Log in' }).getByLabel('Close')).toBeVisible();
  await page.getByRole('dialog', { name: 'Log in' }).getByLabel('Close').click();
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  await expect(page.locator('#cat')).toContainText('CATEGORIES');
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByLabel('Sign up').getByText('Close').click();
  await page.getByRole('link', { name: 'Log in' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Log in' }).click();
});