const convertToCelsius = function (temp) {
  let temperatureInC = (temp - 32) * (5 / 9);
  return Number(temperatureInC.toFixed(1));
};

const convertToFahrenheit = function (temp) {
  let temperatureInF = temp * (9 / 5) + 32;
  return Number(temperatureInF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
