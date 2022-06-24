const palindromes = function (word) {
  let modifiedWord = word.toLowerCase().replace(/([^a-z])/g, "");
  let reverse = modifiedWord.split("").reverse().join("");
  if (reverse === modifiedWord) {
    return true;
  } else {
    return false;
  }
};

// if (word.length > 2) {
//  reverse = word.split(" ").reverse().join("");
//   if (word === reverse) {
//     return true;
//   }
// Do not edit below this line
module.exports = palindromes;
// let reverse = word
// .toLowerCase()
// .split("")
// .reverse()
// .join("")
// .split(" ")
// .join();
// if (word === reverse) {
// return true;
// } else {
// return false;
// }
