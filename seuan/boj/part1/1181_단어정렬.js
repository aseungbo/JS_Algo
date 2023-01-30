// TEST CASE
// 13
// but
// i
// wont
// hesitate
// no
// more
// no
// more
// it
// cannot
// wait
// im
// yours

// Res
// i
// im
// it
// no
// but
// more
// wait
// wont
// yours
// cannot
// hesitate

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [size, ...array] = input;
const setArray = [...new Set(array)];
console.log(
  setArray
    .sort((a, b) => {
      if (a.length !== b.length) return a.length - b.length;
      else return a > b ? 1 : -1;
    })
    .join("\n")
);
