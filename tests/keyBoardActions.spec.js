const { test, expect } = require('@playwright/test')

test('KeyBoard Actions', async ({ page }) => {

    await page.goto('https://gotranscript.com/text-compare');

    await page.locator('[name="text1"]').fill('Good Morning!');
    await page.waitForTimeout(1000);
    // Ctrl + A    -> Select the Text

    await page.keyboard.press('Control+A');
    await page.waitForTimeout(1000);
    // Ctrl + C    -> Copy the Text

    await page.keyboard.press('Control+C');
    await page.waitForTimeout(1000);
    // TAB 

    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');
    await page.waitForTimeout(1000);
    // Ctrl + V    -> Paste the Text

    await page.keyboard.press('Control+V');

    await page.waitForTimeout(3000);

});