import landingPage from "../pages/landingPage"
import loginPage from "../pages/loginPage"
import myAccountPage from "../pages/myaccountPage"

describe('Filter to find items', () => {

    let landingObj = new landingPage()
    let loginObj = new loginPage()
    let myAccountObj = new myAccountPage()
    
    it('login ok', () => {
        cy.visit('https://practicesoftwaretesting.com/')
        landingObj.verifyPage()
        landingObj.goToSignInPage()

        loginObj.verifyPage()
        loginObj.loginOk()

        myAccountObj.verifyPage()

        myAccountObj.goToHome()
        landingObj.verifyPage()

        landingObj.filterItem(' Hammer ')
        landingObj.verifyExistanceItem('Hammer')
    })

})