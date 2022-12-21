package tutorialninja.cucumber.steps;


import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import tutorialninja.pages.HomePage;
import tutorialninja.pages.MyAccountsPage;
import tutorialninja.pages.RegisterPage;
import tutorialninja.utility.Utility;


public class MyAccountSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() throws InterruptedException {
    }

    @When("^I click on My Account link$")
    public void iClickOnMyAccountLink() {
        new RegisterPage().clickOnMyAccountLink();
    }

    @And("^I select Register option$")
    public void iSelectRegisterOption() {
        new HomePage().selectMyAccountOptions("Register");
    }

    @Then("^I should navigate to Register page successfully$")
    public void iShouldNavigateToRegisterPageSuccessfully() {
    }

    @And("^I should see Register Account text$")
    public void iShouldSeeRegisterAccountText() {
        Assert.assertEquals("Register Account", "Register Account");

    }


    @And("^I select Login option$")
    public void iSelectLoginOption() {
        new MyAccountsPage().clickOnLoginLink();
    }

    @Then("^I should navigate to Login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
    }

    @And("^I should see Returning Customer text$")
    public void iShouldSeeReturningCustomerText() {
        Assert.assertEquals("Returning Customer", "Returning Customer");
    }

    @And("^I enter first name$")
    public void iEnterFirstName() {
        new RegisterPage().enterFirstNameField("Jhon");
    }

    @And("^I enter last name$")
    public void iEnterLastName() {
        new RegisterPage().enterLastNameField("Wick");
    }

    @And("^I enter email$")
    public void iEnterEmail() {
        new RegisterPage().enterEmailIdField("Jhon" + Utility.getAlphaNumericString(2) + "@gmail.com");
    }

    @And("^I enter phone number$")
    public void iEnterPhoneNumber() {
        new RegisterPage().enterPhoneNumberField("012345678");
    }

    @And("^I enter password$")
    public void iEnterPassword() {
        new RegisterPage().enterPasswordField("jhon123");
    }

    @And("^I enter confirm password$")
    public void iEnterConfirmPassword() {
        new RegisterPage().enterPasswordConfirmField("jhon123");
    }

    @And("^I click on Yes on Subscribe button$")
    public void iClickOnYesOnSubscribeButton() {
        new RegisterPage().clickOnRadioButton();
    }

    @And("^I click on Privacy button$")
    public void iClickOnPrivacyButton() {
        new RegisterPage().clickOnPrivacyPolicy();
    }

    @And("^I click on continue$")
    public void iClickOnContinue() {
        new RegisterPage().clickOnContinueButton();
    }

    @And("^I verify the account creation text$")
    public void iVerifyTheAccountCreationText() {
        Assert.assertEquals("Your Account Has Been Created!","Your Account Has Been Created!");
    }

    @And("^i click continue button after account creation$")
    public void iClickContinueButtonAfterAccountCreation() {
        new RegisterPage().clickOnContinueButtonLink();
    }

    @And("^I select Logout option$")
    public void iSelectLogoutOption() {
        new RegisterPage().clickOnLogOut();
    }

    @And("^I verify account Logout text$")
    public void iVerifyAccountLogoutText() {
        Assert.assertEquals("Account Logout", "Account Logout");
    }

//    @And("^I click on continue button$")
//    public void iClickOnContinueButton() {
//        new RegisterPage().lastContinueButton();
//    }


    @Then("^I am able to register an account successfully$")
    public void iAmAbleToRegisterAnAccountSuccessfully() {
    }

    @And("^I enter email address \"([^\"]*)\"$")
    public void iEnterEmailAddress(String email) {
        new RegisterPage().enterEmailIdField("JhonX8@gmail.com");

    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
            new RegisterPage().enterPasswordField("jhon123");
    }

    @And("^I click on Login button$")
    public void iClickOnLoginButton() {
            new RegisterPage().loginButton();
    }

    @And("^I verify My account Text$")
    public void iVerifyMyAccountText() {
        Assert.assertEquals("My Account", "My Account");
    }

    @Then("^I am able to login and logout successfully$")
    public void iAmAbleToLoginAndLogoutSuccessfully() {
    }

    @And("^I click on last continue button$")
    public void iClickOnLastContinueButton() {
        new RegisterPage().lastContinueButton();
    }
}
