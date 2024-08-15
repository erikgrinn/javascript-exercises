const sumAll = function(inputNum1, inputNum2) {
    let integer1 = inputNum1
    let integer2 = inputNum2
    let cumSum = 0

    if (typeof(integer1 && integer2) != 'number') {
        return 'ERROR'
    } else if ((integer1 || integer2) < 0) {
        return 'ERROR'
    } else if (!Number.isInteger(integer1) || !Number.isInteger(integer2)) {
        return 'ERROR'
    } else if (integer1 > integer2) {
        integer1 = inputNum2
        integer2 = inputNum1
    }
    
    for (let i=integer1; i<=integer2; i++) {
        cumSum = cumSum + i
    }

    return cumSum
};


// Do not edit below this line
module.exports = sumAll;
