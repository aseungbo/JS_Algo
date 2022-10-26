function solution(dirs) {
  const queue = new Set();
  const pos = [0, 0];

  queue.add(`${pos[0]}${pos[1]}`);
  dirs.split("").forEach((command) => {
    if (command === "U") pos[1]++;
    else if (command === "D") pos[1]--;
    else if (command === "L") pos[0]--;
    else if (command === "R") pos[0]++;
    if (Math.abs(pos[0]) <= 5 && Math.abs(pos[1]) <= 5)
      queue.add(`${pos[0]}${pos[1]}`);
  });
  return queue.size;
}
