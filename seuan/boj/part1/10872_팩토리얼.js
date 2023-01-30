// TEST CASE
// 10 | 3628800
// 0 | 1

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [n] = input;

const factorial = (num) => {
  if (num === 1 || num === 0) return 1;
  return num * factorial(num - 1);
};

console.log(factorial(n));
