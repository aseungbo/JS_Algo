// 8
// 1 1 0 0 0 0 1 1
// 1 1 0 0 0 0 1 1
// 0 0 0 0 1 1 0 0
// 0 0 0 0 1 1 0 0
// 1 0 0 0 1 1 1 1
// 0 1 0 0 1 1 1 1
// 0 0 1 1 1 1 1 1
// 0 0 1 1 1 1 1 1

// 4
// 1 1 0 0
// 1 1 0 0
// 0 0 0 0
// 0 0 0 0

// 2
// 1 0
// 1 1

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((ele, idx) => {
    if (idx === 0) return Number(ele);
    return ele.split(" ").map(Number);
  });

const [n, ...rows] = input;
let white = 0;
let blue = 0;

const divide = (x, y, n) => {
  let cnt = 0;
  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      cnt += rows[i][j];
    }
  }
  if (cnt === 0) white++;
  else if (cnt === n * n) blue++;
  else {
    const length = parseInt(n / 2);
    divide(x, y, length);
    divide(x, y + length, length);
    divide(x + length, y, length);
    divide(x + length, y + length, length);
  }
};

const solution = (n, rows) => {
  divide(0, 0, n);
  console.log(white);
  console.log(blue);
};

solution(n, rows);
