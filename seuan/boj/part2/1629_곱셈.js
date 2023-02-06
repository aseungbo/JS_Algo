// Divide and Conquer Algorithm

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(BigInt);

// 10 11 12
// 10 ** 11 % 12
const [a, b, c] = input;

const pow = (a, b, c) => {
  if (b === 0n) return BigInt(1);

  const x = pow(a, BigInt(parseInt(b / BigInt(2))), c);
  if (b % 2n === 0n) return (x * x) % c;
  return (((x * x) % c) * a) % c;
};

console.log(parseInt(pow(a, b, c)));
