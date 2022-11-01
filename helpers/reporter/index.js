class CustomReporter {

    onRunComplete(testContexts, results) {
        console.log('Custom reporter output:');
        results.testResults.map(i =>   i.testResults).forEach((arr, index) => {
                console.log('Scenario '+ ( index + 1 ) + ' : ', arr[0].fullName.replace(arr[0].title, ""))
                arr.forEach((item, i) => {
                    console.log(('Test '+ ( i + 1 ) + ' : ' + item.title + " = " + item.status))
                })
        })
    }

}

module.exports = CustomReporter;