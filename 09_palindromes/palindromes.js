const palindromes = function (str) {
  let string = str.toLowerCase().split(/\W/).join("");
  let reversedString = string.split("").reverse().join("");
  return reversedString === string;
};

// Do not edit below this line
module.exports = palindromes;
