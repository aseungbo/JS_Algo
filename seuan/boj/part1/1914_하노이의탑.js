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

const [n] = input;
const cnt = BigInt(2 ** n) - 1n;
const arr = [];

const move = (N, start, end) => {
  arr.push(`${start} ${end}`);
};

const hanoi = (N, start, end, sub) => {
  if (N === 1) {
    move(N, start, end);
    return;
  } else {
    hanoi(N - 1, start, sub, end);
    move(N, start, end);
    hanoi(N - 1, sub, end, start);
  }
};

console.log(cnt.toString());
if (n <= 20) {
  hanoi(n, "1", "3", "2");
  console.log(arr.join("\n"));
}
