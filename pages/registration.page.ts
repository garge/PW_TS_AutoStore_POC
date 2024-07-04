import { expect, Locator, Page } from '@playwright/test';

export class RegistrationPage {

    readonly page: Page;
    readonly accountRegistraionLink:string;
    readonly accountFirstName:Locator;
    readonly accountLastName:Locator;
    readonly accountEmail:Locator;
    readonly accountAddress:Locator;
    readonly accountCity:Locator;
    readonly accountCountry:Locator;
    readonly accountState:Locator;
    readonly accountPincode:Locator;
    readonly accountLoginName:Locator;
    readonly accountPassword:Locator;
    readonly accountConfirmPassword:Locator;
    readonly accountNewsLetterSubscribe:Locator;
    readonly accountPrivacyPolicy:Locator;
    readonly accountContinueButton:Locator;
    readonly accountCreationConfirmationMsg:Locator;

    constructor(page: Page) {

        this.page = page;
       // this.accountRegistraionLink = 'https://automationteststore.com/index.php?rt=account/create';
        this.accountFirstName = page.locator('#AccountFrm_firstname');
        this.accountLastName = page.locator('#AccountFrm_lastname');
        this.accountEmail = page.locator('#AccountFrm_email');
        this.accountAddress = page.locator('#AccountFrm_address_1');
        this.accountCity = page.locator('#AccountFrm_city');
        this.accountCountry = page.locator('//select[@id="AccountFrm_country_id"]');
        this.accountState = page.locator('#AccountFrm_zone_id');
        this.accountPincode = page.locator('#AccountFrm_postcode');
        this.accountLoginName = page.locator('#AccountFrm_loginname');
        this.accountPassword = page.locator('#AccountFrm_password');
        this.accountConfirmPassword = page.locator('#AccountFrm_confirm');
        this.accountNewsLetterSubscribe = page.locator('#AccountFrm_newsletter0');
        this.accountPrivacyPolicy = page.locator('#AccountFrm_agree');
        this.accountContinueButton = page.locator('.btn.btn-orange.pull-right.lock-on-click');
        //this.accountCreationConfirmationMsg = page.locator('//span[@class="maintext"]');
        this.accountCreationConfirmationMsg = page.locator('text= YOUR ACCOUNT HAS BEEN CREATED!');
    }

    async registerAccount(){
        await this.page.goto('https://automationteststore.com/index.php?rt=account/create');
        await this.accountFirstName.fill('Test');
        await this.accountLastName.fill('Test');
        await this.accountEmail.fill('Test');
        await this.accountAddress.fill('Test Address');
        await this.accountCity.fill('Pune');
        await this.accountCountry.selectOption('India');
        await this.accountState.selectOption('Maharashtra');
        await this.accountPincode.fill('411001');
        await this.accountLoginName.fill('User062420240909');
        await this.accountPassword.fill('abcd');
        await this.accountConfirmPassword.fill('abcd');
        //await this.accountNewsLetterSubscribe.getByLabel('No').check();
        await this.page.getByLabel('No').check();
        await this.accountPrivacyPolicy.check();
        await this.accountContinueButton.click();
    }

    

    
}