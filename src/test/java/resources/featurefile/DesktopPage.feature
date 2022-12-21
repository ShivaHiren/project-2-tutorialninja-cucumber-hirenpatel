Feature: DesktopPage

  @Smoke  @Regression
  Scenario: Verify Product Arrange In Alpha Batical Order
    Given I am on home page
    When I mouse hover on desktop tab
    And I click on show desktop tab
    And I select sort by name Z to A
    Then Product will arrange in Descending order

  @Regression
  Scenario: Verify Product Added To Shopping Cart SuccessFully
    Given I am on home page
    When I mouse hover on desktop tab
    And I click on show desktop tab
    And I select sort by name A to Z
    And I click on Select product HP LP3065
    And I select delivery date
    And I click on add to cart button
    And I click on shopping cart button
    And I change the currency

