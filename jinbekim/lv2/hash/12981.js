/**
 * @author jinbekim
 * @name 영어끝말잇기
 * @date 2022.09.25.
 */

function solution(n, words) {
  var answer;
  const history = {};
  let char = words[0].at(0);

  for (let idx = 0; idx < words.length; ++idx) {
      if (char !== words[idx].at(0)
          || history[words[idx]] === true) {
          answer = [idx % n + 1, Math.ceil((idx+1) / n)];
          break;
      } else {
          history[words[idx]] = true;
      }
      char = words[idx].at(words[idx].length - 1);
  }
  return answer ? answer : [0,0];
}
