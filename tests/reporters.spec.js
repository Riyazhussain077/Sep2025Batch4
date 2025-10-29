const { test, expect } = require('@playwright/test')

test("Test 1", async ({ page }) => {

    await page.goto('https://meet.google.com/landing');
    await expect(page).toHaveTitle('Google Meet');
});

test("Test 2", async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');
    await expect(page).toHaveURL('https://www.demoblaze.com/');
});

test('Test 3', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    await expect(page).toHaveURL('https://www.amazon.in/')
});