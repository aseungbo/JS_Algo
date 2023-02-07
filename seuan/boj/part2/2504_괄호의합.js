// (()[[]])([]) | 28
// (([]) | 0

// incorrect case
// )()
// ][]
// ())
// [])
// ()]
// [])
// (]
// [)

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const cmd = input;

const correctCase = (stack, char) => {
  if (stack.length === 0 && (char === ")" || char === "]")) return false;
  else if (stack.at(-1) === "(" && char === "]") return false;
  else if (stack.at(-1) === "[" && char === ")") return false;
  return true;
};

const checker = (cmd) => {
  const stack = [];
  const res = [];

  if (!cmd || cmd.at(0) === ")" || cmd.at(0) === "]") return 0;

  for (let i = 0; i < cmd.length; i++) {
    const top = stack.at(-1);
    if (correctCase(stack, cmd[i])) {
      if (cmd[i] === ")" || cmd[i] === "]") {
        if (isNaN(top)) {
          stack.pop();
          cmd[i] === ")" ? stack.push(2) : stack.push(3);
        } else {
          let sum = 0;
          while (!isNaN(stack.at(-1))) sum += stack.pop();
          if (stack.at(-1) === "(" && cmd[i] === ")") {
            stack.pop();
            stack.length === 0 ? res.push(sum * 2) : stack.push(sum * 2);
          } else if (stack.at(-1) === "[" && cmd[i] === "]") {
            stack.pop();
            stack.length === 0 ? res.push(sum * 3) : stack.push(sum * 3);
          } else return 0;
        }
      } else if (cmd[i] === "(" || cmd[i] === "[") stack.push(cmd[i]);
    } else return 0;
  }
  if (stack.length === 0) return res.reduce((a, b) => a + b);
  else if (stack.length !== 0) {
    let sum = 0;
    if (res.length !== 0) sum = res.reduce((a, b) => a + b);
    return isNaN(stack.reduce((a, b) => a + b))
      ? 0
      : stack.reduce((a, b) => a + b) + sum;
  }
};

const solution = (cmd) => {
  const result = checker(cmd);
  console.log(result);
};

solution(cmd);
