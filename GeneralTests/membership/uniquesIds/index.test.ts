import {By, WebDriver} from "selenium-webdriver";
import "selenium-webdriver/chrome";
import "selenium-webdriver/firefox";
import "chromedriver";
import "geckodriver";
import {selectTaxFile, createDriver, eventElement, generatePreName} from "@helpers/methods";
import {scenario, uniqueIdsElements} from "src/GeneralTests/membership/uniquesIds/elements";

let driver: WebDriver;
jest.setTimeout(30000);

describe(scenario.name, () => {
    beforeAll(async () => {
        driver = await createDriver({ hasLogin: true })
        await selectTaxFile(driver)
    });
    afterAll(async () => {
        await driver.quit()
    });


    it(scenario.CreateUniqueId, async () => {

        const preName = generatePreName([scenario.name, scenario.CreateUniqueId])

        await eventElement({
            driver,
            path: uniqueIdsElements.membershipMenuButton,
            wait: 2000,
            name: "membershipMenuButton",
            preName
        })

        await eventElement({
            driver,
            path: uniqueIdsElements.uniqueIdsMenuButton,
            sleep: 2000,
            name: "uniqueIdsMenuButton",
            preName
        })

        await eventElement({
            driver,
            path: uniqueIdsElements.addNewUniqueId,
            wait: 2000,
            name: "addNewUniqueId",
            preName
        })

        await eventElement({
            driver,
            path: uniqueIdsElements.firstOptionOfChoseLicense,
            wait: 2000,
            name: "firstOptionOfChoseLicense",
            preName
        })

        await eventElement({
            driver,
            path: uniqueIdsElements.nextButtonInStepper,
            sleep: 2000,
            name: "nextButtonInStepper",
            preName
        })

        await eventElement({
            driver,
            path: uniqueIdsElements.uploadKeyInput,
            operation: "sendKeys",
            operationOptions: "Public.txt",
            wait: 2000,
            name: "uploadKeyInput",
            preName
        })

        await eventElement({
            driver,
            path: uniqueIdsElements.nextButtonInStepper,
            sleep: 2000,
            name: "nextButtonInStepper",
            preName
        })

        await eventElement({
            driver,
            path: uniqueIdsElements.firstRowOfPostalCode,
            wait: 2000,
            name: "firstRowOfPostalCode",
            preName
        })


        await eventElement({
            driver,
            path: uniqueIdsElements.nextButtonInStepper,
            sleep: 2000,
            name: "nextButtonInStepper",
            preName,
            locateElement: uniqueIdsElements.nextButtonInStepperBySelector
        })

        await eventElement({
            driver,
            path: uniqueIdsElements.nextButtonInStepper,
            sleep: 1000,
            name: "nextButtonInStepper",
            preName
        })

        await eventElement({
            driver,
            path: uniqueIdsElements.nextButtonInStepper,
            sleep: 1000,
            name: "nextButtonInStepper",
            preName
        })

        await eventElement({
            driver,
            path: uniqueIdsElements.nextButtonInStepper,
            sleep: 1000,
            name: "nextButtonInStepper",
            preName
        })

        await eventElement({
            driver,
            path: uniqueIdsElements.nextButtonInStepper,
            sleep: 1000,
            name: "nextButtonInStepper",
            preName
        })

    });


    it(scenario.DisableCreatedUniqueId, async () => {

        const preName = generatePreName([scenario.name, scenario.DisableCreatedUniqueId])

        await eventElement({
            driver,
            path: uniqueIdsElements.disableFirstRowOfUniqueId,
            sleep: 3000,
            name: "disableFirstRowOfUniqueId",
            preName
        })

        await eventElement({
            driver,
            path: uniqueIdsElements.confirmDeleteUniqueId,
            sleep: 1000,
            name: "confirmDeleteUniqueId",
            preName
        })

        await eventElement({
            driver,
            path: uniqueIdsElements.closeDisabledUniqueId,
            sleep: 1000,
            name: "closeDisabledUniqueId",
            preName
        })

    })

});
