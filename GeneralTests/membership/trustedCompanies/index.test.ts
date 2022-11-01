import {WebDriver} from "selenium-webdriver";
import "selenium-webdriver/chrome";
import "selenium-webdriver/firefox";
import "chromedriver";
import "geckodriver";
import {selectTaxFile, createDriver, eventElement, generatePreName} from "@helpers/methods";
import {membershipElements, scenario} from "src/GeneralTests/membership/trustedCompanies/elements";


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


    it(scenario.CreateNewTsp, async () => {

        const preName = generatePreName([scenario.name, scenario.CreateNewTsp])

        await eventElement({
            driver,
            path: membershipElements.membershipMenuButton,
            wait: 2000,
            name: "membershipMenuButton",
            preName
        })

        await eventElement({
            driver,
            path: membershipElements.trustedCompaniesMenuButton,
            wait: 2000,
            name: "trustedCompaniesMenuButton",
            preName
        })


        await eventElement({
            driver,
            path: membershipElements.addNewTrustedCompany,
            wait: 2000,
            name: "addNewTrustedCompany",
            preName
        })


        await eventElement({
            driver,
            path: membershipElements.firstRowOfTspInStepper,
            wait: 2000,
            name: "firstRowOfTspInStepper",
            preName
        })


        await eventElement({
            driver,
            path: membershipElements.nextButtonInStepper,
            wait: 2000,
            name: "nextButtonInStepper",
            preName
        })


        await eventElement({
            driver,
            path: membershipElements.firstOptionOfChoseLicense,
            wait: 2000,
            name: "firstOptionOfChoseLicense",
            preName
        })


        await eventElement({
            driver,
            path: membershipElements.nextButtonInStepper,
            wait: 2000,
            name: "nextButtonInStepper",
            preName
        })


        await eventElement({
            driver,
            path: membershipElements.firstRowOfUniqueIdInStepper,
            wait: 2000,
            name: "firstRowOfUniqueIdInStepper",
            preName
        })


        await eventElement({
            driver,
            path: membershipElements.nextButtonInStepper,
            wait: 2000,
            sleep: 5000,
            name: "nextButtonInStepper",
            preName,
            locateElement: membershipElements.nextButtonInStepperBySelector
        })


        await eventElement({
            driver,
            path: membershipElements.nextButtonInStepper,
            wait: 2000,
            name: "nextButtonInStepper",
            preName,
            locateElement: membershipElements.nextButtonInStepperBySelector
        })


        await eventElement({
            driver,
            path: membershipElements.nextButtonInStepper,
            wait: 2000,
            name: "nextButtonInStepper",
            preName,
            locateElement: membershipElements.nextButtonInStepperBySelector
        })



    });


    it(scenario.DeleteCreatedTsp, async () => {

        const preName = generatePreName([scenario.name, scenario.DeleteCreatedTsp])

        await eventElement({
            driver,
            path: membershipElements.firstRowOfTsp,
            wait: 2000,
            name: "firstRowOfTsp",
            preName
        })

        await eventElement({
            driver,
            path: membershipElements.confirmDelete,
            wait: 2000,
            name: "confirmDelete",
            preName
        })

        await eventElement({
            driver,
            path: membershipElements.yesToUniqueIds,
            wait: 2000,
            name: "yesToUniqueIds",
            preName
        })


    })

});
