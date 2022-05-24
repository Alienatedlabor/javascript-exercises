const sumAll = function (num1, num2) {
  let sum = 0;
  if (typeof num1 !== "number" || typeof num2 !== "number"){
    return "ERROR"
  }
    if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
      return "ERROR";
    }
  if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      console.log(num1, num2, sum);
      sum += i;
      console.log(num1, num2, sum)
    }
  } if (num2 < num1) {
    for (let i = num2; i <= num1; i++) {
      sum += i;
    }
  } return sum;
};
sumAll();

// Do not edit below this line
module.exports = sumAll;
