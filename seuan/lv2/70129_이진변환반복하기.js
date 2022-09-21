// https://school.programmers.co.kr/learn/courses/30/lessons/70129
function solution(s) {
  var answer = [];
  let cnt = 0;
  while (s.length !== 1) {
    let num = 0;
    s.split("").forEach((e) => {
      if (e === "0") answer[1] ? answer[1]++ : (answer[1] = 1);
      else num++;
    });
    s = num.toString(2);
    cnt++;
  }
  answer[0] = cnt;
  return answer;
}
