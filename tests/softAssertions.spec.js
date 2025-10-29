const { test, expect } = require('@playwright/test')

test('Soft- Assertions', async ({ page }) => {

    await page.goto('https://www.flipkart.com/');

    // Hard Assertions

    await expect(page).toHaveURL('https://ww.flipkart.com/');
    await expect(page).toHaveTitle('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
    await expect(await page.locator('div._16ZfEv')).toBeVisible();

    // Soft Assertions

    await expect.soft(page).toHaveURL('https://ww.flipkart.com/');
    await expect.soft(page).toHaveTitle('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
    await expect.soft(await page.locator('div._16ZfEv')).toBeVisible();

    await page.waitForTimeout(2000);

});