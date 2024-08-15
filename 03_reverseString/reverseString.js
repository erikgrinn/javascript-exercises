const reverseString = function(inputString) {
    let myString = String(inputString)
    let reversedString = '';
    for (let i = myString.length - 1; i >= 0; i--) {
        reversedString += myString[i];
    }
    return reversedString;
};

// or...

// function reverseString(inputString) {
//     return inputString.split('').reverse().join('');
// };



// Do not edit below this line
module.exports = reverseString;
