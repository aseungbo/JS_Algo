// https://school.programmers.co.kr/learn/courses/30/lessons/92335

function isPrimeNum(num) {
  num = parseInt(num, 10);
  if (num < 2 || isNaN(num)) return false;
  let checker = 2;
  while (checker <= Math.sqrt(num)) {
    if (num % checker === 0) return false;
    else checker++;
  }
  return true;
}

function solution(n, k) {
  const arr = n
    .toString(k)
    .split(0)
    .filter((e) => isPrimeNum(e));
  return arr.length;
}
