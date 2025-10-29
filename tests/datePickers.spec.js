const { test, expect } = require('@playwright/test')

test('Date Pickers', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // await page.fill('#datepicker', '10/17/2025');

    // Date pickers

    const year = '1993';
    const month = 'May';
    const date = '2';

    await page.click('input#datepicker');   // opens the calender

    while (true) {
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();

        if (currentYear == year && currentMonth == month) {
            break;
        }

        //await page.locator('[title="Next"]').click(); // Next
        await page.locator('[title="Prev"]').click(); // Past

    }

    const dates = await page.$$('//a[@class="ui-state-default"]');

    // Date Selection using Loop

    // for(const dt of dates) {

    //     if(await dt.textContent() == date) {
    //         await dt.click();
    //         break;
    //     }
    // }

    // Date Selection  - without loop

    // await page.locator('//a[@class="ui-state-default"][text()="18"]').click();

    await page.click(`//a[@class="ui-state-default"][text()='${date}']`);

    await page.waitForTimeout(3000);

});