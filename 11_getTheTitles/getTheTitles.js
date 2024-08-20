const getTheTitles = function(books) {
    titleArr = []
    for (let i=0; i<books.length; i++) {
        titleArr.push(books[i].title)
    }
    return titleArr
};

// Do not edit below this line
module.exports = getTheTitles;
