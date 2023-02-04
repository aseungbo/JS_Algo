const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((ele, idx) => {
    if (idx === 0) return ele.split(" ").map(Number);
    return parseInt(ele);
  });

const diffCalculator = (arr, k, mid) => {
  let diffSum = 0;
  for (let i = 0; i < arr.length; i++) {
    const diff = mid - arr[i];
    if (diff <= 0) continue;
    diffSum += diff;
  }
  if (diffSum <= k) return true;
  return false;
};

const solution = (n, k, x) => {
  let low = x.at(0);
  let high = k + x.at(0);
  while (low <= high) {
    const mid = Math.floor((high + low) / 2);
    if (diffCalculator(x, k, mid)) {
      t = Math.max(mid, t);
      low = mid + 1;
    } else high = mid - 1;
  }
  console.log(t);
};

const [[n, k], ...x] = input;
const sortX = x.sort((a, b) => a - b);
let t = 0;
solution(n, k, sortX);
