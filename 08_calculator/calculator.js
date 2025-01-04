const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	newSum = 0;
  for (i = 0; i < arr.length; i++) {
    newSum += arr[i];
  }
  return newSum;
};

const multiply = function(arr) {
  newProduct = 1;
  for (i = 0; i < arr.length; i++) {
    newProduct *= arr[i];
  }
  return newProduct;
};

const power = function(num1,num2) {
	return Math.pow(num1,num2);
};

const factorial = function(num1) {
  if (num1 === 0) {return 1;}
	fact = 1;
  for (i = 1; i <= num1; i++) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
