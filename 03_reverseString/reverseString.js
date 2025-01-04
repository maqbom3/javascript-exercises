const reverseString = function(str) {
    reversedString = "";
    for(i = 0; i < str.length; i++) {
        reversedString = str[i] + reversedString;
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
