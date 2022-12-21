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
import java.util.List;


public class LaptopsAndNotebooksPage extends Utility {
    private static final Logger log = LogManager.getLogger(LaptopsAndNotebooksPage.class.getName());

    public LaptopsAndNotebooksPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(linkText = "MacBook")
    WebElement clickOnMacbookTab;

    @CacheLookup
    @FindBy(xpath = "//tbody/tr[1]/td[4]/div[1]/input[1]")
    WebElement orderUpdate;

    @CacheLookup
    @FindBy(xpath = "//input[contains(@name, 'quantity')]")
    WebElement updateCart;

    @CacheLookup
    @FindBy(xpath = "//input[contains(@name, 'quantity')]")
    WebElement clearCart;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Checkout')]")
    WebElement checkOutButton;

    @CacheLookup
    @FindBy(xpath = "//body/div[@id='checkout-checkout']/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/label[1]/input[1]")
    WebElement clickOnButton;

    @CacheLookup
    @FindBy(xpath = "//input[@id='button-account']")
    WebElement clickOnContinue;

    @CacheLookup
    @FindBy(xpath = "//input[@value='guest']")
    WebElement clickOnGuestCheckout;

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
    @FindBy(xpath = "//input[@name='agree']")
    WebElement termsAndConditions;

    @CacheLookup
    @FindBy(xpath = "//body/div[@id='checkout-checkout']/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/p[2]/textarea[1]")
    WebElement addComment;

    @CacheLookup
    @FindBy(xpath = "//input[@id='button-payment-method']")
    WebElement finalContinueButton;

    @CacheLookup
    @FindBy(xpath = "//div[@class='table-responsive']/table/tbody/tr/td[4]/div/input")
    WebElement quantityField;

    @CacheLookup
    @FindBy(xpath = "//div[@class='table-responsive']/table/tbody/tr/td[4]/div/span/button[1]")
    WebElement updateQty;


    public void updateQuantity(String qty) {
        Reporter.log("Update quantity " + quantityField.toString());
        sendTextToElement(quantityField, qty);
        clickOnElement(updateQty);

    }

    public void finalContinueButton() {
        Reporter.log("Click on continue button  " + finalContinueButton.toString());
        clickOnElement(finalContinueButton);

    }

    public void addComment() {
        Reporter.log("Add comment " + addComment.toString());
        sendTextToElement(addComment, "Can I have delivery before 3PM");

    }

    public void termsAndConditions() {
        Reporter.log("Click on terms on condition " + termsAndConditions.toString());
        clickOnElement(termsAndConditions);

    }

    public void clickOnGuestCheckout() {
        Reporter.log("Click on Guest checkout button " + clickOnGuestCheckout.toString());
        clickOnElement(clickOnGuestCheckout);

    }

    public void clickOnContinue() {
        Reporter.log("Click on continue button " + clickOnContinue.toString());
        clickOnElement(clickOnContinue);

    }

    public void clickOnButton() {
        Reporter.log("Click on continue button " + clickOnButton.toString());
        clickOnElement(clickOnButton);

    }

    public void checkOutButton() {
        Reporter.log("Click on check out  button " + checkOutButton.toString());
        clickOnElement(checkOutButton);

    }

    public void orderUpdate() {
        Reporter.log("Click on order update " + orderUpdate.toString());
        clickOnElement(orderUpdate);

    }

    public void updateCart(String item) {
        Reporter.log("Choose quantity " + updateCart.toString());
        sendTextToElement(updateCart, "2");

    }


    public void productOrderHighToLow() {
        Select productOrder = new Select(driver.findElement(By.xpath("//select[@id='input-sort']")));
        productOrder.selectByIndex(3);

    }

    public void productOrder() {
    }

    public void highToLowSelection() {
        List<WebElement> products = driver.findElements(By.xpath("//p[@class ='price']"));
        List<Double> originalProductsPrice = new ArrayList<>();
        for (WebElement e : products) {
            System.out.println(e.getText());
            String[] arr = e.getText().split("Ex Tax:");
            originalProductsPrice.add(Double.valueOf(arr[0].substring(1).replaceAll(",", "")));
        }
    }

    public void clickOnMacbookTab() {
        Reporter.log("Click on macbook tab " + clickOnMacbookTab.toString());
        clickOnElement(clickOnMacbookTab);

    }

    public void sendTextToFirstNameField(String fName) {
        sendTextToElement(firstName, fName + getAlphaNumericString(2));
    }

    public void sendTextToEmailField(String uEmail) {
        sendTextToElement(email, uEmail + getAlphaNumericString(2) + "@gmail.com");
    }

    public void sendTextToPostCOdeField(String pCode) {
        sendTextToElement(postcode, pCode + getAlphaNumericString(1));
    }

    public void sendTextToLastNameField(String lname) {
        sendTextToElement(lastName, lname + getAlphaNumericString(2));
    }

    public void sendTextToTelephoneField(String tele) {
        Reporter.log("Enter phone number " + telephone.toString());
        sendTextToElement(telephone, tele);

    }

    public void sendTextToAddressField(String add) {
        Reporter.log("Enter phone address " + address.toString());
        sendTextToElement(address, add);

    }

    public void sendTextToCityField(String uCty) {
        Reporter.log("Enter city name " + city.toString());
        sendTextToElement(city, uCty);

    }


    public void selectCountry(String uCountry) {
        Reporter.log("Choose currency " + country.toString());
        selectByVisibleTextFromDropDown(country, uCountry);

    }

    public void selectRegion(String uRegion) {
        Reporter.log("Choose currency " + region.toString());
        selectByVisibleTextFromDropDown(region, uRegion);

    }

    public void clickOnGuestContinueButton() {
        Reporter.log("Click on continue button " + guestContinueButton.toString());
        clickOnElement(guestContinueButton);

    }

}