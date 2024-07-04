import { test, expect } from '../helpers/test';

test.beforeEach(async ({ loginPage, page }) => {
  await loginPage.performLogin();
 })

test('Verify Headers',async({homePage})=> {
 await homePage.verifySpecialHeader();
 await homePage.verifyAccountHeader();
 await homePage.verifyCheckoutHeader();
 await homePage.verifyCartHeader();
});

test('Verify Social Icons',async({homePage})=> {
  await homePage.verifySocialMediaFacebookIcon();
  await homePage.verifySocialMediaXIcon();
  await homePage.verifySocialMediaLinkedinIcon();
});

test('Verify Apparel & Accessories Menu',async({homePage})=> {
  await homePage.verifyMenuApparel_Accessories();
  await homePage.verifyMenuMakeUp();
  await homePage.verifyMenuSkincare();
  await homePage.verifyMenuFragrance();
  await homePage.verifyMenuMen();
  await homePage.verifyMenuHairCare();
  await homePage.verifyMenuBooks();
  });

test('Verify default currency',async({homePage})=> {
    await homePage.verifyCurrency();
   });

test('Search products and add to the cart. Check the displayed total',async({homePage,loginPage})=> {
  await homePage.removeCart();
  await homePage.gotoHomePage();
  await homePage.searchProduct('Skinsheen Bronzer Stick');
  await homePage.verifyProduct('Skinsheen Bronzer Stick');
  let firstproductPrice = await homePage.getProductPrice()
  await homePage.productAddToCart()
  await homePage.searchProduct('Tropiques Minerale Loose Bronzer');
  await homePage.verifyProduct('Tropiques Minerale Loose Bronzer');
  let secondProductPrice = await homePage.getProductPrice()
  await homePage.productAddToCart()
  console.log(`fist product - ${firstproductPrice} and second product ${secondProductPrice}`)
  let displayedtotal = await homePage.getTotal()
  const flatDeliveryfee = '2';
  let CalculatedTotal = parseFloat(firstproductPrice)+parseFloat(secondProductPrice)+parseFloat(flatDeliveryfee);
  console.log(CalculatedTotal);
  expect(parseFloat(displayedtotal)).toBe(CalculatedTotal);
});

















//  test('Verify Menu',async({homePage,loginPage})=> {
//   await loginPage.performLogin();
//   await homePage.verifyMenu('Apparel & accessories');
//   await homePage.verifyMenu('MAKEUP');
//   //await homePage.verifyMenu('SKINCARE');
//   //await homePage.verifyMenu('FRAGANCE');
//   //await homePage.verifyMenu('MEN');
//   await homePage.verifyMenu('HAIR CARE');
//   //await homePage.verifyMenu('BOOKS');

//  await page.locator('.menu_specials .menu_text').nth(1).click();


//   //await homePage.clickOnSubMenu('MAKEUP', 'Lips');


  
// });