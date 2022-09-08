// https://school.programmers.co.kr/learn/courses/30/lessons/42883
// ToDo: 42885와 비교하여 단순히 stack 문제로 해결할 시 발생하는 문제 생각해보기
function solution(number, k) {
    const arr = number.split('');
    
    let stack = [];
    arr.forEach((e) => {
        while (e > stack[stack.length -1] && k !== 0)
        {
            stack.pop();
            k--;
        }
        stack.push(e);
    })
    while (k-- !== 0)
        stack.pop();   
    return stack.join('');
}
