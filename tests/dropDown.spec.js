const { test, expect } = require('@playwright/test')

test('Handle Dropdown', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Multiple ways to select options from the dropdown

    await page.locator('#country').selectOption({label : 'Canada'}); // label in visible text
    await page.locator('#country').selectOption('France'); // Visible Text
    await page.locator("#country").selectOption({ value: 'uk'}); // By using Value
    await page.locator('#country').selectOption({ index: 5 }); // by using index
    await page.selectOption('#country' , 'India'); // by text..


    // Assertions 

    // 1) Check number of options in dropdown         -> Method 1

    // const options = await page.locator('#country option');
    // await expect(options).toHaveCount(10);

    // 2) Check number of options in dropdown         -> Method 2

    // const options = await page.$$('#country option');
    // console.log("Number of options: ", options.length);
    // await expect(options.length).toBe(10);

    // 3) Check presence of value in the dropdown     -> Method 1

    const content = await page.locator('#country').textContent();
    await expect(content.includes('usa')).toBeFalsy();

    // 4) check the presence of value in the dropdown  -> Method 2 (using Loop)

    const options = await page.$$("#country option");

    for(const option of options) {

        //console.log(await option.textContent());
        let value = await option.textContent();
        if(value.includes('Chennai')) {
            break;
        }
        
    };

    await page.waitForTimeout(2000);
});