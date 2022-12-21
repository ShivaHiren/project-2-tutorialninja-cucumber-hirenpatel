Feature: My Account Page

  @Smoke   @Regression
  Scenario: User should navigate so Login Page successfully
    Given I am on home page
    When I click on My Account link
    And I select Login option
    Then I should navigate to Login page successfully
    And I should see Returning Customer text

  @Sanity @Regression
  Scenario: User register account successfully
    Given I am on home page
    When I click on My Account link
    And I select Register option
    And I enter first name
    And I enter last name
    And I enter email
    And I enter phone number
    And I enter password
    And I enter confirm password
    And I click on Yes on Subscribe button
    And I click on Privacy button
    And I click on continue
    And I verify the account creation text
    And i click continue button after account creation
    And I click on My Account link
    And I select Logout option
    And I verify account Logout text
    And I click on last continue button
    Then I am able to register an account successfully

  @regression
  Scenario: User should login and logout successfully
    Given I am on home page
    When I click on My Account link
    And I select Login option
    And I enter email address "jhonwick@gmail.com"
    And I enter password "jhon"
    And I click on Login button
    And I verify My account Text
    And I click on My Account link
    And I select Logout option
    And I verify account Logout text
    And I click on continue button
    Then I am able to login and logout successfully