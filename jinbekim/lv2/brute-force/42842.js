function solution(brown, yellow) {
  var answer = [];
  const sum = brown / 2 + 2;
  for (let i = 1; i < sum; ++i) {
      if ((i-2) * (sum - i - 2) === yellow) {
          answer.push(sum - i, i);
          break;
      }
  }
  return answer;
}
