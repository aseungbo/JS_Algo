const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((ele) => ele.split(" ").map(Number));

// test case
// 10 5
// 1 10 4 9 2 3 8 5 7 6
// console.log("result: 1 4 2 3");
// console.log("===============");

const [first, second] = input;
const arr = [];

for (let i = 0; i < second.length; i++) {
  if (second[i] < first[1]) arr.push(second[i]);
}

console.log(arr.join(" "));
