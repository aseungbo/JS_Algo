// TEST CASE
// 20
// 7
// 23
// 19
// 10
// 15
// 25
// 8
// 13

// Res
// 7
// 8
// 10
// 13
// 19
// 20
// 23

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const array = input;
const goal = 100;
const selectNum = 7;
let res = goal;

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

const cases = getCombinations(array, selectNum);
for (let i = 0; i < cases.length; i++) {
  const diff = cases[i].reduce((a, b) => a + b) - goal;
  if (diff === 0) {
    console.log(cases[i].sort((a, b) => a - b).join("\n"));
    break;
  }
}
