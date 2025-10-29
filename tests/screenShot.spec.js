const { test, expect } = require('@playwright/test')

test('Page ScreenShot' , async ({page}) => {

    await page.goto('https://www.amazon.in/');
    await page.screenshot({path : 'tests/screenShots/' + Date.now() + 'HomePage.png'});

});

test('Full Page ScreenShot', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    await page.screenshot({ path: 'tests/screenShots/' + Date.now() + 'FullPage.png', fullPage: true });

});

test('Element ScreenShot', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    await page.locator('//img[contains(@alt,"Redmi A4 5G")][contains(@class,"a-dynamic-image dcl-dynamic-image")]')
        .screenshot({ path: 'tests/screenShots/' + Date.now() + 'SelectItem.png' });

});