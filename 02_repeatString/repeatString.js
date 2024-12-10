const repeatString = function (str, int) {
  if (int < 0) {
    return "ERROR";
  } else {
    let result = "";
    for (i = 0; i < int; i++) {
      result += str;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = repeatString;
