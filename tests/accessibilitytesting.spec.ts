/*
1) Playwright can be used to test your application for many types of accessibility issues.
Examples:
    Missing or Improper ALT Text for Images
    Poor Color Contrast
    Missing Form Labels
    Keyboard Navigation Issues

Every website should follow WCAG guidelines.
    - Web Content Accessibility Guidelines (WCAG) 

Install @axe-core/playwright: 
    npm install @axe-core/playwright

https://www.npmjs.com/package/@axe-core/playwright


*/

import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("Accessibility Test", async ({ page }, testInfo) => {

    //await page.goto("https://demowebshop.tricentis.com/");
    //await page.goto("https://testautomationpractice.blogspot.com/");
    await page.goto("https://practice.expandtesting.com/dynamic-table#google_vignette");

    // //1) Scanning detect all types of WCAG violations.
    // const accessibilityScanResults = await new AxeBuilder({page}).analyze();
    // console.log(accessibilityScanResults.violations); 
    // console.log(accessibilityScanResults.violations.length); 

    // expect(accessibilityScanResults.violations).toEqual([]);
    // expect(accessibilityScanResults.violations.length).toEqual(0);

    // //2) Scanning for few wcag violations
    // const accessibilityScanResults1 = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
    // await testInfo.attach('accessibility result', {
    //     body: JSON.stringify(accessibilityScanResults1, null, 2),
    //     contentType: 'application/json'
    // });

    // console.log("number of violations : ", accessibilityScanResults1.violations.length);
    // expect(accessibilityScanResults1.violations.length).toEqual(0);

    //3) scanning for few wcag violations with rules
     const accessibilityScanResults1 = await new AxeBuilder({ page }).disableRules(['duplicate-id']).analyze();
    await testInfo.attach('accessibility result', {
        body: JSON.stringify(accessibilityScanResults1, null, 2),
        contentType: 'application/json'
    });
        console.log("number of violations : ", accessibilityScanResults1.violations.length);
        expect(accessibilityScanResults1.violations.length).toEqual(0);
});
