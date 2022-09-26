/**
 * @author jinbekim
 * @date 2022.09.26
 * @description k진수에서 소수 찾기.
 */

function isPrime(n) {
  const sqrt = Math.sqrt(n);
  // ECMAScript 2015에서 추가한 Number.isNaN()이 엄격함.
  if (Number.isNaN(n) || n < 2)
      return false;
  for( let i = 2; i <= sqrt; ++i) {
      if (n % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  let answer = 0;
  const kBasedNum = n.toString(k);
  const candidate = kBasedNum.split('0');

  candidate.forEach(num => {
      const decimal = parseInt(num, 10);
      if(isPrime(decimal)) answer += 1;
  });

  return answer;
}
