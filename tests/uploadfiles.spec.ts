import {test,expect} from "@playwright/test";

test('Single file upload', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#singleFileInput").setInputFiles("uploads/Test1.txt");
    await page.locator("button:has-text('Upload Single File')").click();
    const msg = await page.locator("[id='singleFileStatus']").textContent();
     expect(msg).toContain("Test1.txt");
     console.log("Upload Successful.....");
    await page.waitForTimeout(5000);
});

test.only('Multiple files upload', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("[id='multipleFilesInput']").setInputFiles(["uploads/testfile1.pdf","uploads/testfile2.pdf"]);
    await page.locator("button:has-text('Upload Multiple Files')").click();
    const msg = await page.locator("#multipleFilesStatus").textContent();
    expect(msg).toContain("testfile1.pdf");
    expect(msg).toContain("testfile2.pdf");
      console.log("Files Uploaded Successful.....");
    await page.waitForTimeout(5000);
});