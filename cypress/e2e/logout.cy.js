import landingPage from "../pages/landingPage"
import loginPage from "../pages/loginPage"
import myAccountPage from "../pages/myaccountPage"

describe('Logout', () => {

  before(() => {
    cy.visit('https://practicesoftwaretesting.com/')
  })

  let landingObj = new landingPage()
  let loginObj = new loginPage()
  let myAccountObj = new myAccountPage()

  it('logout ok', () => {
    landingObj.verifyPage()
    landingObj.goToSignInPage()
    
    loginObj.verifyPage()
    loginObj.loginOk()

    myAccountObj.verifyPage()
    myAccountObj.logout()
    loginObj.verifyPage()

  })

})