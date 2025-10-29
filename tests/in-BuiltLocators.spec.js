// Locators in -in built...

// page.getByAltText()  -> to locate an element, usually image, by its text alternatives..
// page.getByPlaceholder() -> to locate an input by placeholder..
// page.getByRole()  -> to locate by explicit and implicit accessibility attribute..
// page.getByText()  -> to locate by text content..
// page.getByLabel()  -> to locate a form control by associated labels text..
// page.getByTitle()  -> to locate an element by its title attribute..
// page.getByTestId()  -> to locate an element based on its data-tested attribute..

const { test, expect } = require('@playwright/test')

test('Locators-InBuilt', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // page.getByAltText()  -> to locate an element, usually image, by its text alternatives..

    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();
    await page.waitForTimeout(1000);


    // page.getByPlaceholder() -> to locate an input by placeholder..

    await page.getByPlaceholder('Username').fill('Admin');
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Password').fill('admin123');

    // page.getByRole()  -> to locate by explicit and implicit accessibility attribute..

    await page.getByRole("button", { type: "submit" }).click();
    await page.waitForTimeout(1000);
    // page.getByText()  -> to locate by text content..

    const name = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent();
    await expect(await page.getByText(name)).toBeVisible();
    await page.waitForTimeout(1000);

    // page.getByLabel()  -> to locate a form control by associated labels text..

    await page.getByLabel('Employee Full Name');

    await page.waitForTimeout(3000);

});

