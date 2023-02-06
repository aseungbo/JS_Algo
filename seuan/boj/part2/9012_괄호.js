const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((ele, idx) => {
    if (idx === 0) return Number(ele);
    return ele.split("");
  });

const [n, ...cases] = input;

const solution = (n, cases) => {
  const buffer = [];
  for (let i = 0; i < n; i++) {
    const stack = [];

    if (cases[i][0] === ")") {
      buffer.push("NO");
      continue;
    } else {
      for (let j = 0; j < cases[i].length; j++) {
        if (stack.length === 0 && cases[i][j] === ")") {
          stack.push(1);
          break;
        }
        cases[i][j] === "(" ? stack.push(0) : stack.pop();
      }
      stack.length ? buffer.push("NO") : buffer.push("YES");
    }
  }
  console.log(buffer.join("\n"));
};

solution(n, cases);
