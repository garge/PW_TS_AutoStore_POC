import { test} from '../helpers/test';

test('Log in using invalid credentials',async({loginPage})=> {
  await loginPage.navigateToUrL()
  await loginPage.typeUserName("test")
  await loginPage.typePassword("tess")
  await loginPage.ClickOnLoginSubmitButton()
  await  loginPage.verifyErrorMessageForInvalidCred("Error: Incorrect login or password provided.")
  });