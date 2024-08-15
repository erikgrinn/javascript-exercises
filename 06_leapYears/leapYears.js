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


// Do not edit below this line
module.exports = leapYears;
