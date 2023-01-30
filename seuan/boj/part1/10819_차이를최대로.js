// TEST CASE
// 6
// 20 1 15 8 4 10

// Res
// 62

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((ele) => ele.split(" ").map(Number));

const [n, numbers] = input;
let res = 0;

const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; // 해당하는 fixed를 제외한 나머지 배열
    const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대해 순열을 구한다.
    const attached = permutations.map((permutation) => [fixed, ...permutation]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
};

const calculateSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    sum += Math.abs(arr[i] - arr[i + 1]);
  }
  return sum;
};

const cases = getPermutations(numbers, n);
for (let i = 0; i < cases.length; i++) {
  const sum = calculateSum(cases[i]);
  if (sum > res) res = sum;
}

console.log(res);
