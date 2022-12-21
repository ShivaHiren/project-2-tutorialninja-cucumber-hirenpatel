package tutorialninja.pages;


import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;
import tutorialninja.utility.Utility;

import java.util.List;


public class TopMenuPage extends Utility {
    private static final Logger log = LogManager.getLogger(TopMenuPage.class.getName());

    public TopMenuPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Welcome, Please Sign In!')]")
    WebElement welcomeText;

    @CacheLookup
    @FindBy(id = "Email")
    WebElement emailField;

    @CacheLookup
    @FindBy(name = "Password")
    WebElement passwordField;

    @CacheLookup
    @FindBy(xpath = "//button[contains(text(),'Log in')]")
    WebElement loginButton;

    @CacheLookup
    @FindBy(xpath = "//div[@class='message-error validation-summary-errors']")
    WebElement errorMessage;


    public String getWelcomeText() {
        Reporter.log("Get welcome text " + welcomeText.toString());
        return getTextFromElement(welcomeText);

    }

    public void enterEmailId(String email) {
        Reporter.log("Enter email " + emailField.toString());
        sendTextToElement(emailField, email);
    }

    public void enterPassword(String password) {
        Reporter.log("Enter password " + passwordField.toString());
        sendTextToElement(passwordField, password);
    }

    public void clickOnLoginButton() {
        Reporter.log("Click on  login button " + loginButton.toString());
        clickOnElement(loginButton);
    }

    public String getErrorMessage() {
        Reporter.log("Error message " + errorMessage.toString());
        return getTextFromElement(errorMessage);
    }
    @CacheLookup
    @FindBy(xpath = "//nav[@id='menu']//ul//li//a")
    List<WebElement> topMenu;


    //This Method will select Options from Top Menu
    public void selectMenu(String menu) throws InterruptedException {
        Thread.sleep(2000);
        List<WebElement> menuList = topMenu;
        try {
            for (WebElement list : menuList) {
                if (list.getText().equalsIgnoreCase(menu)) {
                    list.click();
                }
            }
        } catch (StaleElementReferenceException e) {
            menuList = topMenu;
        }

    }

    //This Method will hover pointer on Top Menu elements
    public void hoverOverMainMenuBar(String mainMenu) throws InterruptedException {
        Thread.sleep(2000);
        Actions actions = new Actions(driver);
        List<WebElement> menuList = topMenu;
        try {
            for (WebElement list : menuList) {
                if (list.getText().equalsIgnoreCase(mainMenu)) {
                    actions.moveToElement(list).build().perform();
                }
            }
        } catch (StaleElementReferenceException e) {
            menuList = topMenu;
        }
    }

}
