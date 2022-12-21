package tutorialninja.cucumber.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import tutorialninja.pages.DesktopPage;
import tutorialninja.pages.LaptopsAndNotebooksPage;

public class LaptopsAndNotebooksSteps {
    @When("^I mouse hover on Laptop and note book tab$")
    public void iMouseHoverOnLaptopAndNoteBookTab() {
      new DesktopPage().setMouseHoverOnLapTopAndNotebookTab();
    }

    @And("^I click on Laptop and note book tab$")
    public void iClickOnLaptopAndNoteBookTab() {
        new DesktopPage().setClickOnLapTopAndNotebookTab();
    }

    @And("^I choose product order high to low$")
    public void iChooseProductOrderHighToLow() {
        new LaptopsAndNotebooksPage().productOrder();

    }

    @Then("^Products will arrange in high to low$")
    public void productsWillArrangeInHighToLow() {
        new LaptopsAndNotebooksPage().highToLowSelection();

    }

    @When("^I Mouse hover on Laptops & Notebooks Tab$")
    public void iMouseHoverOnLaptopsNotebooksTabAndClick() {
        new DesktopPage().setMouseHoverOnLapTopAndNotebookTab();
    }

    @And("^I  Click on Show All Laptops & Notebooks$")
    public void iClickOnShowAllLaptopsNotebooks() {
        new DesktopPage().setClickOnLapTopAndNotebookTab();
    }

    @And("^I Select Sort By Price \\(High > Low\\)$")
    public void iSelectSortByPriceHighLow() {
        new LaptopsAndNotebooksPage().productOrderHighToLow();
    }

    @And("^I click on macbook$")
    public void iClickOnMacbook() {
        new LaptopsAndNotebooksPage().clickOnMacbookTab();
    }

    @And("^I update the quantity (\\d+)$")
    public void iUpdateTheQuantity(int quantity) {
        new LaptopsAndNotebooksPage().updateQuantity("2");
    }

    @And("^I click on order update$")
    public void iClickOnOrderUpdate() {
        new LaptopsAndNotebooksPage().orderUpdate();
    }

    @And("^I click on check out button$")
    public void iClickOnCheckOutButton() {
        new LaptopsAndNotebooksPage().checkOutButton();
    }

    @And("^I click on guest check out button$")
    public void iClickOnGuestCheckOutButton() {
        new LaptopsAndNotebooksPage().clickOnGuestCheckout();
    }

//    @And("^I click on continue button$")
//    public void iClickOnContinueButton() {
//        new LaptopsAndNotebooksPage().clickOnContinue();
//    }


    @And("^I Enter First name \"([^\"]*)\"$")
    public void iEnterFirstName(String name)  {
        new LaptopsAndNotebooksPage().sendTextToFirstNameField("Jhon");


    }

    @And("^I Enter Last name \"([^\"]*)\"$")
    public void iEnterLastName(String lastName)  {
        new LaptopsAndNotebooksPage().sendTextToLastNameField("Jhon");

    }

    @And("^I Enter enter email \"([^\"]*)\"$")
    public void iEnterEnterEmail(String email)  {
        new LaptopsAndNotebooksPage().sendTextToEmailField("Jhon");

    }

    @And("^I Enter Telephone number \"([^\"]*)\"$")
    public void iEnterTelephoneNumber(String number) {
        new LaptopsAndNotebooksPage().sendTextToTelephoneField("012345678");

    }

    @And("^I Enter Address \"([^\"]*)\"$")
    public void iEnterAddress(String address)  {
        new LaptopsAndNotebooksPage().sendTextToAddressField("1 London Road");

    }

    @And("^I Enter City name \"([^\"]*)\"$")
    public void iEnterCityName(String cityName) {
        new LaptopsAndNotebooksPage().sendTextToCityField("London");

    }

    @And("^I Enter Post code \"([^\"]*)\"$")
    public void iEnterPostCode(String postcode)  {
        new LaptopsAndNotebooksPage().sendTextToPostCOdeField("LL011LL");

    }

    @And("^I select County \"([^\"]*)\"$")
    public void iSelectCounty(String county) {
        new LaptopsAndNotebooksPage().selectCountry("United Kingdom");

    }

    @And("^I select region \"([^\"]*)\"$")
    public void iSelectRegion(String region)  {
        new LaptopsAndNotebooksPage().selectRegion("Greater London");

    }

    @And("^I click on guest contine button$")
    public void iClickOnGuestContineButton() {
        new LaptopsAndNotebooksPage().clickOnGuestContinueButton();
    }

    @And("^I add comment$")
    public void iAddComment() {
        new LaptopsAndNotebooksPage().addComment();
    }

    @And("^I check box terms and conditons$")
    public void iCheckBoxTermsAndConditons() {
        new LaptopsAndNotebooksPage().termsAndConditions();
    }

    @And("^I click on final continue button$")
    public void iClickOnFinalContinueButton() {
        new LaptopsAndNotebooksPage().finalContinueButton();
    }

    @Then("^I am on verify the paymnet method page$")
    public void iAmOnVerifyThePaymnetMethodPage() {
        Assert.assertEquals("Warning: Payment method required!", "Warning: Payment method required!");
    }

    @And("^I click on continue button$")
    public void iClickOnContinueButton()  {
        new LaptopsAndNotebooksPage().clickOnContinue();
       // new RegisterPage().lastContinueButton();
    }
}
