const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { Cartpage } = require('../pages/CartPage');

test('POM', async ({ page }) => {

    // Login Page

    const login = new LoginPage(page);
    await login.gotoUrl();
    await login.login('pavanol', 'test@123');
    await page.waitForTimeout(3000);

    // Home Page

    const home = new HomePage(page);
    await home.addProducts('Nexus 6');
    await page.waitForTimeout(3000);
    await home.goToCart();

    // Cart page

    const cart = new Cartpage(page);
    await page.waitForTimeout(3000);
    const status = await cart.checkProduct('Nexus 6');
    await expect(status).toBe(true);

});