import {By, until, WebDriver} from "selenium-webdriver";
import "selenium-webdriver/chrome";
import "selenium-webdriver/firefox";
import "chromedriver";
import "geckodriver";
import { selectTaxFile, createDriver } from "@helpers/methods";
import {dashboardXpathElements} from "./elements";


let driver: WebDriver;
jest.setTimeout(30000);

describe("Must Filter Dashboard", () => {
    beforeAll(async () => {
        driver = await createDriver({ hasLogin: true })
    });
    afterAll(async () => {
        await driver.quit()
    });


    it("must filter dashboard", async () => {
        await selectTaxFile(driver)
        await driver.wait(until.elementsLocated(By.xpath(dashboardXpathElements.filterSeason)), 2000)
        await driver.findElement(By.xpath(dashboardXpathElements.filterSeason)).click()
        await driver.findElement(By.xpath(dashboardXpathElements.secondElementOfFilterSeason)).click()
        await driver.findElement(By.xpath(dashboardXpathElements.searchButton)).click()
    });

});
