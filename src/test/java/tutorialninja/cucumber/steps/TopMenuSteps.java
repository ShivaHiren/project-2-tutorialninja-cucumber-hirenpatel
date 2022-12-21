package tutorialninja.cucumber.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import tutorialninja.pages.HomePage;
import tutorialninja.pages.TopMenuPage;

public class TopMenuSteps {
    @When("^I hover mouse over \"([^\"]*)\"$")
    public void iHoverMouseOver(String menu) throws InterruptedException {
        new TopMenuPage().hoverOverMainMenuBar(menu);
    }

    @And("^I select \"([^\"]*)\"$")
    public void iSelect(String submenu) throws InterruptedException {
        new TopMenuPage().selectMenu(submenu);

    }

    @Then("^I should be able to navigate to Desktop page successfully$")
    public void iShouldBeAbleToNavigateToDesktopPageSuccessfully() {
    }

    @And("^I should see \"([^\"]*)\" text$")
    public void iShouldSeeText(String pagename) throws InterruptedException {
        Assert.assertEquals(pagename, new HomePage().getPagesNames());
    }

}

