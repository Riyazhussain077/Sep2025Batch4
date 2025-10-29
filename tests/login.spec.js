const {test,expect} = require ('@playwright/test')
const loginData = require('../test-data/loginData.json');

for (const data of loginData) {
    test(`Login Test : ${data.username}`, async ({ page }) => {

        await page.goto('https://www.demoblaze.com/');

        await page.click('#login2');

        await page.fill('#loginusername', data.username);
        await page.fill('#loginpassword', data.password);

        await page.click('[onclick="logIn()"]');

        // for validation
        if (data.username === 'pavanol' && data.password === 'test@123') {
            const logoutLink = await page.locator('//a[contains(text(),"Welcome pavanol")]');
            await expect(logoutLink).toBeVisible({ timeout: 5000 });
            console.log("This is HomePage");
        } else {
            // for invalid credentials
            page.on('dialog', async (dialog) => {
                //expect(dialog.message()).toContain('Wrong password.');
                console.log(`dialog message : ${dialog.message()}`);
                await dialog.accept();
            });

        };

        await page.waitForTimeout(3000);

    });
}