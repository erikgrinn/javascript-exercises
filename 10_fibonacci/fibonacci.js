const fibonacci = function(nthNumber) {

    if (nthNumber < 0) return 'OOPS'

    let fibArr = [0, 1];
    for (let i = 1; i < nthNumber; i++) {
        let nextNum = fibArr[i] + fibArr[i - 1];
        fibArr.push(nextNum);
    }
    return fibArr[nthNumber];
};

// Do not edit below this line
module.exports = fibonacci;
