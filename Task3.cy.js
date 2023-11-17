/// <reference types ="cypress"/>


describe("Home page",()=> {

    it('Test case 1',()=>{
cy.visit("https://demo.productionready.io/#/");


})

it('Test case 2',()=>{
cy.visit("https://demo.productionready.io/#/");
cy.get(".container ul li a:eq(1)").click()
//cy.contains("Sign in").click();
cy.wait(5000);
cy.get(".ng-scope:eq(2)").contains("Sign in").click();
cy.get(" .text-xs-center :last-child");
cy.get(":nth-child(2) > .form-control");
cy.get(":nth-child(3) > .form-control");
cy.get(".btn");

})
it('Test case 3',()=>{
cy.visit("https://demo.productionready.io/#/");
cy.get(".container ul li a:eq(0)");
cy.get(".container ul li a:eq(2)");
cy.get(".navbar-brand");
cy.get(".banner :nth-child(1) .logo-font.ng-binding");
cy.contains("A place to share your knowledge.");
cy.get(".feed-toggle ul li:nth-child(2) a"); 
cy.get(":nth-child(1) > .article-preview:last()> .ng-isolate-scope .article-meta:last() .btn");
cy.get(".preview-link:eq(0) > span");
cy.contains("Popular Tags");
cy.get(".row:last() .sidebar .tag-list :eq(3)");
cy.get(".row:last() .sidebar .tag-list :last()");
})
it('Test case 4',()=>{
cy.visit("https://demo.productionready.io/#/");
//cy.visit("https://demo.productionready.io/#/article/If-we-quantify-the-alarm-we-can-get-to-the-FTP-pixel-through-the-online-SSL-interface!-120863");
cy.get(".ng-isolate-scope:first-child a.preview-link").click();
cy.wait(5000);
cy.get(":nth-child(1) .banner .container h1.ng-binding");
cy.get(".banner .container :last-child  .ng-isolate-scope >.article-meta a img");
//cy.get(".banner .container :last-child  .ng-isolate-scope >.article-meta :nth-child(2) a");
cy.contains("Anah Benešová");
//cy.get(".banner .container :last-child  .ng-isolate-scope >.article-meta :nth-child(2) span.date.ng-binding").contains("December 9, 2022");
cy.contains("December 9, 2022");
cy.get(".article-meta ng-transclude .ng-isolate-scope .btn:first()");
cy.get(".article-meta ng-transclude .ng-isolate-scope .btn:eq(1)");
cy.get(".ng-binding p");
cy.get("ul.tag-list li:first()");
cy.get("ul.tag-list li:last()");

})
})
