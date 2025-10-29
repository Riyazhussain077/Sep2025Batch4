import { test, expect } from '@playwright/test'

test('Handle CheckBox', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    await page.locator('//input[@id="checkBoxOption2"]').check();
    //await page.check('//input[@id="checkBoxOption2"]');

    expect(await page.locator('//input[@id="checkBoxOption2"]')).toBeChecked();
    expect(await page.locator('//input[@id="checkBoxOption2"]').isChecked()).toBeTruthy();

    await page.locator('//input[@id="checkBoxOption2"]').uncheck();
    expect(await page.locator('//input[@id="checkBoxOption2"]')).not.toBeChecked();

    expect(await page.locator('//input[@id="checkBoxOption2"]').isChecked()).toBeFalsy();


    // Multiple CheckBoxes..

    const checkBoxLoc = [
        '//input[@id="checkBoxOption1"]',
        '//input[@id="checkBoxOption2"]',
        '//input[@id="checkBoxOption3"]'
    ];

    for(const locator of checkBoxLoc) {
        await page.locator(locator).check();
    }

    for(const locator of checkBoxLoc) {

        if(await page.locator(locator).isChecked()) {
            await page.locator(locator).uncheck();
        }
    }
    await page.waitForTimeout(2000);

});