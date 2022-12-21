package tutorialninja.cucumber.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import tutorialninja.pages.DesktopPage;
import tutorialninja.pages.HomePage;

public class DesktopPageSteps {


    @Given("^I am on home page$")
    public void iAmOnHomePage() {
    }

    @And("^I click on show desktop tab$")
    public void iClickOnShowDesktopTab() {
        new HomePage().clickOnShowDesktopButton();
    }


    @When("^I mouse hover on desktop tab$")
    public void iMouseHoverOnDesktopTab() {
        new HomePage().mouseHoverAndClick();
    }

    @And("^I select sort by name Z to A$")
    public void iSelectSortByNameZToA() {
        new DesktopPage().selectByIndex();
    }

    @Then("^Product will arrange in Descending order$")
    public void productWillArrangeInDescendingOrder() {
        Assert.assertEquals("Sony VAIO", "Sony VAIO");

    }

    @And("^I select sort by name A to Z$")
    public void iSelectSortByNameAToZ() {
        new DesktopPage().selectByAtoZ();
    }

    @And("^I click on Select product HP LP(\\d+)$")
    public void iClickOnSelectProductHPLP(int arg0) {
        new HomePage().clickOnContentButton(By.xpath("//a[contains(text(),'HP LP3065')]"));
    }

    @And("^I select delivery date$")
    public void iSelectDeliveryDate() {
        new DesktopPage().dateSelection();
    }

    @And("^I click on add to cart button$")
    public void iClickOnAddToCartButton() {
        new HomePage().clickOnAddToCartButton();
    }

    @And("^I click on shopping cart button$")
    public void iClickOnShoppingCartButton() {
        new HomePage().clickOnShoppingCartButton();
    }

    @And("^I change the currency$")
    public void iChanngeTheCurrency() throws InterruptedException {
        new HomePage().changeCurrency();
        Thread.sleep(500);
        new HomePage().selectCurrency();
    }

    @Then("^I am on check out page$")
    public void iAmOnCheckOutPage() {
        Assert.assertEquals("£74.73","£74.73", new DesktopPage().getText());

    }

}
