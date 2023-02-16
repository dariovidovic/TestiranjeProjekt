export class WebPageObjects {
  addToCartFirstBtn() {
    return cy.get(
      "#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span"
    );
  }

  getRegistrationButton(){
    return cy.xpath('/html/body/div[2]/header/div[1]/div/ul/li[3]/a');
  }

  getFirstNameInput(){
    return cy.get('#firstname');
  }

  getLastNameInput(){
    return cy.get('#lastname');
  }

  getEmailAddressInput(){
    return cy.get('#email_address');
  }

  getPasswordInput(){
    return cy.get('#password');
  }

  getConfirmPasswordInput(){
    return cy.get('#password-confirmation');
  }

  getSuccessMessage() {
    return cy.get('.message-success')
  }

  getCreateAccountButton(){
    return cy.xpath('//*[@id="form-validate"]/div/div[1]/button');
  }

  getLoginButton(){
    return cy.xpath('/html/body/div[2]/header/div[1]/div/ul/li[2]/a');
  }

  getSignInButton(){
    return cy.get('#send2');
  }

  getEmailLoginInput(){
    return cy.get('#email');
  }

  getPasswordLoginInput(){
    return cy.get('#pass');
  }

  getLoginSuccessMessage(){
    return cy.get(':nth-child(2) > .greet > .logged-in');
  }

  getHomePageButton(){
    return cy.xpath('/html/body/div[2]/div[1]/div/div[2]/nav/ul/li[1]/a/span');
  }

  getChosenShirtSize(){
    return cy.xpath('/html/body/div[2]/main/div[2]/div/div[1]/div[4]/form/div[1]/div/div/div[1]/div/div[3]');
  }

  getChosenShirtColor(){
    return cy.xpath('//*[@id="option-label-color-93-item-58"]');
  }

  getAddToCartButton(){
    return cy.xpath('/html/body/div[2]/main/div[2]/div/div[1]/div[4]/form/div[2]/div/div/div[2]/button/span');
  }

  getChosenShirt(){
    return cy.xpath('/html/body/div[2]/main/div[4]/div[1]/div[1]/div[3]/div/div/ol/li[2]/div/a/span/span/img');
  }
 
  getCartOptions(){
    return cy.get('.showcart');
  }

  getViewAndEditCartOptions(){
    return cy.xpath('//*[@id="minicart-content-wrapper"]/div[2]/div[5]/div/a');
  }
  

  getRemoveItemButton(){
    return cy.xpath('/html/body/div[2]/main/div[3]/div/div[2]/form/div[1]/table/tbody/tr[2]/td/div/a[3]');
  }

  getRemovedFromCartSuccessMessage(){
    return cy.xpath('/html/body/div[2]/main/div[3]/div/div[2]/p[1]');
  }

  getAccountOptionsButton(){
    return cy.xpath('/html/body/div[2]/header/div[1]/div/ul/li[2]/span/button');
  }

  getSignOutButton(){
    return cy.xpath('/html/body/div[2]/header/div[1]/div/ul/li[2]/div/ul/li[3]/a');
  }

  getNewsletterInput(){
    return cy.get('#newsletter');
  }
  getNewsletterButton(){
    return cy.xpath('//*[@id="newsletter-validate-detail"]/div[2]/button');
  }

}
