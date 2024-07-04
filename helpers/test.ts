import { test as base } from '@playwright/test'
import { LoginPage } from '../pages/login.page';
import { HomePage } from '../pages/home.page';
import { RegistrationPage } from '../pages/registration.page';

interface CustomFixtures {

    loginPage: LoginPage;
    homePage: HomePage;
    registrationPage: RegistrationPage;
}

export const test = base.extend<CustomFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    registrationPage: async ({ page }, use) => {
        await use(new RegistrationPage(page));
    },
});

export { expect } from '@playwright/test';
