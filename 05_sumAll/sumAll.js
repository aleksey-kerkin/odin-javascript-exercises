const sumAll = function (start, stop) {
  let sum = 0;
  let first = start;
  let second = stop;
  if (stop < start) {
    first = stop;
    second = start;
  } else if ((start || stop) < 0) {
    return "ERROR";
  } else if (typeof start === "number" && start % 1 !== 0) {
    return "ERROR";
  } else if (typeof stop === "string") {
    return "ERROR";
  } else if (stop instanceof Array) {
    return "ERROR";
  }
  for (let i = first; i <= second; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
