const ftoc = function(farenheitInput) {
let celsiusResult = (farenheitInput - 32) * 5/9;
celsiusResult = Math.round(celsiusResult * 10) / 10;
return celsiusResult;
};

const ctof = function(celsiusInput) {
let farenheitResult = (celsiusInput * 9/5) + 32;
farenheitResult = Math.round(farenheitResult * 10) / 10;
return farenheitResult;
};
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
