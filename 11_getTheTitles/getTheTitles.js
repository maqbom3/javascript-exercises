const getTheTitles = function(books) {
    arr = [];
    for (i = 0; i < books.length; i++) {
        arr.push(Object.values(books[i])[0]);
    }
    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
