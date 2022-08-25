https://school.programmers.co.kr/learn/courses/30/lessons/12933
// split, sort 내림차순
function solution(n) {
    return parseInt((n + '').split('').sort((a, b) => b - a).join(''));
}