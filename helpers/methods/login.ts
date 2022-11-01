import {By, WebDriver} from "selenium-webdriver";
import { defaultUserNationalId} from "../generalVars";
async function login(driver: WebDriver) {
    if (process.env.HEADLESS_BROWSER !== "true" || process.env.PASS_SSL_AUTH === "true") {
        await driver.findElement(By.id("details-button")).click();
        await driver.findElement(By.id("proceed-link")).click();
    }
    await driver.findElement(By.name("NationalID")).clear();
    await driver.findElement(By.name("NationalID")).sendKeys(process.env.USER_NATIONAL_ID || defaultUserNationalId);
    await driver.findElement(By.id("button-1656768318414")).click();
}
export { login };
