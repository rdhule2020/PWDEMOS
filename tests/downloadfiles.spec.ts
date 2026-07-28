import {test, expect} from "@playwright/test";
import fs from 'fs';

test('Text file download', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html");
await page.locator("textarea[id='inputText']").fill("Welcome to download files");
await page.locator("#generateTxt").click();

const [download] = await Promise.all([page.waitForEvent("download"),page.locator("#txtDownloadLink").click()]);

//save the file to custom path
const downloadPath = "downloads/testfile.txt";
await download.saveAs(downloadPath);

//check if file exist in the path
const fileExists = fs.existsSync(downloadPath);
expect(fileExists).toBeTruthy();

//cleanup the downloade files
if(fileExists)
{
    fs.unlinkSync(downloadPath);
}
await page.waitForTimeout(5000);
});


test.only('Download PDF Files', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html");
await page.locator("textarea[id='inputText']").fill("Welcome to download files");
await page.locator("#generatePdf").click();

const [download] = await Promise.all([page.waitForEvent("download"),page.locator("#pdfDownloadLink").click()]);

//save the file to custom path
const downloadPath = "downloads/testfile.pdf";
await download.saveAs(downloadPath);

//check if file exist in the path
const fileExists = fs.existsSync(downloadPath);
expect(fileExists).toBeTruthy();

//cleanup the downloade files
if(fileExists)
{
    fs.unlinkSync(downloadPath);
}
await page.waitForTimeout(5000);
});