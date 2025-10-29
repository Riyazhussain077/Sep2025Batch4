const { test, expect } = require('@playwright/test')

test('IFrames', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame3 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' });
    // frame3.locator('[name="mytext3"]').fill('Welcome all!!');

    // Child Frame (or) Nested Frame (or) Inner Frame

    const childFrame = await frame3.childFrames();
    await childFrame[0].locator('//div[@id="i9"]/div[3]/div').check();

    await page.waitForTimeout(3000);

});