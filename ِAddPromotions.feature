#ِcheck if the Admin can Add Promotion under the promotion area - 1. Add a new discount . 2. Add new affiliates . 3. Add new campaigns 
Feature: Add Promotion functionality
     
     The Admin should be able to add Promotion to 1. Add a new discount . 2. Add new affiliates . 3. Add new campaigns

    Scenario:TC-1 verify if The Admin can add a new discount under promotion area
     Given The Admin navigated to nopcommerce website
     And The Admin click on menu 
     And The Admin click on promotion
     And The Admin click on Discount
     When The Admin click on add new
     And The Admin Enter name of new discount
     Then The Admin click on save button
     And The Admin Check if the new discount is added successfully


@focus
    Scenario:TC-2 verify if The Admin can Add new affiliates under promotion area
     Given The Admin navigated to nopcommerce website
     And The Admin click on menu 
     And The Admin click on promotion
     And The Admin click on affiliates
     When The Admin click on add new
     And The Admin Enter the first name of affiliates
     And The Admin Enter the last name of affiliates
     And The Admin Enter the Email
     And The Admin Select the country
     And The Admin Enter the region / country 
     And The Admin Enter the city name 
     And The Admin Enter addres1 
     And The Admin Enter zip / postal code 
     And The Admin Enter phone number 
     Then The Admin click on save button
     And The Admin Check if the new affiliates is added successfully


    Scenario:TC-3 verify if The Admin can Add new campaigns under promotion area
     Given The Admin navigated to nopcommerce website
     And The Admin click on menu 
     When The Admin click on promotion
     And The Admin click on campaigns
     When The Admin click on add new
     And The Admin Enter the  name of campaigns
     And The Admin Enter the Subject of campaigns
     And The Admin Enter the body of campaigns
     Then The Admin click on save button
     And The Admin Check if the new campaigns is added successfully

 



