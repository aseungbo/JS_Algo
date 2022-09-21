// https://school.programmers.co.kr/learn/courses/30/lessons/42578
// TODO
// map으로 hash 만들기
function solution(clothes) {
  let cnt = 1;
  let obj = {};
  for (let i = 0; i < clothes.length; i++)
    obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
  for (let k in obj) cnt *= obj[k];
  return cnt - 1;
}
