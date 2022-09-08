// https://school.programmers.co.kr/learn/courses/30/lessons/12940

function solution(n, m) {
    var answer = [];
    let a = 1;
    for (let i = 2; i <= Math.min(n, m); i++)
    {
        if (n % i === 0 && m % i === 0)
            a = i;
    }
    answer.push(a);
    let b = 1
    while (42)
    {
        if (b % n === 0 && b % m === 0)
            break ;
        b++;
    }
    answer.push(b);
    return answer;
}