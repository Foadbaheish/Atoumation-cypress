/// <reference types="cypress" />
describe("Login Page",()=> {
    it("Verify that all fields and buttons are visible",()=>{
        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
        cy.get("[name=firstname]").should("be.visible");
        cy.get("[name=lastname]").should("be.visible");
        cy.get("[name=email]").should("be.visible");
        cy.get("[name=password]").should("be.visible");
        cy.get("[name=password_confirmation]").should("be.visible");
        cy.get(".submit").should("be.visible");
     })
     it("Verify the ability to create an account on the site",()=>{
        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
        cy.get("[name=firstname]").clear().type("Foad {enter}");
        cy.get("[name=lastname]").clear().type("Baheish {enter}");
        cy.get("[name=email]").clear().type("Foadbaheish98@gmail.com");
        cy.get("[name=password]").clear({force:true}).type('P@ssw0rd123');
        cy.get("[name=password_confirmation]").clear().type('P@ssw0rd123');
        cy.get(".submit").click();
     })
 })