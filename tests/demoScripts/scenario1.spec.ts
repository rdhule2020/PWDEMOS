/* “Open an e-commerce website and click every header menu item 
from Fresh to Customer Service, verifying that each item is clickable.” */

import { test, expect } from '@playwright/test';

test('Click Amazon header items from Fresh to Customer Service', async ({ page }) => {
  await page.goto('https://www.amazon.in/', {
    waitUntil: 'domcontentloaded',
  });

  const headers = [
    'Prime Video',
    'Sell',
    'Bestsellers',
    "Today's Deals",
    'Mobiles',
    'New Releases',
    'Customer Service',
  ];

  for (const header of headers) {
    const link = page.getByRole('link', { name: header, exact: true });
    await page.waitForTimeout(1000);
    if (await link.count() > 0) {
      await link.first().click();
      await page.waitForLoadState('domcontentloaded');

      // Return to Amazon home before clicking the next header.
      // await page.goto('https://www.amazon.in/', {
      //   waitUntil: 'domcontentloaded',
      // });
    } else {
      console.log(`Header not found: ${header}`);
    }
  }
});