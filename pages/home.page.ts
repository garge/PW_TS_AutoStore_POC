import { expect, Locator, Page } from '@playwright/test';

export class HomePage {

    readonly page: Page;
    readonly eventsNavigationLink: Locator;
    readonly homeNavigationLink: Locator;
    readonly contactUsLink:Locator;
    readonly contactUsFirstName:Locator;
    readonly contactUsEmail:Locator;
    readonly contactUsEnquiry:Locator;
    readonly contactUsSubmit:Locator;
    readonly contactUsSuccessfulMsg:Locator;
    readonly menuApparel_accessories:Locator;
    readonly menuMakeup:Locator;
    readonly menuList: Locator;
    readonly searchFilter: Locator;
    readonly searchButton: Locator;
    readonly addToCart: Locator;
    readonly totalPrice: Locator;
    readonly searchResultHeader: Locator;
    readonly specialsHeader: Locator;
    readonly accountHeader: Locator;
    readonly checkoutHeader: Locator;
    readonly cartHeader: Locator;
    readonly socialMediaFacebook: Locator;
    readonly socialMediaX: Locator;
    readonly socialMediaLinkedin:Locator; 
    readonly menuSkincare: Locator;
    readonly menuFragrance: Locator;
    readonly menuMen: Locator;
    readonly menuHairCare: Locator;
    readonly menuBooks: Locator;
    readonly currency: Locator;
    readonly total: Locator;
    readonly productPrice: Locator;
    readonly removeButton: Locator;
    
    

    constructor(page: Page) {

        this.page = page;
        this.contactUsLink = page.locator('a[href="https://automationteststore.com/index.php?rt=content/contact"]');
        this.contactUsFirstName = page.locator('#ContactUsFrm_first_name');
        this.contactUsEmail = page.locator('#ContactUsFrm_email');
        this.contactUsEnquiry = page.locator('#ContactUsFrm_enquiry');
        this.contactUsSubmit = page.locator('.btn.btn-primary.lock-on-click');
        this.contactUsSuccessfulMsg = page.locator('//p[contains(text(),"Your enquiry has been successfully sent to the sto")]');
        this.homeNavigationLink = page.locator('.active.menu_home');
        this.searchFilter = page.locator("[id='filter_keyword']");
        this.searchButton = page.locator('.button-in-search');
        this.addToCart = page.locator('[class="cart"]');
        this.totalPrice = page.locator('[class="total-price"]');
        this.searchResultHeader = page.locator('.bgnone');
        this.specialsHeader = page.locator('.menu_specials .menu_text');
        this.accountHeader = page.locator('.menu_account .menu_text');
        this.cartHeader = page.locator('[data-id="menu_cart"] .menu_text');
        this.checkoutHeader = page.locator('.menu_checkout .menu_text');
        this.socialMediaFacebook = page.locator('.facebook');
        this.socialMediaX = page.locator('.twitter');
        this.socialMediaLinkedin = page.locator('.linkedin');
        this.menuList = page.locator("a[href*='https://automationteststore.com/index.php?rt=product/category&']");
        this.menuApparel_accessories = page.locator('[href="https://automationteststore.com/index.php?rt=product/category&path=68"]');
        this.menuMakeup = page.locator('[href="https://automationteststore.com/index.php?rt=product/category&path=36"]');
        this.menuSkincare = page.locator('[href="https://automationteststore.com/index.php?rt=product/category&path=43"]');
        this.menuFragrance = page.locator('[href="https://automationteststore.com/index.php?rt=product/category&path=49"]');
        this.menuMen = page.locator('[href="https://automationteststore.com/index.php?rt=product/category&path=58"]');
        this.menuHairCare = page.locator('[href="https://automationteststore.com/index.php?rt=product/category&path=52"]');
        this.menuBooks = page.locator('[href="https://automationteststore.com/index.php?rt=product/category&path=65"]');
        this.currency = page.locator('.label.label-orange.font14');
        this.total = page.locator("//*[@class='col-md-6 cart-info totals pull-right table-responsive']//tr[3]//td[2]");
        this.productPrice = page.locator('.productfilneprice')
        this.removeButton = page.locator("[class='fa fa-trash-o fa-fw']")
       }

  

    async gotoHomePage() {

        await this.homeNavigationLink.click();
    }

    async gotoContactUs(){
        await this.contactUsLink.click();
    }

    async addDetailsToContactUs(){
        await this.contactUsFirstName.fill('Test');
        await this.contactUsEmail.fill('test@email.com');
        await this.contactUsEnquiry.fill('This is a test');
        await this.contactUsSubmit.click();
    }
    async verifyMenu(menu: string){
        const visibaleBoolean = await this.menuList.locator(`text=${menu}`).isVisible();
        expect (visibaleBoolean).toBe(true);
        
    }

    async clickOnMenuProduct(menu: string){
        await this.menuList.locator(`text=${menu}`).click()
    }


    async clickOnSubMenu(menu: string, submenu: string){
        await this.menuList.locator(`text=${menu}`).hover()
        await this.menuList.locator(`text=${submenu}`).click();
    }

    async searchProduct(productName: string){
        await this.searchFilter.fill(productName);
        await this.page.waitForTimeout(2000);
        await this.searchButton.click();
    }

    async verifyProduct(productName: string){
        const searchedProduct:string = await this.searchResultHeader.innerText();
        expect(productName.trim()).toBe(searchedProduct.trim()); 
    }

    async verifySpecialHeader(){
        expect (await this.specialsHeader.nth(1).isVisible());
    }

    async verifyAccountHeader(){
        expect (await this.accountHeader.nth(2).isVisible());
    }

    async verifyCartHeader(){
        expect (await this.cartHeader.nth(0).isVisible());
    }

    async verifyCheckoutHeader(){
        expect (await this.checkoutHeader.nth(1).isVisible());
    }

    async verifySocialMediaFacebookIcon(){
        expect (await this.socialMediaFacebook.nth(1).isVisible());
    }

    async verifySocialMediaXIcon(){
        expect (await this.socialMediaX.nth(1).isVisible());
    }

    async verifySocialMediaLinkedinIcon(){
        expect (await this.socialMediaLinkedin.nth(1).isVisible());
    }

    async verifyMenuApparel_Accessories(){
        expect (await this.menuApparel_accessories.isVisible());
    }

    async verifyMenuMakeUp(){
        expect (await this.menuMakeup.isVisible());
    }

    async verifyMenuSkincare(){
        expect (await this.menuSkincare.isVisible());
    }

    async verifyMenuFragrance(){
        expect (await this.menuFragrance.isVisible());
    }

    async verifyMenuMen(){
        expect (await this.menuMen.isVisible());
    }

    async verifyMenuHairCare(){
        expect (await this.menuHairCare.isVisible());
    }

    async verifyMenuBooks(){
        expect (await this.menuBooks.isVisible());
    }

    async verifyCurrency(){
        const currencyVerify = await this.currency.nth(0)
        const pareElement = await currencyVerify.evaluateHandle(node => node.parentElement)
        const innerTextForParent = await pareElement.evaluate(node => node?.innerText);
        const expectedCurrency = '$ US DOLLAR';
        expect(innerTextForParent).toBe(expectedCurrency.trim());
    }

    async getProductPrice(){
        return (await this.productPrice.innerText()).split('$')[1];
    }

    async productAddToCart(){
        await this.addToCart.click()

    }
    async getTotal(){
        return (await this.total.innerText()).split('$')[1];
    }
    async removeCart(){
        await this.cartHeader.nth(0).click()
        const elementsCount: number = await this.removeButton.count();

        // Iterate through each element and click it
        for (let i = 0; i < elementsCount; i++) {
          await this.removeButton.nth(0).click();
          // Optionally, you can add a wait or any other operation here if needed
          // await page.waitForTimeout(1000); // For example, wait for 1 second between clicks
        }

    }

}// [class='cart'] add to cart
// .productfilneprice - price
//Tropiques Minerale Loose Bronzer - product
