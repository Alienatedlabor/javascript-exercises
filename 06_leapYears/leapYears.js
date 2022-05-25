const leapYears = function(year) {
 if ((year % 4 == 0) && (year % 100 !== 0) || (year % 400 == 0)) {
   return true;
 }
else return false;
};
/* Leap years are years divisible by four (like 1984 and 2004).
 However, years divisible by 100 are not leap years
 unless they are divisible by 400.*/

// Do not edit below this line
module.exports = leapYears;
