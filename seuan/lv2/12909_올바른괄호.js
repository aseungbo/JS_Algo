// https://school.programmers.co.kr/learn/courses/30/lessons/12909#
function solution(s){
    let stack = [];
    // 가장 앞에 )가 오는 경우
    if (s[0] === ')')
        return false;
    for (let i = 0; i < s.length; i++)
    {
        if (s[i] === "(")
            stack.push(s[i]);
        else
            stack.pop();
    }
    return stack.length === 0 ? true : false;
}
