import loginPageRepository from '../page-elements/loginPage.json';

class loginPage  {

    inputEmail(email) {
       cy.get(loginPageRepository.email).should('be.visible').should('be.enabled').type(email)
        return this;
    }

    inputPassword(password) {
       cy.get(loginPageRepository.password).should('be.visible').should('be.enabled').type(password)
        return this;
    }

    clickSignIn() {
       cy.get(loginPageRepository.loginBtn).should('be.visible').should('be.enabled').click();
        return this;
    }

    inputCaptchaAndClick(random){
        cy.url().then((url)=>{
            
            if(url.includes('verify')){
                cy.get(loginPageRepository.captchaField).should('be.visible').should('be.enabled').type(random)
            }
        });

        cy.get(loginPageRepository.captchaLogin).should('be.visible').click();
        return this;
    }



    verifyInvalidCredsMessage() {
        cy.get('.notification').should('be.visible').contains('You have entered an incorrect username or password.')
        cy.get('.cbox_messagebox_error').should('be.visible').contains('You have entered an incorrect username or password.')
    }

    verifyUserIsLoggedIn(){
        cy.get('.account-logo > img').should('be.visible');
    }
}
export default new loginPage();