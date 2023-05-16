import homePageRepository from '../page-elements/homePage.json';
class homePage {

    logout() {
        cy.get(homePageRepository.profileName).should('be.visible').click();
        cy.get(homePageRepository.logoutBtn).should('be.visible').should('be.enabled').click();
        return this;
    }

}
export default new homePage();