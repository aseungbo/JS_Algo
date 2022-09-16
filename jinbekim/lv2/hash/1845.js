function solution(nums) {
  var answer = 0;
  const len = nums.length;
  const presence = [];
  let kind = 0;
  nums.forEach((val) => {
      if (!presence[val]) {
          kind += 1;
          presence[val] = true;
      }
  });
  return kind > len / 2 ? len / 2 : kind;
}
/**
 * another ps
 */
// function solution(nums) {
//   const max = nums.length / 2;
//   const set = new Set(nums);
//   return set.size > max ? max : set.size;
// }
