import {Builder} from "selenium-webdriver";
const chrome = require('selenium-webdriver/chrome');
import {rootURL} from "../generalVars";
import {login} from "@helpers/methods";


let option = new chrome.Options();
option.addArguments("--headless", "--allow-running-insecure-content", "--ignore-certificate-errors")
option.headless()


type optionsType = { hasLogin?: boolean, browser?: string  }

async function createDriver(options?: optionsType) {

    let buildDriver = new Builder().forBrowser(options?.browser || "chrome")

    if(process.env.HEADLESS_BROWSER === "true") {
        buildDriver.setChromeOptions(option)
    }

    const driver = await buildDriver.build();
    await driver.manage().window().setRect({ width: 1936, height: 1056 })

    await driver.get(rootURL);
    if(options?.hasLogin){
        await login(driver);
    }

    return driver
}


export { createDriver };
