// TEST CASE
// 2 1 5  | 4
// 5 1 6 | 2
// 100 99 1000000000 | 999999901

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [up, down, goal] = input;
let height = 0;

const day = Math.ceil((goal - up) / (up - down)) + 1;
console.log(day);
