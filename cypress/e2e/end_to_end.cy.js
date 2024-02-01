import checkoutPage from "../pages/checkoutPage"
import landingPage from "../pages/landingPage"
import loginPage from "../pages/loginPage"
import myAccountPage from "../pages/myaccountPage"
import productPage from "../pages/productPage"
import registrationPage from "../pages/registrationPage"

describe('end to end test', () => {
    
  before(() => {
    cy.visit('https://practicesoftwaretesting.com/')
  })
  
  let landingObj = new landingPage()
  let loginObj = new loginPage()
  let myAccountObj = new myAccountPage()
  let productObj = new productPage()
  let checkoutObj = new checkoutPage()
  let registrationObj = new registrationPage()
  
  it('end to end ok', () => {
    // registration
        landingObj.verifyPage()
        landingObj.goToSignInPage()

        loginObj.verifyPage()
        loginObj.goToRegistrationPage()

        registrationObj.verifyPage()
        registrationObj.fillFormOk()
        loginObj.verifyPage()

    // login
        loginObj.loginOk()
        myAccountObj.verifyPage()

    // search Item
        myAccountObj.goToHome()
        landingObj.verifyPage()

        const items_list = ['Combination Pliers', 'Pliers', 'Bolt Cutters', 'Slip Joint Pliers', 'Hammer']
        const item = items_list[Math.floor(Math.random() * items_list.length)]
        landingObj.searchItem(item)
        landingObj.verifyExistanceItem(item)

    // add first Item 
        landingObj.selectItems(item)

        productObj.verifyPage()
        productObj.addToCart()

        productObj.verifyCartCount()

    // filter Item
        myAccountObj.goToHome()
        landingObj.filterItem(' Hammer ')
        landingObj.verifyExistanceItem('Hammer')

    // add second Item 
        landingObj.selectItems('Hammer')

        productObj.verifyPage()
        productObj.addToCart()

        productObj.verifyCartCount()
        
    // checkout
        productObj.goToCart()
        checkoutObj.verifyPage()
        checkoutObj.checkout()
  })

})