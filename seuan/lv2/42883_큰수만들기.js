// https://school.programmers.co.kr/learn/courses/30/lessons/42883
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
