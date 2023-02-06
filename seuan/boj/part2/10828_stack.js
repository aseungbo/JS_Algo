const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((ele, idx) => {
    if (idx === 0) return Number(ele);
    return ele.split(" ");
  });

const [n, ...cmd] = input;

const solution = (n, cmd) => {
  // console.time();
  const stack = [];
  const buffer = [];
  for (let i = 0; i < cmd.length; i++) {
    switch (cmd[i][0]) {
      case "push":
        stack.push(Number(cmd[i][1]));
        break;
      case "top":
        stack.length === 0 ? buffer.push(-1) : buffer.push(stack.at(-1));
        break;
      case "pop":
        stack.length === 0 ? buffer.push(-1) : buffer.push(stack.pop());
        break;
      case "empty":
        stack.length === 0 ? buffer.push(1) : buffer.push(0);
        break;
      case "size":
        buffer.push(stack.length);
        break;
      default:
        continue;
    }
  }
  console.log(buffer.join("\n"));
  // console.timeEnd();
};

solution(n, cmd);
