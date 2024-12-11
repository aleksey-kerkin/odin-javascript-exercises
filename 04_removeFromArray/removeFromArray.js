const removeFromArray = function (arr) {
  const valuesToRemove = Array.from(arguments);
  const filteredArray = arr.filter((item) => !valuesToRemove.includes(item));
  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
