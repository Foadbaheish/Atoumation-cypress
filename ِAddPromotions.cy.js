import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("The Admin navigated to nopcommerce website",()=>{
    cy.visit("https://admin-demo.nopcommerce.com/");
        cy.loginNopcommerce();
        cy.wait(1000);
});

Given("The Admin click on menu",()=>{
cy.get("#nopSideBarPusher").click();
})

Given("The Admin click on promotion",()=>{
    cy.contains("Promotions").click();
 })

 Given("The Admin click on Discount",()=>{
    cy.contains("Discount").click();
 })
 
 When("The Admin click on add new",()=>{
    cy.get(".float-right").click();
 })
 When("The Admin Enter name of new discount",()=>{
   cy.get("#Name").clear().type("Last Year discount");
})
Then("The Admin click on save button",()=>{
   cy.get("[name=save]").click();
})
Then("The Admin Check if the new discount is added successfully",()=>{
   cy.get("[name=SearchDiscountName]").clear().type("Last Year discount");
   cy.get('#search-discounts').click();
   cy.get(".table tbody tr").should("contain","Last Year discount");   
})
//______________________________________________________________________

Given("The Admin click on menu",()=>{
  cy.get("#nopSideBarPusher").click();
})
   
Given("The Admin click on promotion",()=>{
   cy.contains("Promotions").click();
})
   
Given("The Admin click on affiliates",()=>{
    cy.contains(" Affiliates").click();
})
    
When("The Admin click on add new",()=>{
    cy.get(".float-right a").click();
})

When("The Admin Enter the first name of affiliates",()=>{
   cy.get("#Address_FirstName").clear().type("xyz");
 })

When("The Admin Enter the last name of affiliates",()=>{
   cy.get("#Address_LastName").clear().type("kha");
 })

 When("The Admin Enter the Email",()=>{
   cy.get("#Address_Email").clear().type("xyz@gmail.com");
 })

/* When("The Admin Select the country",()=>{
   cy.get("[name=Address.CountryId]").select("Palestine");
 })
 
 When("The Admin Enter the region/country",()=>{
   cy.get(".input-group #Address_County").clear().type("The North");
 })
*/
 When("The Admin Enter the city name",()=>{
   cy.get("#Address_City").clear().type("Nablus");
 })

 When("The Admin Enter addres1",()=>{
   cy.get("#Address_Address1").clear().type("Nablus123");
 })

 /*When("The Admin Enter zip/postal code",()=>{
   cy.get("#Address_ZipPostalCode").clear().type(991);
 })*/

 When("The Admin Enter phone number",()=>{
   cy.get("#Address_PhoneNumber").clear().type(+970599666666);
 })

 Then("The Admin click on save button",()=>{
   cy.get("[name=save]").click();
 })
 Then("The Admin Check if the new affiliates is added successfully",()=>{
   cy.get("[name=SearchFirstName]").clear().type("xyz");
   cy.get("[name=SearchLastName]").clear().type("kha");
   cy.get(".btn-search").click();
   cy.wait(4000)
   cy.get(".table tbody >tr td:first()").should("have.text","xyz");   
})
   
 //_____________________________________________________________________________________
 
 Given("The Admin click on menu",()=>{
  cy.get("#nopSideBarPusher").click();
  })
  
  Given("The Admin click on promotion",()=>{
      cy.contains("Promotions").click();
   })
  
   Given("The Admin click on campaigns",()=>{
  cy.contains("Campaigns").click()
   })
   
   When("The Admin click on add new",()=>{
      cy.get(".float-right").click();
   })
   When("The Admin Enter the  name of campaigns",()=>{
    cy.get("#Name").clear().type("hjk");
  })
  When("The Admin Enter the Subject of campaigns",()=>{
    cy.get("#Subject").clear().type("abc");
  })
  When("The Admin Enter the body of campaigns",()=>{
    cy.get("#Body").clear().type("add new");
  })
  Then("The Admin click on save button",()=>{
    cy.get("[name=save]").click();
  })
  Then("The Admin Check if the new campaigns is added successfully",()=>{
  cy.get(".table tbody >tr td:first()").should("have.text","hjk"); 
  })
 
 