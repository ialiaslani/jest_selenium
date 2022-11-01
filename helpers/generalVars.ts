const counterElements = {
    enterTaxFileButtonByXpath: "//*[@id=\"root\"]/main/div/div/div/div/div[3]/div/div[2]/div/div/div[1]/div/table/tbody/tr/td[9]/button",
    enterTaxFileButtonByTags: "#root > main > div > div > div > div > div.MuiGrid-root.MuiGrid-item > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12 > div > div > div.MuiBox-root > div > table > tbody > tr > td:nth-child(9) > button"
}

const rootURL = process.env.TEST_URL || "https://wantolan.ir/";

const defaultUserNationalId = "10103270201"



export { rootURL, counterElements, defaultUserNationalId }