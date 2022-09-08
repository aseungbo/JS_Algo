// https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
    return x % (x + '').split('').reduce((a, b) => parseInt(a) + parseInt(b)) === 0 ? true : false;
}