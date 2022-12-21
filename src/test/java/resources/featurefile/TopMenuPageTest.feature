Feature: Top Menu Test


  @Smoke   @Regression
  Scenario Outline: As a user I should be able to navigate to Desktops page Successfully
    Given I am on homepage
    When I hover mouse over "<menu>"
    And I select "<submenu>"
    Then I should be able to navigate to Desktop page successfully
    And I should see "<pagename>" text
    Examples:
      | menu                | submenu                      | pagename            |
      | Desktops            | Show All Desktops            | Desktops            |
      | Laptops & Notebooks | Show All Laptops & Notebooks | Laptops & Notebooks |
      | Components          | Show All Components          | Components          |
