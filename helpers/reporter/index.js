const fs = require('fs')

class CustomReporter {

    onRunComplete(testContexts, results) {
        let text = 'Reporter At ' + new Date().toLocaleDateString("fa") + ': \n'
        console.log('Custom reporter output:');
        results.testResults.map(i =>   i.testResults).forEach((arr, index) => {
                console.log('Scenario '+ ( index + 1 ) + ' : ', arr[0].fullName.replace(arr[0].title, ""))
                text += 'Scenario '+ ( index + 1 ) + ' : ' + arr[0].fullName.replace(arr[0].title, "") + ' \n'
                arr.forEach((item, i) => {
                    console.log(('Test '+ ( i + 1 ) + ' : ' + item.title + " = " + item.status))
                    text += ('Test '+ ( i + 1 ) + ' : ' + item.title + " = " + item.status) + ' \n'
                })
        })
        try {
            fs.writeFile(`./${'Reporter-At-' + new Date().getTime()}.txt`, text, () => {})
        } catch (e) {
            console.log("riteFile", e)
        }
    }

}

module.exports = CustomReporter;
