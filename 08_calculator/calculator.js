const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, currentNumber) => total + currentNumber, 0);
};

const multiply = function (array) {
  return array.reduce((total, currentNumber) => total * currentNumber, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num === 0) {
    return 1;
  } else if (num === 1) {
    return 1;
  } else {
    let sum = 1;
    for (i = 2; i <= num; i++) {
      sum = sum * i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
