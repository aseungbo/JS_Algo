// https://school.programmers.co.kr/learn/courses/30/lessons/12906
// push
function solution(arr)
{
    var answer = [];
    
    const array = arr;
    
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] != arr[i + 1])
            answer.push(arr[i]);
    }
    return answer;
}