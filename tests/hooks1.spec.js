const { test, expect } = require('@playwright/test')

test('Home Page Test', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    // Login Page

    await page.locator('#login2').click();
    await page.fill('#loginusername', 'pavanol');
    await page.fill('#loginpassword', 'test@123');
    await page.click('[onclick="logIn()"]');

    // Home Page

    const products = await page.locator('//div[@id="tbodyid"]//div//div//h4//a');
    await expect(products).toHaveCount(9);

    // Logout

    await page.click('#logout2');
});


test('Add product to Cart', async ({ page }) => {


    await page.goto('https://www.demoblaze.com/');

    // Login Page

    await page.locator('#login2').click();
    await page.fill('#loginusername', 'pavanol');
    await page.fill('#loginpassword', 'test@123');
    await page.click('[onclick="logIn()"]');


    // Add product to cart

    await page.locator('//a[text()="Samsung galaxy s7"]').click();
    await page.locator('//a[text()="Add to cart"]').click();

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    });

    // Logout

    await page.click('#logout2');

});