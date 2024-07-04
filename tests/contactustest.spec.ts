import { test, expect } from '../helpers/test';

test('Fill Contact fetails form and validate it is successfully submitted.',async({homePage,loginPage})=> {
  await loginPage.performLogin();
  await homePage.gotoContactUs();
  await homePage.addDetailsToContactUs();
  expect(await(homePage.contactUsSuccessfulMsg).isVisible);
});

