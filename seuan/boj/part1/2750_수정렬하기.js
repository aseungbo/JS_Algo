const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// TEST CASE
// 5
// 5
// 2
// 3
// 4
// 1

// Res
// 1 2 3 4 5

const [size, ...array] = input;
array.sort((a, b) => a - b).forEach((ele) => console.log(ele));
