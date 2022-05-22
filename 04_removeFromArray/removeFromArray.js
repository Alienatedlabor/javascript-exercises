let originalArray = [1, 2, 3, 4]
const removeFromArray = function(originalArray, ...valuesToCheck) {
  let filteredArray = originalArray.filter(removed => !valuesToCheck.includes(removed));
  return filteredArray;
};
removeFromArray([1, 2, 3, 4, 5, 6], 3, 5)
// Do not edit below this line
module.exports = removeFromArray;
