///<reference types="cypress" />

import { WebPageActions } from "../pageActions/webPageActions";
import { WebPageObjects } from "../pageObjects/webPageObjects";
const frontPageActions = new WebPageActions();
const frontPageObjects = new WebPageObjects

describe("AllTests", () => {
  beforeEach(() => {
    frontPageActions.navigate();
  });

  it("Login", () => {
    frontPageActions.loginUser();
    frontPageObjects.getLoginSuccessMessage().should("contain","Ivan Ivic");

   });

  it("Registration", () => {
     frontPageActions.registerUser();
     frontPageObjects.getSuccessMessage().should("be.visible");
     frontPageActions.logOut();
  });

  it("SubscribeToNewsletter", () => {
    frontPageActions.subscribeToNewsletter();
    frontPageObjects.getSuccessMessage().should("be.visible");
  
  });

  it("RemoveFromCart", () => {
    frontPageActions.removeFromCart();
    frontPageObjects.getRemovedFromCartSuccessMessage().should("be.visible");
  });

  it("AddToCart", () => {
    frontPageActions.addToCart();
    frontPageObjects.getSuccessMessage().should("be.visible");
  
 });

 

  



  
});
