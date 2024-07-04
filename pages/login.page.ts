import { Locator, Page, expect } from '@playwright/test';
import configHelper from '../helpers/configHelper';
import fs from 'fs';
import PropertiesReader from 'properties-reader';

export class LoginPage {
    readonly page: Page;
    readonly loginUsername: Locator;
    readonly loginPassword: Locator;
    readonly submitButton: Locator;
    readonly invalidCredMsg:Locator;
   
    constructor(page: Page) {
        this.page = page;
        this.loginUsername = page.locator('#loginFrm_loginname');
        this.loginPassword = page.locator('#loginFrm_password');
        this.submitButton = page.locator("[title='Login']");
        this.invalidCredMsg= page.locator('.alert.alert-error.alert-danger');
    }

    async performLogin() {
        
        // await this.page.goto(configHelper.getBaseUrl())
        await this.navigateToUrL()
        // await this.loginUsername.click();
        await this.typeUserName(configHelper.getUsername());
        await this.typePassword(configHelper.getPassword());
        await this.ClickOnLoginSubmitButton();
        

    }
    async ClickOnLoginSubmitButton() {
        await this.submitButton.click();
    }

    async typeUserName(username: string){
        await this.loginUsername.fill(username);
    }

    async typePassword(password: string){
        await this.loginPassword.fill(password);
    }

    async navigateToUrL(){
        await this.page.goto(configHelper.getBaseUrl());
    }
   
    // Verification Method
    async verifyErrorMessageForInvalidCred(message: string){
    const errorText = await this.invalidCredMsg.textContent()
    expect(errorText?.trim()).toContain(message);
    }

    
}
