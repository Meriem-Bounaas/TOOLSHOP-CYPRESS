import landingPage from "../pages/landingPage"
import loginPage from "../pages/loginPage"
import registrationPage from "../pages/registrationPage"

describe('Registration in tool shop', () => {

  beforeEach(() => {
    cy.visit('https://practicesoftwaretesting.com/')
  })

  let landingObj = new landingPage()
  let loginObj = new loginPage()
  let registrationObj = new registrationPage()

  it('registration ok', () => {
    landingObj.verifyPage()
    landingObj.goToSignInPage()

    loginObj.verifyPage()
    loginObj.goToRegistrationPage()

    registrationObj.verifyPage()
    registrationObj.fillFormOk()
    loginObj.verifyPage()
    
  })

  it('registration ko', () => {
    landingObj.verifyPage()
    landingObj.goToSignInPage()

    loginObj.verifyPage()
    loginObj.goToRegistrationPage()

    registrationObj.verifyPage()
    registrationObj.fillFormKo()

  })

})