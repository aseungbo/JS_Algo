// TEST CASE
// A 65
// B 66
// z 122

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((ele) => ele.charCodeAt(0));

console.log(input[0]);
