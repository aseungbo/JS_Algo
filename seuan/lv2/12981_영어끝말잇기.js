function solution(n, words) {
  let arr = [];
  let rtn = [0, 0];
  for (let i = 0; i < words.length; i++) {
    if (i === 0) arr.push(words[i]);
    else if (
      arr.includes(words[i]) ||
      !words[i].startsWith(words[i - 1].substr(-1))
    ) {
      rtn[0] = (i % n) + 1;
      rtn[1] = Math.floor(i / n + 1);
      break;
    } else arr.push(words[i]);
  }
  return rtn;
}
