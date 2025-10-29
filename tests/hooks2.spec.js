const { test, expect } = require('@playwright/test')

let page;

test.beforeEach(async ({ browser }) => {

    page = await browser.newPage();
    await page.goto('https://www.demoblaze.com/');
    await page.locator('#login2').click();
    await page.fill('#loginusername', 'pavanol');
    await page.fill('#loginpassword', 'test@123');
    await page.click('[onclick="logIn()"]');
});

test.afterEach(async () => {

    await page.click('#logout2');
});

test('Home Page Test', async () => {

    const products = await page.locator('//div[@id="tbodyid"]//div//div//h4//a');
    await expect(products).toHaveCount(9);

});


test('Add product to Cart', async () => {

    await page.locator('//a[text()="Samsung galaxy s7"]').click();
    await page.locator('//a[text()="Add to cart"]').click();

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    });

});