const { test, expect } = require('@playwright/test')

test('Frames', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    // Total Frames

    const allFrames = await page.frames();
    console.log('Number of Frames:', allFrames.length);

    // Approach 1: using name or url..

    //const frameName = await page.frame('name'); // if name is present,we can use this..

    // const frame1 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' });
    // await frame1.fill('[name="mytext1"]', 'Zameer');


    // Approach 2: Using frame Locator

    const inputBox = await page.frameLocator('frame[src="frame_1.html"]').locator('[name="mytext1"]');
    inputBox.fill('Good Morning!!');
    
    await page.waitForTimeout(4000);


});