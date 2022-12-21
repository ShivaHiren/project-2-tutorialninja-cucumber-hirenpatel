$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DesktopPage.feature");
formatter.feature({
  "line": 1,
  "name": "DesktopPage",
  "description": "",
  "id": "desktoppage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7748923400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify Product Arrange In Alpha Batical Order",
  "description": "",
  "id": "desktoppage;verify-product-arrange-in-alpha-batical-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    },
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on desktop tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on show desktop tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select sort by name Z to A",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Product will arrange in Descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopPageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 297104300,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iMouseHoverOnDesktopTab()"
});
formatter.result({
  "duration": 240850300,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnShowDesktopTab()"
});
formatter.result({
  "duration": 862750500,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iSelectSortByNameZToA()"
});
formatter.result({
  "duration": 759478000,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.productWillArrangeInDescendingOrder()"
});
formatter.result({
  "duration": 4398500,
  "status": "passed"
});
formatter.after({
  "duration": 875428100,
  "status": "passed"
});
formatter.before({
  "duration": 3506239300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify Product Added To Shopping Cart SuccessFully",
  "description": "",
  "id": "desktoppage;verify-product-added-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I mouse hover on desktop tab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on show desktop tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select sort by name A to Z",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Select product HP LP3065",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select delivery date",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on shopping cart button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I change the currency",
  "keyword": "And "
});
formatter.match({
  "location": "DesktopPageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 101200,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iMouseHoverOnDesktopTab()"
});
formatter.result({
  "duration": 163623400,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnShowDesktopTab()"
});
formatter.result({
  "duration": 891534600,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iSelectSortByNameAToZ()"
});
formatter.result({
  "duration": 569300500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 31
    }
  ],
  "location": "DesktopPageSteps.iClickOnSelectProductHPLP(int)"
});
formatter.result({
  "duration": 1477125800,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iSelectDeliveryDate()"
});
formatter.result({
  "duration": 12558492700,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 74145900,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnShoppingCartButton()"
});
formatter.result({
  "duration": 844577100,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iChanngeTheCurrency()"
});
formatter.result({
  "duration": 1189770600,
  "status": "passed"
});
formatter.after({
  "duration": 854233000,
  "status": "passed"
});
formatter.uri("LaptopsAndNotebooksPage.feature");
formatter.feature({
  "line": 1,
  "name": "Laptop and Notebook page test",
  "description": "",
  "id": "laptop-and-notebook-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3220500400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify Products Price Display High To Low Successfully",
  "description": "",
  "id": "laptop-and-notebook-page-test;verify-products-price-display-high-to-low-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    },
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on Laptop and note book tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Laptop and note book tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I choose product order high to low",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Products will arrange in high to low",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopPageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 69500,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iMouseHoverOnLaptopAndNoteBookTab()"
});
formatter.result({
  "duration": 154167500,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnLaptopAndNoteBookTab()"
});
formatter.result({
  "duration": 674277400,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iChooseProductOrderHighToLow()"
});
formatter.result({
  "duration": 7601300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.productsWillArrangeInHighToLow()"
});
formatter.result({
  "duration": 277020400,
  "status": "passed"
});
formatter.after({
  "duration": 800496300,
  "status": "passed"
});
formatter.before({
  "duration": 3284373400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify That User Place Order Successfully",
  "description": "",
  "id": "laptop-and-notebook-page-test;verify-that-user-place-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I Mouse hover on Laptops \u0026 Notebooks Tab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I  Click on Show All Laptops \u0026 Notebooks",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Select Sort By Price (High \u003e Low)",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on macbook",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on shopping cart button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I update the quantity 2",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on order update",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I change the currency",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I change the currency",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on check out button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on guest check out button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Enter First name \"Jhon\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Enter Last name \"Wick\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I Enter enter email \"Jhon\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I Enter Telephone number \"012345678\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I Enter Address \" 1 London road\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I Enter City name \"London\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I Enter Post code \"LL01 1LL\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select County \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select region \"Greater London\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on guest contine button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I add comment",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I check box terms and conditons",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on final continue button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I am on verify the paymnet method page",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopPageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 38700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iMouseHoverOnLaptopsNotebooksTabAndClick()"
});
formatter.result({
  "duration": 142493900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnShowAllLaptopsNotebooks()"
});
formatter.result({
  "duration": 637880000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iSelectSortByPriceHighLow()"
});
formatter.result({
  "duration": 705195700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnMacbook()"
});
formatter.result({
  "duration": 1501750300,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 106004800,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnShoppingCartButton()"
});
formatter.result({
  "duration": 657079400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 22
    }
  ],
  "location": "LaptopsAndNotebooksSteps.iUpdateTheQuantity(int)"
});
formatter.result({
  "duration": 811027000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnOrderUpdate()"
});
formatter.result({
  "duration": 118314700,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iChanngeTheCurrency()"
});
formatter.result({
  "duration": 1224602000,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iChanngeTheCurrency()"
});
formatter.result({
  "duration": 1254992500,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnCheckOutButton()"
});
formatter.result({
  "duration": 611728200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnGuestCheckOutButton()"
});
formatter.result({
  "duration": 338143600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 206534400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jhon",
      "offset": 20
    }
  ],
  "location": "LaptopsAndNotebooksSteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 438825900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wick",
      "offset": 19
    }
  ],
  "location": "LaptopsAndNotebooksSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 251504200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jhon",
      "offset": 21
    }
  ],
  "location": "LaptopsAndNotebooksSteps.iEnterEnterEmail(String)"
});
formatter.result({
  "duration": 256325500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "012345678",
      "offset": 26
    }
  ],
  "location": "LaptopsAndNotebooksSteps.iEnterTelephoneNumber(String)"
});
formatter.result({
  "duration": 192281600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " 1 London road",
      "offset": 17
    }
  ],
  "location": "LaptopsAndNotebooksSteps.iEnterAddress(String)"
});
formatter.result({
  "duration": 177286900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 19
    }
  ],
  "location": "LaptopsAndNotebooksSteps.iEnterCityName(String)"
});
formatter.result({
  "duration": 190604100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LL01 1LL",
      "offset": 19
    }
  ],
  "location": "LaptopsAndNotebooksSteps.iEnterPostCode(String)"
});
formatter.result({
  "duration": 244557000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom",
      "offset": 17
    }
  ],
  "location": "LaptopsAndNotebooksSteps.iSelectCounty(String)"
});
formatter.result({
  "duration": 169506100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Greater London",
      "offset": 17
    }
  ],
  "location": "LaptopsAndNotebooksSteps.iSelectRegion(String)"
});
formatter.result({
  "duration": 151964600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnGuestContineButton()"
});
formatter.result({
  "duration": 131853300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iAddComment()"
});
formatter.result({
  "duration": 643804600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iCheckBoxTermsAndConditons()"
});
formatter.result({
  "duration": 104232600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnFinalContinueButton()"
});
formatter.result({
  "duration": 84269700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iAmOnVerifyThePaymnetMethodPage()"
});
formatter.result({
  "duration": 1758500,
  "status": "passed"
});
formatter.after({
  "duration": 855348400,
  "status": "passed"
});
formatter.uri("MyAccountsPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "My Account Page",
  "description": "",
  "id": "my-account-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3860509700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate so Login Page successfully",
  "description": "",
  "id": "my-account-page;user-should-navigate-so-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    },
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I click on My Account link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I select Login option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to Login page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I should see Returning Customer text",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccountSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 121573900,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iSelectLoginOption()"
});
formatter.result({
  "duration": 514932600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 35800,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iShouldSeeReturningCustomerText()"
});
formatter.result({
  "duration": 122700,
  "status": "passed"
});
formatter.after({
  "duration": 765876000,
  "status": "passed"
});
formatter.before({
  "duration": 3736600100,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User register account successfully",
  "description": "",
  "id": "my-account-page;user-register-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Sanity"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I click on My Account link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I select Register option",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter first name",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter last name",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter email",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter phone number",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter confirm password",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Yes on Subscribe button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Privacy button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify the account creation text",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "i click continue button after account creation",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on My Account link",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select Logout option",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I verify account Logout text",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I am able to register an account successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyAccountSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 147255900,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iSelectRegisterOption()"
});
formatter.result({
  "duration": 1038828000,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iEnterFirstName()"
});
formatter.result({
  "duration": 191581800,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iEnterLastName()"
});
formatter.result({
  "duration": 245580600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iEnterEmail()"
});
formatter.result({
  "duration": 241857900,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iEnterPhoneNumber()"
});
formatter.result({
  "duration": 179360000,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iEnterPassword()"
});
formatter.result({
  "duration": 325969900,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iEnterConfirmPassword()"
});
formatter.result({
  "duration": 277952000,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnYesOnSubscribeButton()"
});
formatter.result({
  "duration": 145991600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnPrivacyButton()"
});
formatter.result({
  "duration": 146256800,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnContinue()"
});
formatter.result({
  "duration": 650600200,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iVerifyTheAccountCreationText()"
});
formatter.result({
  "duration": 42000,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickContinueButtonAfterAccountCreation()"
});
formatter.result({
  "duration": 516175000,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 160994400,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iSelectLogoutOption()"
});
formatter.result({
  "duration": 1050299600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iVerifyAccountLogoutText()"
});
formatter.result({
  "duration": 101700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 40125012000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027button-account\u0027]\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [1ab114979003528ad340197dc08215c7, findElement {using\u003dxpath, value\u003d//input[@id\u003d\u0027button-account\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\shiva\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54646}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:54646/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1ab114979003528ad340197dc08215c7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat tutorialninja.utility.Utility.clickOnElement(Utility.java:49)\r\n\tat tutorialninja.pages.LaptopsAndNotebooksPage.clickOnContinue(LaptopsAndNotebooksPage.java:152)\r\n\tat tutorialninja.cucumber.steps.LaptopsAndNotebooksSteps.iClickOnContinueButton(LaptopsAndNotebooksSteps.java:161)\r\n\tat ✽.And I click on continue button(MyAccountsPageTest.feature:28)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyAccountSteps.iAmAbleToRegisterAnAccountSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1296455400,
  "status": "passed"
});
formatter.uri("TopMenuPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "Top Menu Test",
  "description": "",
  "id": "top-menu-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "As a user I should be able to navigate to Desktops page Successfully",
  "description": "",
  "id": "top-menu-test;as-a-user-i-should-be-able-to-navigate-to-desktops-page-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I hover mouse over \"\u003cmenu\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select \"\u003csubmenu\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should be able to navigate to Desktop page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should see \"\u003cpagename\u003e\" text",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "top-menu-test;as-a-user-i-should-be-able-to-navigate-to-desktops-page-successfully;",
  "rows": [
    {
      "cells": [
        "menu",
        "submenu",
        "pagename"
      ],
      "line": 12,
      "id": "top-menu-test;as-a-user-i-should-be-able-to-navigate-to-desktops-page-successfully;;1"
    },
    {
      "cells": [
        "Desktops",
        "Show All Desktops",
        "Desktops"
      ],
      "line": 13,
      "id": "top-menu-test;as-a-user-i-should-be-able-to-navigate-to-desktops-page-successfully;;2"
    },
    {
      "cells": [
        "Laptops \u0026 Notebooks",
        "Show All Laptops \u0026 Notebooks",
        "Laptops \u0026 Notebooks"
      ],
      "line": 14,
      "id": "top-menu-test;as-a-user-i-should-be-able-to-navigate-to-desktops-page-successfully;;3"
    },
    {
      "cells": [
        "Components",
        "Show All Components",
        "Components"
      ],
      "line": 15,
      "id": "top-menu-test;as-a-user-i-should-be-able-to-navigate-to-desktops-page-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3450850400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "As a user I should be able to navigate to Desktops page Successfully",
  "description": "",
  "id": "top-menu-test;as-a-user-i-should-be-able-to-navigate-to-desktops-page-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I hover mouse over \"Desktops\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select \"Show All Desktops\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should be able to navigate to Desktop page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should see \"Desktops\" text",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyAccountSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 34000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 20
    }
  ],
  "location": "TopMenuSteps.iHoverMouseOver(String)"
});
formatter.result({
  "duration": 3142545100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Desktops",
      "offset": 10
    }
  ],
  "location": "TopMenuSteps.iSelect(String)"
});
formatter.result({
  "duration": 3202492200,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iShouldBeAbleToNavigateToDesktopPageSuccessfully()"
});
formatter.result({
  "duration": 45600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 14
    }
  ],
  "location": "TopMenuSteps.iShouldSeeText(String)"
});
formatter.result({
  "duration": 1556219700,
  "status": "passed"
});
formatter.after({
  "duration": 1049905300,
  "status": "passed"
});
formatter.before({
  "duration": 3816254400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "As a user I should be able to navigate to Desktops page Successfully",
  "description": "",
  "id": "top-menu-test;as-a-user-i-should-be-able-to-navigate-to-desktops-page-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I hover mouse over \"Laptops \u0026 Notebooks\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select \"Show All Laptops \u0026 Notebooks\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should be able to navigate to Desktop page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should see \"Laptops \u0026 Notebooks\" text",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyAccountSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 45700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laptops \u0026 Notebooks",
      "offset": 20
    }
  ],
  "location": "TopMenuSteps.iHoverMouseOver(String)"
});
formatter.result({
  "duration": 3116561000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Laptops \u0026 Notebooks",
      "offset": 10
    }
  ],
  "location": "TopMenuSteps.iSelect(String)"
});
formatter.result({
  "duration": 2867935800,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iShouldBeAbleToNavigateToDesktopPageSuccessfully()"
});
formatter.result({
  "duration": 21200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laptops \u0026 Notebooks",
      "offset": 14
    }
  ],
  "location": "TopMenuSteps.iShouldSeeText(String)"
});
formatter.result({
  "duration": 1545651100,
  "status": "passed"
});
formatter.after({
  "duration": 691541900,
  "status": "passed"
});
formatter.before({
  "duration": 3238842800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "As a user I should be able to navigate to Desktops page Successfully",
  "description": "",
  "id": "top-menu-test;as-a-user-i-should-be-able-to-navigate-to-desktops-page-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I hover mouse over \"Components\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select \"Show All Components\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should be able to navigate to Desktop page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should see \"Components\" text",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyAccountSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 42300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Components",
      "offset": 20
    }
  ],
  "location": "TopMenuSteps.iHoverMouseOver(String)"
});
formatter.result({
  "duration": 2914167300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Components",
      "offset": 10
    }
  ],
  "location": "TopMenuSteps.iSelect(String)"
});
formatter.result({
  "duration": 2924781700,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iShouldBeAbleToNavigateToDesktopPageSuccessfully()"
});
formatter.result({
  "duration": 30900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Components",
      "offset": 14
    }
  ],
  "location": "TopMenuSteps.iShouldSeeText(String)"
});
formatter.result({
  "duration": 1544119300,
  "status": "passed"
});
formatter.after({
  "duration": 931283500,
  "status": "passed"
});
});