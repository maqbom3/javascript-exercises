const sumAll = function(num1, num2) {
    sum = 0;
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    if (num2 < num1) {
        [num1, num2] = [num2, num1];
    }
    for(i = num1; i <= num2; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
