// TEST CASE
// 3
// Result
// 7
// 1 3
// 1 2
// 3 2
// 1 3
// 2 1
// 2 3
// 1 3

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// 3
// 1 3
// 1 2
// 3 2
// 1 3
// 2 1
// 2 3
// 1 3

// 4
// 1 3
// 1 3
// 1 2
// 3 2
// 3 2
// 1 3
// 2 1
// 2 1
// 2 3
// 1 3
// 1 3

// 5
