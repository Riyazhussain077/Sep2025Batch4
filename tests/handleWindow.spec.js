const { test, expect, chromium } = require('@playwright/test')

test('Handle Pages/Windows', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    const allPages = context.pages();
    console.log("Number of pages created: ", allPages.length);

    await page1.goto('https://testautomationpractice.blogspot.com/');
    await expect(page1).toHaveURL('https://testautomationpractice.blogspot.com/');

    await page2.goto('https://www.amazon.in/');
    await expect(page2).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');

    await page1.waitForTimeout(3000);

});

test.only('Handle Multiple pages/windows', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle('OrangeHRM');

    const pagePromise = context.waitForEvent('page');
    await page1.locator('//a[text()="OrangeHRM, Inc"]').click();

    const newPage = await pagePromise;
    await expect(newPage).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM');

    await page1.waitForTimeout(3000);
    await newPage.waitForTimeout(2000);

});
