const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const year = input;

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log(1);
} else console.log(0);
