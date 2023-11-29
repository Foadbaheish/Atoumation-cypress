/// <reference types="cypress" />
describe('Search & Select-product', () => {
    it('Search', () => {
      cy.visit("https://magento.softwaretestingboard.com/")
      cy.get("#search").clear().type("shirt"+"{enter}",{delay:400});
      cy.wait(3000);
      cy.get(":first-child >.product-item-info .product-image-wrapper img").click();
      
    })  
    it('Select product ', () => {
        cy.visit("https://magento.softwaretestingboard.com/radiant-tee.html");
        cy.wait(3000);
        cy.get("[option-label=M]").click();
        cy.get("[option-label=Purple]").click();
        cy.get("input[type=number]").clear().type(3);
        cy.get("#product-addtocart-button").click();
        cy.get(".showcart").trigger("mousedown");
    }); 
    });