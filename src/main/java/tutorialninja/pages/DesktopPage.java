package tutorialninja.pages;


import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import org.testng.Reporter;
import tutorialninja.utility.Utility;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class DesktopPage extends Utility {
    private static final Logger log = LogManager.getLogger(DesktopPage.class.getName());

    public DesktopPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(linkText = "Laptops & Notebooks")
    WebElement mouseHoverOnLapTopAndNotebookTab;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Show All Laptops & Notebooks')]")
    WebElement clickOnLapTopAndNotebookTab;

    @CacheLookup
    @FindBy(linkText = "Components")
    WebElement mouseHoverOnComponentTab;

    @CacheLookup
    @FindBy(linkText = "Show All Components")
    WebElement clickOnAllComponentTab;

    @CacheLookup
    @FindBy(xpath = "//div[@class = 'table-responsive']/table/tbody/tr/td[6])")
    WebElement getText;


    public void selectByAtoZ() {
        Reporter.log("It will select order A to Z ");
        selectByVisibleTextFromDropDown(By.id("input-sort"), "Name (A - Z)");


    }

    public void selectByIndex() {
        Reporter.log("Selection");
        Select productOrder = new Select(driver.findElement(By.xpath("//select[@id='input-sort']")));
        productOrder.selectByIndex(2);

    }

    public void setMouseHoverOnLapTopAndNotebookTab() {
        Reporter.log("Mouse hover " + mouseHoverOnLapTopAndNotebookTab.toString());
        clickOnElement(mouseHoverOnLapTopAndNotebookTab);

    }

    public void setClickOnLapTopAndNotebookTab() {
        Reporter.log("Click on laptop and notebook tab " + clickOnLapTopAndNotebookTab.toString());
        clickOnElement(clickOnLapTopAndNotebookTab);


    }

    public void setMouseHoverOnComponentTab() {
        Reporter.log("Mouse hover " + mouseHoverOnComponentTab.toString());
        clickOnElement(mouseHoverOnComponentTab);

    }

    public void setClickOnAllComponentTab() {
        Reporter.log("Click on all component tab " + clickOnAllComponentTab.toString());
        clickOnElement(clickOnAllComponentTab);

    }

    public void dateSelection() {
        String year = "2023";
        String month = "November";
        String date = "30";
        clickOnElement(By.xpath("//div[@class = 'input-group date']//button"));
        while (true) {
            String monthAndYear = driver.findElement(By.xpath("//div[@class = 'datepicker']/div[1]//th[@class='picker-switch']")).getText();
            String[] arr = monthAndYear.split(" ");
            String mon = arr[0];
            String yer = arr[1];
            if (mon.equalsIgnoreCase(month) && yer.equalsIgnoreCase(year)) {
                break;
            } else {
                clickOnElement(By.xpath("//div[@class = 'datepicker']/div[1]//th[@class='next']"));
            }
        }
        List<WebElement> allDates = driver.findElements(By.xpath("//div[@class = 'datepicker']/div[1]//tbody/tr/td[@class = 'day']"));
        for (WebElement e : allDates) {
            if (e.getText().equalsIgnoreCase(date)) {
                e.click();
                break;
            }
        }

    }

    public String getText() {
        String message = getTextFromElement(getText);
        log.info("Check out page: " + getText.toString());
        return message;
    }

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Checkout')]")
    WebElement checkoutText;
    @CacheLookup
    @FindBy(xpath = "//h2[contains(text(),'New Customer')]")
    WebElement newCustomerText;
    @CacheLookup
    @FindBy(xpath = "//div[@class='panel-group']/div[1]/div[2]/div/div/div[1]/div[2]/label/input")
    WebElement guestCheckBox;
    @CacheLookup
    @FindBy(xpath = "//input[@id='button-account']")
    WebElement continueButton;
    @CacheLookup
    @FindBy(xpath = "//input[@id='input-payment-firstname']")
    WebElement firstName;
    @CacheLookup
    @FindBy(xpath = "//input[@id='input-payment-lastname']")
    WebElement lastName;
    @CacheLookup
    @FindBy(xpath = "//input[@id='input-payment-email']")
    WebElement email;
    @CacheLookup
    @FindBy(xpath = "//input[@id='input-payment-telephone']")
    WebElement telephone;
    @CacheLookup
    @FindBy(xpath = "//input[@id='input-payment-address-1']")
    WebElement address;
    @CacheLookup
    @FindBy(xpath = "//input[@id='input-payment-city']")
    WebElement city;
    @CacheLookup
    @FindBy(xpath = "//input[@id='input-payment-postcode']")
    WebElement postcode;
    @CacheLookup
    @FindBy(xpath = "//select[@id='input-payment-country']")
    WebElement country;
    @CacheLookup
    @FindBy(xpath = "//select[@id='input-payment-zone']")
    WebElement region;
    @CacheLookup
    @FindBy(css = "#button-guest")
    WebElement guestContinueButton;
    @CacheLookup
    @FindBy(xpath = "//div[@class='panel-group']/div[3]/div[2]/div[1]/p[2]/textarea[1]")
    WebElement commentField;
    @CacheLookup
    @FindBy(name = "agree")
    WebElement termAndConditionsCheckBox;
    @CacheLookup
    @FindBy(xpath = "//input[@id='button-payment-method']")
    WebElement continueButtonInCommentSection;
    @CacheLookup
    @FindBy(xpath = "//div[@class='panel-group']/div[3]/div[2]/div/div[1]")
    WebElement paymentErrorMessage;

    //This method will get check out text
    public String getCheckOutPageText() {
        log.info("Getting Text from " + checkoutText.toString());
        return getTextFromElement(checkoutText);
    }

    //This method will get New Customer text
    public String getNewCustomerText() {
        log.info("Getting New Customer text from : " + newCustomerText.toString());
        return getTextFromElement(newCustomerText);
    }

    //This method click on Guest checkout button
    public void clickOnGuestCheckout() {
        clickOnElement(guestCheckBox);
        log.info("Clicking on Guest  : " + guestCheckBox.toString());
    }

    //This method will click on continue button
    public void clickOnContinueButton() {
        clickOnElement(continueButton);
        log.info("Clicking on continue button : " + continueButton.toString());

    }

    //This method will send text to first name field
    public void sendTextToFirstNameField(String fName) {
        sendTextToElement(firstName, fName + getAlphaNumericString(2));
        log.info("Entering first name : " + fName);
    }

    //This method will send text to last name field
    public void sendTextToLastNameField(String lname) {
        sendTextToElement(lastName, lname + getAlphaNumericString(2));
        log.info("Entering last name : " + lname);
    }

    //This method will send text to email field
    public void sendTextToEmailField(String uEmail) {
        sendTextToElement(email, uEmail + getAlphaNumericString(2) + "@gmail.com");
        log.info("Entering email : " + email);
    }

    //This method will send text to telephone number field
    public void sendTextToTelephoneField(String tele) {
        sendTextToElement(telephone, tele);
        log.info("Entering telephone number : " + tele);
    }

    //This method will send text to address field
    public void sendTextToAddressField(String add) {
        sendTextToElement(address, add);
        log.info("Entering address : " + add);
    }

    //This method will send text to city name field
    public void sendTextToCityField(String uCty) {
        sendTextToElement(city, uCty);
        log.info("Entering city name : " + uCty);

    }

    //This method will send text to postcode field
    public void sendTextToPostCOdeField(String pCode) {
        sendTextToElement(postcode, pCode + getAlphaNumericString(1));
        log.info("Entering postcode : " + pCode);
    }

    //This method will select text country field
    public void selectCountry(String uCountry) {
        selectByVisibleTextFromDropDown(country, uCountry);
        log.info("Selecting country : " + country);
    }

    //This method will select text region field
    public void selectRegion(String uRegion) throws InterruptedException {
        selectByVisibleTextFromDropDown(region, uRegion);
        log.info("Selecting region : " + region);
        Thread.sleep(1500);
    }

    //This method will click on continue button
    public void clickOnGuestContinueButton() {
        clickOnElement(guestContinueButton);
        log.info("Clicking on continue button : " + guestContinueButton.toString());
    }

    //This method will send text to add comment box
    public void sendTextToAddCommentBox(String comment) {
        sendTextToElement(commentField, comment);
        log.info("Entering comments : " + comment);
    }

    //This method will click on term and condition box
    public void clickOnTermAndConditionsCheckBox() {
        clickOnElement(termAndConditionsCheckBox);
        log.info("Clicking on Term and Conditions Checkbox : " + termAndConditionsCheckBox.toString());

    }

    //This method will click on continue button
    public void clickOnContinueButtonInCommentSection() {
        clickOnElement(continueButtonInCommentSection);
        log.info("Clicking on continue button : " + continueButtonInCommentSection.toString());
    }

    //This method will get text from error message
    public String getPaymentErrorMessage() {
        log.info("Getting payment error text : " + continueButton.toString());
        return getTextFromElement(paymentErrorMessage);
    }

    //Declaring WebElement type variables
    @CacheLookup
    @FindBy(xpath = "//h2[contains(text(),'Desktops')]")
    WebElement desktopText;
    @CacheLookup
    @FindBy(xpath = "//select[@id='input-sort']")
    WebElement sortBy;
    @CacheLookup
    @FindBy(xpath = "//h4/a")
    List<WebElement> listOfProducts;
    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'HP LP3065')]")
    WebElement hpLp2065;

    //This method will select A to Z
    public void sortByAtoZ() {
        selectByVisibleTextFromDropDown(sortBy, "Name (A - Z)");
        log.info("Selecting A to Z from Sort By : " + sortBy.toString());


    }

    //This method will select Z to A
    public void sortByZtoA() {
        selectByVisibleTextFromDropDown(sortBy, "Name (Z - A)");
        log.info("Selecting Z to A from Sort By : " + sortBy.toString());
    }

    //This method verify the sort by type
    public ArrayList beforeSortTheProducts() {
        List<WebElement> products = listOfProducts;
        ArrayList<String> originalProductList = new ArrayList();
        for (WebElement list : products) {
            originalProductList.add(list.getText());
        }
        return originalProductList;
    }

    //This method verify the sort by type
    public ArrayList afterSortingTheProducts() {
        Collections.reverse(beforeSortTheProducts());
        System.out.println(beforeSortTheProducts());
        List<WebElement> products = listOfProducts;
        ArrayList<String> afterSortList = new ArrayList();
        for (WebElement newList : products) {
            afterSortList.add(newList.getText());
        }
        return afterSortList;
    }

    //This method will click on HP LP3065
    public void clickOnHpLPDesktop() {
        clickOnElement(hpLp2065);
        log.info("Clicking on Product : " + hpLp2065.toString());

    }

}

