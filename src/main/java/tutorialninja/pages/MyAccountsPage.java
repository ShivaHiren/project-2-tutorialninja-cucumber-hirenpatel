package tutorialninja.pages;


import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;
import tutorialninja.utility.Utility;

import java.util.List;


public class MyAccountsPage extends Utility {
    private static final Logger log = LogManager.getLogger(MyAccountsPage.class.getName());

    public MyAccountsPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'My Account')]")
    WebElement myAccountLink;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Register')]")
    WebElement registerLink;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Register Account')]")
    WebElement registerAccount;

    @CacheLookup
    @FindBy(xpath = "//body/nav[@id='top']/div[1]/div[2]/ul[1]/li[2]/ul[1]/li[2]/a[1]")
    WebElement loginLink;

    @CacheLookup
    @FindBy(xpath = "//h2[contains(text(),'Returning Customer')]")
    WebElement returnCustomer;

    public void clickOnMyAccountLink() {
        Reporter.log("Click on my account link " + myAccountLink.toString());
        clickOnElement(myAccountLink);

    }

    public void clickOnRegisterLink() {
        Reporter.log("Click on my register link " + registerLink.toString());
        clickOnElement(registerLink);

    }


    public void clickOnLoginLink() {
        Reporter.log("Click on my login link " + loginLink.toString());
        clickOnElement(loginLink);

    }
//    @CacheLookup
//    @FindBy(xpath = "(//span[@class='hidden-xs hidden-sm hidden-md'])[3]")
//    WebElement myAccountLink;
//
//    @CacheLookup
//    @FindBy(xpath = "//a[contains(text(),'Register')]")
//    WebElement registerLink;
//    @CacheLookup
//    @FindBy(xpath = "/li[@class='dropdown open']/ul/li[2]")
//    WebElement loginLink;
    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'My Account')]")
    WebElement myAccountText;
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Account Logout')]")
    WebElement logoutText;
    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Continue')]")
    WebElement continueButtonLogout;
    @CacheLookup
    @FindBy(xpath = "//ul[@class='dropdown-menu dropdown-menu-right']//li")
    List<WebElement> listOfMyAccountOptions;


    //this method will select option from My account aoptions
    public void selectMyAccountOptions(String options) {

        List<WebElement> accountOptionList = listOfMyAccountOptions;
        for (WebElement accountOptions : accountOptionList) {
            if (accountOptions.getText().equalsIgnoreCase(options)) {
                log.info("Selecting Account Option : " + accountOptions);
                accountOptions.click();
                break;
            }
        }
    }

    //this method will get text
    public String getMyAccountText() {
        log.info("Getting My Account Text : " + myAccountText.toString());
        return getTextFromElement(myAccountText);
    }


}
