import { test, expect } from '../helpers/test';

test('Register a new user and verify it is successfully registered.',async({registrationPage})=> {
 await registrationPage.registerAccount();
 expect(await(registrationPage.accountCreationConfirmationMsg).isVisible);
 expect(await(registrationPage.accountCreationConfirmationMsg).isEnabled);
 //expect(await(registrationPage.accountCreationConfirmationMsg)).toContainText('YOUR ACCOUNT HAS BEEN CREATED!');

});

