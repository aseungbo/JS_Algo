// https://school.programmers.co.kr/learn/courses/30/lessons/42748
// slice, sort
function solution(array, commands) {
    var answer = [];

    for (let i = 0; i < commands.length; i++)
    {
        var arr = array.slice(commands[i][0] - 1, commands[i][1]);
        answer.push(arr.sort((a, b) => a - b)[commands[i][2] - 1]);
    }     
    return answer;
}