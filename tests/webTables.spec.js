const { test, expect } = require('@playwright/test')

test('Handling Table', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('//table[@id="productTable"]');

    // 1) Total Number of rows and columns

    const columns = await table.locator('thead tr th');
    console.log("Number of columns:", await columns.count());
    expect(await columns.count()).toBe(4);

    const rows = await table.locator('tbody tr');
    console.log("Number of rows:", await rows.count());
    expect(await rows.count()).toBe(5);


    // 2) Select any checkBox from the Table..

    const selectedRows = rows.filter({
        has: page.locator('td'),
        hasText: 'Laptop'
    });
    const checkbox = selectedRows.locator('input').first();
    await checkbox.check();

    // 3) Select all the checkBox from the Table..

    await selectProduct(rows, page, 'Smartphone');
    await selectProduct(rows, page, 'Tablet');
    await selectProduct(rows, page, 'Smartwatch');
    await selectProduct(rows, page, 'Wireless Earbuds');


    // 4) Print all the product Details from the table..

    for (let i = 0; i < await rows.count(); i++) {

        const row = rows.nth(i);
        const tds = row.locator('td');

        for (let j = 0; j < await tds.count() - 2; j++) {
            console.log(await tds.nth(j).textContent());

        }
    };

    // 5) Print all the product Details from the table..
    const pages = await page.locator('.pagination li a');
    console.log("Number of Pages in the table:", await pages.count());
    for (let p = 0; p < await pages.count(); p++) {
        if (p > 0) {
            await pages.nth(p).click()
        }
        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i);
            const tds = row.locator('td');
            for (let j = 0; j < await tds.count() - 1; j++) {
                console.log(await tds.nth(j).textContent());
            }
        };
    }
    await page.waitForTimeout(3000);
});

async function selectProduct(rows, page, name) {
    const selectedRows = rows.filter({
        has: page.locator('td'),
        hasText: name
    });
    await selectedRows.locator('input').check();

};