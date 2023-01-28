// TEST CASE
// 5
// 5 50 50 70 80 100
// 7 100 95 90 80 70 60 50
// 3 70 90 80
// 3 70 90 81
// 9 100 99 98 97 96 95 94 93 91

// Result
// 40.000%
// 57.143%
// 33.333%
// 66.667%
// 55.556%

const calculateAverage = (line) => {
  let sum = 0;
  for (let i = 0; i < line[0]; i++) sum += line[i + 1];
  return (sum /= line[0]);
};

const checkStudent = (line, avg) => {
  let cnt = 0;
  for (let i = 0; i < line[0]; i++) {
    if (line[i + 1] > avg) cnt++;
  }
  console.log(`${((cnt / line[0]) * 100).toFixed(3)}%`);
};

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((ele) => ele.split(" ").map(Number));

const data = input;

for (let i = 0; i < data[0]; i++) {
  const avg = calculateAverage(data[i + 1]);
  checkStudent(data[i + 1], avg);
}
