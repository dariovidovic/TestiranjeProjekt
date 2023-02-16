const { WebPageObjects } = require("../pageObjects/webPageObjects");
const webPageObjects = new WebPageObjects();
const currentRandomNumber = getRndInteger(0,10000);
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

export class WebPageActions {
  navigate() {
    cy.visit("https://magento.softwaretestingboard.com/");
  }

  registerUser(){
    webPageObjects.getRegistrationButton().click();
    webPageObjects.getFirstNameInput().type('Petar'+currentRandomNumber);
    webPageObjects.getLastNameInput().type('Petric'+currentRandomNumber);
    webPageObjects.getEmailAddressInput().type('petarpetric'+currentRandomNumber+'@gmail.com');
    webPageObjects.getPasswordInput().type('Petarpetric1!');
    webPageObjects.getConfirmPasswordInput().type('Petarpetric1!');
    webPageObjects.getCreateAccountButton().click();
  }

  loginUser(){
    webPageObjects.getLoginButton().click();
    webPageObjects.getEmailLoginInput().type('ivanivic@gmail.com');
    webPageObjects.getPasswordLoginInput().type('Ivanivic1!');
    webPageObjects.getSignInButton().click();
  }

  addToCart(){
    this.loginUser();
    webPageObjects.getHomePageButton().click();
    webPageObjects.getChosenShirt().click();
    webPageObjects.getChosenShirtSize().click();
    webPageObjects.getChosenShirtColor().click();
    webPageObjects.getAddToCartButton().click();
  }

  removeFromCart(){
    this.addToCart();
    cy.wait(3000);
    webPageObjects.getCartOptions().click();
    webPageObjects.getViewAndEditCartOptions().click();
    webPageObjects.getRemoveItemButton().click();
  }

  subscribeToNewsletter(){
    webPageObjects.getNewsletterInput().type('random'+currentRandomNumber+'@gmail.com');
    webPageObjects.getNewsletterButton().click();
    cy.wait(3000);
  }

  logOut(){
    webPageObjects.getAccountOptionsButton().click();
    webPageObjects.getSignOutButton().click();
  }




  
}
