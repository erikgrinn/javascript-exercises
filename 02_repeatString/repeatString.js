const repeatString = function(inputString, inputNum) {
    let myString = String(inputString)
    let myNum = Number(inputNum)

    if (myNum === 0) {
        return ''
    } else if (myNum <0) {
        return 'ERROR'
    }

    let cumulativeString = '';
    for (i=0; i<myNum; i++) {
        cumulativeString = cumulativeString + myString
    }
    return cumulativeString
};

// Do not edit below this line
module.exports = repeatString;
