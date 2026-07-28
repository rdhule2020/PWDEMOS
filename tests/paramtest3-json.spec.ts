import { test, expect } from '@playwright/test';
import fs from 'fs';

const jsonPath = "testData/data.json";
const loginTestData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

test.describe('Login data driven test', async () => {

    for (const { email, password, validity } of loginTestData) {

        test(`Login test with email: "${email}" and password: "${password}" `, async ({ page }) => {
            await page.goto("https://demowebshop.tricentis.com/login");
            await page.getByLabel('Email:').fill(email);
            await page.getByLabel('Password:').fill(password);
            await page.getByRole('button', { name: 'Log in' }).click();

            if (validity.toLowerCase() === 'valid') {
                const logoutLink = page.locator('a[href="/logout"]');
                await expect(logoutLink).toBeVisible({ timeout: 5000 });
            } else {
                const errorMessage = page.locator('.validation-summary-errors');
                await expect(errorMessage).toBeVisible({ timeout: 5000 });
                await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
            }
        });

    }


});