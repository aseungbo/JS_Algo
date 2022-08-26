// https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {
    var pCnt = s.toLowerCase().split('p').length - 1;
    var yCnt = s.toLowerCase().split('y').length - 1;
    return pCnt === yCnt ? true : false;
}