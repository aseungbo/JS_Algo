// TEST CASE
// 5 21
// 5 6 7 8 9

// 10 500
// 93 181 245 214 315 36 185 138 216 295

// Res
// 21

// 497

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((ele) => ele.split(" ").map(Number));

const [nm, cards] = input;
const selectNum = 3;
let res = nm[1];

const getCombinations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두 다 push
  });

  return results; // 결과가 담긴 results를 return
};

const cases = getCombinations(cards, selectNum);
cases.forEach((e) => {
  const diff = e.reduce((a, b) => a + b) - nm[1];
  if (diff <= 0 && Math.abs(diff) < Math.abs(res)) res = diff;
});

console.log(nm[1] + res);
