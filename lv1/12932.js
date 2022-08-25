// https://school.programmers.co.kr/learn/courses/30/lessons/12932
// split, reverse
function solution(n) {
    return (n + '').split('').reverse().map((ele) => parseInt(ele));
}