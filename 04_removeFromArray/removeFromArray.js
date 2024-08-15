const removeFromArray = function(inputArray, ...inputArgs) {
    let filteredArray = [];

    for (let i = 0; i < inputArray.length; i++) {
        let element = inputArray[i];
        if (inputArgs.indexOf(element) === -1) {
            filteredArray.push(element);
        }
    }

    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
