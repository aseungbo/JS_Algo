const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const first = parseInt(input[0]);
const second = parseInt(input[1]);

// A + B
console.log(first + second);
// A - B
console.log(first - second);
// A * B
console.log(first * second);
// A / B
console.log(Math.floor(first / second));
// A % B
console.log(first % second);
