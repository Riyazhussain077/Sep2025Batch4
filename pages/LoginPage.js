exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.loginLink = '#login2';
        this.userNameValue = '#loginusername';
        this.passWordValue = '#loginpassword';
        this.loginButton = '//button[text()="Log in"]';
    }

    async gotoUrl() {
        await this.page.goto('https://www.demoblaze.com/');
    };

    async login(userName, passWord) {
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.userNameValue).fill(userName);
        await this.page.locator(this.passWordValue).fill(passWord);
        await this.page.locator(this.loginButton).click();
    }
};