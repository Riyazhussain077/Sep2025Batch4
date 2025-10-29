const { test, expect } = require('@playwright/test')


test('Locators', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    //  click on login Button              -> CSS

    await page.locator('#login2').click();
    //await page.click('#login2');

    //  Provide Username                   -> CSS
    await page.waitForTimeout(1000);
    //await page.locator('#loginusername').fill('pavanol');
    await page.fill('#loginusername', 'pavanol');

    // Provide Password                    -> CSS
    await page.waitForTimeout(1000);
    await page.locator('[id="loginpassword"]').fill('test@123');
    //await page.fill('[id="loginpassword"]' , 'test@123');

    // Click on Login Button               -> Xpath
    await page.waitForTimeout(1000);
    await page.locator('//button[text()="Log in"]').click();
    //await page.click("//button[text()='Log in']");

    // Verify logout link presence

    const logoutLink = await page.locator('//a[contains(@id,"gout2")]');

    await expect(logoutLink).toBeVisible();

    await page.waitForTimeout(3000);

});