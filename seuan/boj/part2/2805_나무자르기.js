const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((ele) => ele.split(" ").map(Number));

const sumOfCuttedTrees = (arr, h) => {
  let sum = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < h) break;
    sum += arr[i] - h;
  }
  return sum;
};

const [[n, m], trees] = input;

const treeArr = trees.sort((a, b) => a - b);
let height = 0;
let row = 0;
let high = treeArr.at(-1);

const binarySearch = () => {
  while (true) {
    if (row > high) {
      height = high;
      break;
    }
    const mid = Math.floor(row + (high - row) / 2);
    height = mid;
    const sumOfCutted = sumOfCuttedTrees(treeArr, height);
    if (sumOfCutted > m) {
      row = mid + 1;
    } else if (sumOfCutted < m) {
      high = mid - 1;
    } else break;
  }
};

binarySearch();
console.log(height);
