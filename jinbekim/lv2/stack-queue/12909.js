/**
 * 올바른 괄호
 */
function solution(s){
  var answer = false;

  const strLength = s.length;
  const stack = [];

  for (let idx = 0; idx < strLength; ++idx) {
    if (s[idx] === '\)') {
        if (stack.length === 0) return answer;
        stack.pop();
    }
    if (s[idx] === '\(') {
        stack.push('\(');
    }
  }
  if (stack.length === 0) answer = true;
  return answer;
}
