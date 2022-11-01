const uniqueIdsElements = {
    membershipMenuButton: "//*[@id=\"sidebar.membership\"]/button",
    uniqueIdsMenuButton: "//*[@id=\"insideDiv\"]/div[2]/nav/div/div/div/div[2]/nav/div[4]/div/div/div/div[2]/li",
    addNewUniqueId: "//*[@id=\"root\"]/main/div/div[2]/div/div[1]/div[2]/a",
    firstOptionOfChoseLicense: "//*[@id=\"aa-sendTypeOne-radio\"]",
    nextButtonInStepper: "//*[@id=\"root\"]/main/div/div/div[4]/div/div[2]/button",
    nextButtonInStepperBySelector: "#root > main > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-9 > div > div.MuiGrid-root.MuiGrid-item > button",
    uploadKeyInput: "//*[@id=\"unique-id-file\"]",
    firstRowOfPostalCode: "//*[@id=\"root\"]/main/div/div/div[2]/div/div/div/div/div[1]/div/table/tbody/tr[1]/td[1]/div/span/input",
    disableFirstRowOfUniqueId: "//*[@id=\"root\"]/main/div/div[2]/div/div[2]/div[1]/div/table/tbody/tr[1]/td[7]/div/div/button[2]",
    confirmDeleteUniqueId: "/html/body/div[3]/div[3]/div/div/div[1]/div[2]/div/div[2]/div/div[1]/button",
    closeDisabledUniqueId: "/html/body/div[4]/div[3]/div/div/div[1]/div[2]/div/div[2]/div/div/button"
}

const scenario = {
    name: "MemberShip: Test Unique Id",
    CreateUniqueId: "Create New Unique Id",
    DisableCreatedUniqueId: "Disable Created Unique Id"
}

export { uniqueIdsElements, scenario }