
const generatePreName = (names: string[]) => {
    let preName = ""
    names.forEach((name) => preName += name.replace(/[\s,:]/g, "") + "-")
    return preName
}

export { generatePreName }