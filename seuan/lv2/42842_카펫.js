function solution(brown, yellow) {
  let answer = [];
  const arrLength = brown + yellow;
  for (let i = 0; i < arrLength; i++) {
    let row = i;
    let col = arrLength / i;
    let yelLow = row - 2;
    let yelCol = col - 2;
    if (row < col || col - Math.floor(col) !== 0) continue;
    if (yelLow <= 0 || yelCol <= 0 || yelLow * yelCol !== yellow) continue;
    else {
      answer = [row, col];
      break;
    }
  }
  return answer;
}
