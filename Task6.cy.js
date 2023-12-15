/// <reference types ="cypress"/>


describe("delete product",()=> {
    beforeEach(()=>{
        cy.visit("https://admin-demo.nopcommerce.com/");
        cy.loginNopcommerce();
        cy.wait(1500);
    })
    it("verfiy if we can delete the product",()=>{
      
        cy.get('#nopSideBarPusher').click()
        cy.get(".nav-sidebar > li:nth-child(2) > a").click();
        cy.contains("Products",{force: true}).click()
        cy.get("#SearchProductName").clear().type("laptop"+"{enter}");
        cy.wait(700)
        cy.get(".table tr .mastercheckbox:first()").check()
        cy.get("#delete-selected").click();
        cy.wait(700)
        cy.contains("Yes").click()
        cy.wait(700)
        cy.get(".modal-footer:eq(2)").contains("Ok").click()
       cy.get("#SearchProductName").clear().type("laptop"+"{enter}");
       cy.get(".dataTables_empty").should("have.text","No data available in table")





    })
})