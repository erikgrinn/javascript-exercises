const leapYears = function(inputYear) {
    let myYear = inputYear

    if (myYear%4 == 0) {
        if ((myYear%100 != 0) || myYear%400 == 0) {
           return true 
        } else {
            return false
        }
    } else {
        return false
    }
};

// or...
// return (inputYear % 4 === 0 && (inputYear % 100 !== 0 || inputYear % 400 === 0));
// }

// Do not edit below this line
module.exports = leapYears;
