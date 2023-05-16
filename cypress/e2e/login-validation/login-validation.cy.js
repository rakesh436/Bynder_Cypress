/// <reference types="cypress" />
import loginPage from '../../support/page-objects/loginPage';
import homePage from '../../support/page-objects/homePage';

let loginData;
describe('Verify Login Feature', () => {

    beforeEach(() => {
        cy.fixture('creds').then((credential) => {
            loginData = credential;
        });
        cy.visit('/')
    });

    it.only('Verify Login Functionality With Valid Credentials', () => {
        loginPage.inputEmail(loginData.valid.email)
            .inputPassword(loginData.valid.password)
            .clickSignIn();
        cy.location('pathname').should('include', '/account/dashboard');
        loginPage.verifyUserIsLoggedIn()
    });

    it.only('verify Login with Invalid Credentials ', () => {
        loginPage.inputEmail(loginData.invalid.email)
            .inputPassword(loginData.invalid.password)
            .clickSignIn()
            .inputCaptchaAndClick('testvale');
        cy.location('pathname').should('include', '/login');

        //Adding UI check  to verify Login Message
        loginPage.verifyInvalidCredsMessage();        
    });

    it.only('Verify Logout feature', () => {
        loginPage.inputEmail(loginData.valid.email)
            .inputPassword(loginData.valid.password)
            .clickSignIn();
        cy.location('pathname').should('include', '/account/dashboard');
        homePage.logout();
        cy.location('pathname').should('include', '/login');
    });

})
