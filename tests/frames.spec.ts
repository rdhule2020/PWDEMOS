/*
An iframe (short for “inline frame”) is an HTML element that allows you to embed another HTML document
within the current document. 
Iframes are commonly used to embed external content such as videos, maps, or other web pages 
(as seen here) into a web page without affecting the parent document.
*/

import {test, expect, Locator, FrameLocator} from "@playwright/test";

test("frames demo", async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    //total no of frames present on the page
    const frames = page.frames();
    console.log(frames.length);

    // //approach 1: using frame
    // const frame = page.frame({url : "https://ui.vision/demo/webtest/frames/frame_1"});
    // if(frame)
    // {
    //     await frame.locator("[name='mytext1']").fill('Hello');
    //     //await frame.fill("[name='mytext1']","Hello");
    // }else{
    //     console.log("Frame is not available");
    // }

   //Approach 2 : Using frame locator

    const inputbox = page.frameLocator("[src='frame_1.html']").locator("input[name='mytext1']");
    await inputbox.fill('John');

});


test.only("Inner frame demo", async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame3 = page.frame({url : "https://ui.vision/demo/webtest/frames/frame_3"})
     
    if(frame3){
        await frame3.locator("input[name='mytext3']").fill('Welcome');
        const childFrames = frame3.childFrames();
        console.log("Child frames inside the frames 3 : "+ childFrames.length);
        const radio = childFrames[0].getByLabel("I am a human");
        await radio.check();
        await expect(radio).toBeChecked();
    }
    else{
        console.log("Frame 3 is not available");
    }
});


