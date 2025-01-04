const palindromes = function (str) {
    str = str.replace(/[ \.,?!']/g, "").toLowerCase();
    reversedString = "";
    for(i = 0; i < str.length; i++) {
        reversedString = str[i] + reversedString;
    }
    return reversedString === str;
};

// Do not edit below this line
module.exports = palindromes;
