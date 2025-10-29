const { test, expect } = require('@playwright/test')

test('Handle Radio Button', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    // Radio Button

    //await page.locator('[value="radio3"]').check();
    await page.check('[value="radio3"]');

    await expect(await page.locator('[value="radio3"]')).toBeChecked();
    await expect(await page.locator('[value="radio3"]').isChecked()).toBeTruthy();
    await expect(await page.locator('[value="radio2"]').isChecked()).toBeFalsy();

    await page.waitForTimeout(2000);


});