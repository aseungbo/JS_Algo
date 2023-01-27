const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [first, second] = input;
let result = 0;

for (let i = 1; i <= 3; i++) {
  const res = first * Math.floor((second % 10 ** i) / 10 ** (i - 1));
  console.log(res);
  result += res * 10 ** (i - 1);
}

console.log(result);
