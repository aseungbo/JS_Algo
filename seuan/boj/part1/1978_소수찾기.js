// TEST CASE
// 4
// 1 3 5 7

// Result
// 3

// 소수 : 1과 자기 자신으로 이루어진 수
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, arrStr] = input;

const arr = arrStr.split(" ");
let cnt = 0;

const isPrimeNumber = (num) => {
  let checker = 2;
  if (num < 2 || isNaN(num)) return false;
  while (checker <= Math.sqrt(num)) {
    if (num % checker === 0) return false;
    else checker++;
  }
  return true;
};

for (let i = 0; i < arr.length; i++) {
  if (isPrimeNumber(arr[i])) cnt++;
}

console.log(cnt);
