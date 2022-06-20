const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function ([...Numbers]) {
  let total = 0;
  for (const number of Numbers) {
    total += number;
  }
  return ~~[total];
};
// using .reduce:
// const sum = function(array){
// return array.reduce((total,current) => total + current, 0)
// }
// 0 at the end is start total

const multiply = function (array) {
  return array.reduce((total, current) => total * current);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function factorial(number) {
  if (number < 0){
    return -1;
  } else if (number == 0){
    return 1;
  } else return number * factorial(number - 1);
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
