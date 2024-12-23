const fibonacci = function (num) {
  if (num < 0) return "OOPS";
  const fib = [0, 1];
  const count = parseInt(num);
  for (let i = 2; i <= count; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[count];
};
// Do not edit below this line
module.exports = fibonacci;
