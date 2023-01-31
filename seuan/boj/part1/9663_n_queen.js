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
const numberOfQueen = n;
let cnt = 0;

const validation = (n, arr) => {
  const row = numberOfQueen - n;
  for (let i = 0; i < row; i++) {
    if (
      arr[i] === arr[row] ||
      Math.abs(i - row) === Math.abs(arr[i] - arr[row])
    ) {
      console.log(
        `${row}번째 퀸을 ${row}행 ${arr[row]}열에 배치할 수 없습니다. 처음으로 돌아갑니다.`
      );
      return 0;
    }
  }
  console.log(`${row}번째 퀸을 ${row}행 ${arr[row]}열에 배치합니다`);
  return 1;
};

const queen = (n, arr) => {
  if (validation(n, arr)) {
    if (n === 1) {
      cnt += 1;
      console.log(`배치된 퀸의 위치는 다음과 같습니다. ${arr}`);
      return;
    }
    for (let col = 0; col < numberOfQueen; col++) {
      arr[numberOfQueen - (n - 1)] = col;
      queen(n - 1, arr);
    }
  }
};

for (let i = 0; i < n; i++) {
  const arr = new Array(numberOfQueen);
  arr[0] = i;
  queen(n, arr);
}

console.log(cnt);
