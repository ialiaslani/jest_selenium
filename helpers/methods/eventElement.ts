import {By, until, WebDriver} from "selenium-webdriver";

type eventElementProps ={
    driver: WebDriver,
    path: string,
    wait?: number,
    sleep?: number,
    operation?: "click" | "sendKeys",
    By?: "xpath" | "id" | "name",
    name?: string,
    preName?: string,
    operationOptions?: string,
    locateElement?: string
}

async function eventElement({
    driver,
    path,
    wait,
    sleep,
    name: n,
    By: CustomBy,
    operation,
    preName,
    operationOptions,
    locateElement
}:eventElementProps) {

    const name = (preName || "") + (n || "")

    try {

        if(locateElement) {

            await driver.executeScript((args: string[]) => {
                const [path] = args
                document.querySelector(path)?.scrollIntoView()
            }, [locateElement])

        }

        if(sleep) {

            await driver.sleep(sleep)

        }

        if(wait) {

            await driver.wait(until.elementsLocated(By[CustomBy || "xpath"](path)), wait)

        }

        const element = driver.findElement(By[CustomBy || "xpath"](path))

        await element[operation || "click"](__dirname.replace("helpers\\methods", "assets\\") + operationOptions as any)

    } catch (_) {

        try {

            const image = await driver.takeScreenshot()
            require('fs').writeFile(`screenshots/${(name || path) + "-" + new Date().getTime()}.png`, image, 'base64', () => {})

        } catch (_) {

            const errorMassageScreenshot = "Failed to Take Screenshot " + name || path

            console.error(errorMassageScreenshot)

        }

        const errorMassage = "Failed to " + (operation || "click") + " element " + (name || path)

        console.error(errorMassage)
        throw new Error(errorMassage)

        //can add an api for log of errors!

    }

}

export { eventElement }