// TEST CASE
// 2 1 5  | 4
// 5 1 6 | 2
// 100 99 1000000000 | 999999901

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// Timeout
const [up, down, goal] = input;
let height = 0;

for (let day = 1; day < Infinity; day++) {
  height += up;
  if (height >= goal) {
    console.log(day);
    break;
  }
  height -= down;
}
