// TEST CASE
// 5
// OOXXOXXOOO
// OOXXOOXXOO
// OXOXOXOXOXOXOX
// OOOOOOOOOO
// OOOOXOOOOXOOOOX

// Result
// 10
// 9
// 7
// 55
// 30

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const data = input;

const calculator = (str) => {
  let checker = 0;
  let sum = 0;

  str.split("").map((ele) => {
    ele === "O" ? checker++ : (checker = 0);
    sum += checker;
  });
  console.log(sum);
};

for (let i = 0; i < data[0]; i++) {
  calculator(data[i + 1]);
}
