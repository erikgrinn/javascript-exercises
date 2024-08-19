const palindromes = function (str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanStr = str
        .toLowerCase()
        .split('')
        .filter(char => /[a-z0-9]/.test(char));

    // Use reduce to check if the string is the same forwards and backwards
    const isPalin = cleanStr.reduce((acc, char, index) => {
        return acc && (char === cleanStr[cleanStr.length - 1 - index]);
    }, true);

    return isPalin;
};

// Do not edit below this line
module.exports = palindromes;
