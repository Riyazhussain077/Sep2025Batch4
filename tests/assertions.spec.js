//1) expect(page).toHaveURL()                  page has url
//2) expect(page).toHaveTitle()                page has title
//3) expect(locator).toBeVisible               element is visible
//4) expect(locator).toBeEnabled               control is enabled
//5) expect(locator).toBeChecked               Radio/checkbox is checked
//6) expect(locator).toHaveText()              element has text
//7) expect(locator).toContainText()           element contain text
//8) expect(locator).toHaveValue(value)        input has a value..
//9)expect(locator).toHaveCount()            list of elements has given length

const { test, expect } = require('@playwright/test')

test('Assertions', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/register');

    //1) expect(page).toHaveURL()                  page has url
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    //2) expect(page).toHaveTitle()                page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    //3) expect(locator).toBeVisible               element is visible
    const logoElement = await page.locator('.header-logo');
    await expect(logoElement).toBeVisible();

    // await expect(await page.locator('.header-logo')).toBeVisible();

    //4) expect(locator).toBeEnabled               control is enabled

    const searchBox = await page.locator('input#small-searchterms');
    await expect(searchBox).toBeEnabled();

    //5) expect(locator).toBeChecked               Radio/checkbox is checked

    // Radio Button
    await page.waitForTimeout(1000);
    const radioButton = await page.locator('//input[@id="gender-female"]');
    await radioButton.check();
    await expect(radioButton).toBeChecked();
    await page.waitForTimeout(1000);

    // CheckBox

    const checkBox = await page.locator('input[id="Newsletter"]');
    await expect(checkBox).toBeChecked();

    //6) expect(locator).toHaveText()              element has text
    await expect(await page.locator('.page-title h1')).toHaveText('Register');


    //7) expect(locator).toContainText()           element contain text
    await expect(await page.locator('.page-title h1')).toContainText('Reg');

    //8) expect(locator).toHaveValue(value)        input has a value..
    await page.waitForTimeout(1000);
    const emailBox = await page.locator('input[id="Email"]');
    emailBox.fill("TestDemo@123");
    await expect(emailBox).toHaveValue('TestDemo@123');
    await page.waitForTimeout(1000);


    //9)expect(locator).toHaveCount()            list of elements has given length

    const options = await page.locator('#customerCurrency option');
    await expect(options).toHaveCount(2);

    await page.waitForTimeout(3000);


});