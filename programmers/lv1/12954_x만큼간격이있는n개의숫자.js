// https://school.programmers.co.kr/learn/courses/30/lessons/12954

function solution(x, n) {
    var answer = [];
    
    for (let i = 0; i < n; i++)
        answer.push(x + (x * i));
    // console.log(Array(n).fill(x).map((x, idx) => x * (idx + 1))); // Use fill func
    return answer;
}