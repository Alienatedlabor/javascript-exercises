let array = [1, 2, 3, 4]
const removeFromArray = function(array) {
 
  array.splice(2, 1);
  return array;
};
removeFromArray([1, 2, 3, 4], 3)
// Do not edit below this line
module.exports = removeFromArray;
