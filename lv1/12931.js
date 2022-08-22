// https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n)
{
    var answer = 0;
   
    const arr = (n + '').split('');
    for (let i = 0; i < arr.length; i++)
        answer += parseInt(arr[i]);
    return answer
}