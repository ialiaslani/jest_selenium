import {By, until, WebDriver} from "selenium-webdriver";
import {counterElements} from "../generalVars";

async function selectTaxFile(driver: WebDriver) {

    await driver.wait(until.elementsLocated(By.xpath(counterElements.enterTaxFileButtonByXpath)), 2000)


    await driver.executeScript(
        'document.querySelector("'+ counterElements.enterTaxFileButtonByTags +'").scrollIntoView()'
    )
    await driver.sleep(1000)

    await driver.findElement(By.xpath(counterElements.enterTaxFileButtonByXpath)).click();
}

export { selectTaxFile }