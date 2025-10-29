const { test, expect } = require('@playwright/test')

test('Mouse Hover', async ({ page }) => {

    await page.goto('https://www.amazon.in/');

    const hello = await page.locator('//span[contains(text(),"Account ")]');
    const order = await page.locator('//span[text()="Your Orders"]');

    // Mouse Hover
    await hello.hover();
    await order.click();

    await page.waitForTimeout(2000);

});