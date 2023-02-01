const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((ele, idx) => {
    if (idx === 0) return ele.split(" ");
    return parseInt(ele);
  });

const makeGapArray = (arr) => {
  const gapArr = [];
  arr.forEach((ele, idx) => {
    if (idx < sortArr.length - 1) gapArr.push(sortArr[idx + 1] - ele);
  });
  return gapArr;
};

const checkValidGap = (mid) => {
  let cnt = 1;
  let sumGap = 0;
  for (let i = 0; i < gapArr.length; i++) {
    sumGap += gapArr[i];
    if (sumGap >= mid) {
      cnt++;
      sumGap = 0;
    } else continue;
    if (cnt >= numberOfShareBox) return true;
  }
  return false;
};

const binarySearch = () => {
  while (row <= high) {
    const mid = Math.floor((high + row) / 2);
    if (checkValidGap(mid)) {
      resGap = mid > resGap ? mid : resGap;
      row = mid + 1;
    } else high = mid - 1;
  }
};

const [nc, ...arr] = input;
const sortArr = arr.sort((a, b) => a - b);
const gapArr = makeGapArray(sortArr);
const numberOfShareBox = parseInt(nc[1]);
let row = 1;
let high = sortArr.at(-1) - row;
let resGap = 0;

binarySearch();
console.log(resGap);
