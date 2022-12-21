Feature: Laptop and Notebook page test

  @Smoke   @Regression
  Scenario: Verify Products Price Display High To Low Successfully
    Given I am on home page
    When I mouse hover on Laptop and note book tab
    And I click on Laptop and note book tab
    And I choose product order high to low
    Then Products will arrange in high to low

  @Regression
  Scenario: Verify That User Place Order Successfully
    Given I am on home page
    When I Mouse hover on Laptops & Notebooks Tab
    And I  Click on Show All Laptops & Notebooks
    And I Select Sort By Price (High > Low)
    And I click on macbook
    And I click on add to cart button
    And I click on shopping cart button
    And I update the quantity 2
    And I click on order update
    And I change the currency
    And I change the currency
    And I click on check out button
    And I click on guest check out button
    And I click on continue button
    And I Enter First name "Jhon"
    And I Enter Last name "Wick"
    And I Enter enter email "Jhon"
    And I Enter Telephone number "012345678"
    And I Enter Address " 1 London road"
    And I Enter City name "London"
    And I Enter Post code "LL01 1LL"
    And I select County "United Kingdom"
    And I select region "Greater London"
    And I click on guest contine button
    And I add comment
    And I check box terms and conditons
    And I click on final continue button
    Then I am on verify the paymnet method page
