const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, str] = input;
const mod = 1234567891;
let sum = 0;
let r = 1;

for (let i = 0; i < n; i++) {
  sum += (str.charCodeAt(i) % 96) * r;
  sum %= mod;
  r *= 31;
  r %= mod;
}

console.log(sum);
