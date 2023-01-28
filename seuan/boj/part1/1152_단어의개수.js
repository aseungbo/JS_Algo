// TEST CASE
// The Curious Case of Benjamin Button 6
//  The first character is a blank 6
// The last character is a blank 6

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((ele) => {
    ele.trim() === ""
      ? console.log(0)
      : console.log(ele.trim().split(" ").length);
  });
