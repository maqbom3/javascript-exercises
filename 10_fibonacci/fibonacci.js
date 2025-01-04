const fibonacci = function(num) {
    if (typeof num === 'string') {
        num = parseInt(num);
    }
    if (num < 0) {
        return "OOPS";
    }
    if (num === 0 || num === 1) {
        return num;
    }
    prev1 = 1;
    prev2 = 0;
    for(i = 0; i < num - 1; i++) {
        temp = prev2;
        prev2 = prev1;
        prev1 = prev1 + temp;
    }
    return prev1;
    
};

// Do not edit below this line
module.exports = fibonacci;
