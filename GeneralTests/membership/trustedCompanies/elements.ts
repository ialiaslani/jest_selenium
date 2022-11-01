
const membershipElements = {
    membershipMenuButton: "//*[@id=\"sidebar.membership\"]/button",
    trustedCompaniesMenuButton: "//*[@id=\"insideDiv\"]/div[2]/nav/div/div/div/div[2]/nav/div[4]/div/div/div/div[1]/li",
    addNewTrustedCompany: "//*[@id=\"root\"]/main/div/div[2]/div[1]/div[1]/div[2]/a",
    firstRowOfTspInStepper: "//*[@id=\"root\"]/main/div/div/div[2]/div/div/div/div[2]/div[1]/div/table/tbody/tr[1]/td[1]/div/span/input",
    nextButtonInStepper: "//*[@id=\"root\"]/main/div/div/div[4]/div/div[2]/button",
    nextButtonInStepperBySelector: "#root > main > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-9.muirtl-14ybvol > div > div.MuiGrid-root.MuiGrid-item.muirtl-1xrfbvl > button",
    firstOptionOfChoseLicense: "//*[@id=\"aa-licenceTypeOne-radio\"]",
    firstRowOfUniqueIdInStepper: "//*[@id=\"root\"]/main/div/div/div[2]/div/div/div/div/div[1]/div/table/tbody/tr[1]/td[1]/div/span/input",
    firstRowOfTsp: "//*[@id=\"root\"]/main/div/div[2]/div[1]/div[2]/div[1]/div/table/tbody/tr[1]/td[7]/div/div/button[2]",
    confirmDelete: "/html/body/div[3]/div[3]/div/div/div[1]/div[2]/div/div[2]/div/div[1]/button",
    yesToUniqueIds: "/html/body/div[3]/div[3]/div/div/div[1]/div/div/div[2]/div[1]/button"
}

const scenario = {
    name: "MemberShip: Test Trusted Companies",
    CreateNewTsp: "Create New Tsp",
    DeleteCreatedTsp: "Delete Created Tsp"
}

export { membershipElements, scenario }