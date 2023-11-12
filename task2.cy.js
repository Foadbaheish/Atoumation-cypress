/// <reference types ="cypress"/>
it("task",()=>{

    cy.visit("/checkout/#shipping"); 
    /* ==== Generated with Cypress Studio ==== */ cy.get('#search').clear('s');
    cy.get('#search').type('shirt{enter}');
    cy.get(':nth-child(2) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click(); 
    cy.get('#option-label-size-143-item-167').click();
     cy.get('.swatch-attribute.color > .swatch-attribute-options').click(); 
     cy.get('#option-label-color-93-item-57').click();
      cy.get('#product-addtocart-button > span').click(); cy.wait(4000); cy.get('.showcart').click(); cy.get('#top-cart-btn-checkout').click(); cy.wait(5000); /* ==== End Cypress Studio ==== */
     //  start writing your code from here

/*I went back to the main origin of the field, and it had id = "customer-email-fieldset".
 I used the ID to track which code goes to the child with and that has class = "Required-field" 
Then follow it back to
 class = "control_with-tooltip"
Then I took the field id named id = "customer email error"
I shortened the chapter as in the written code*/ 
cy.get("#customer-email-fieldset > .required > .control > #customer-email").click();
//In the rest of the codes, I used the attribute because they need a long code if you use a class or identifier, through what I learned from the lectures 
 cy.get("[name=firstname]").click();
 cy.get("[name=lastname]").click();
 cy.get("[name=company]").click();
 cy.get('[name="street[0]"]').click();
 cy.get('[name="street[1]"]').click();
 cy.get('[name="street[2]"]').click();
 cy.get("[name=city]").click();
 cy.get("[name=region_id]");
 cy.get("[name=postcode]").click();
 cy.get("[name=country_id]");
cy.get("[name= telephone]");
cy.get("[name= ko_unique_1]");
cy.get("[name= ko_unique_2]");
cy.get('.button')
}
)
