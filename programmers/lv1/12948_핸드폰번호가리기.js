// https://school.programmers.co.kr/learn/courses/30/lessons/12948

function solution(s) {
    // var arr = s.split('');
    // return String(arr.map((ele, index) => index < arr.length - 4 ? "*" : ele).join(''));
    var result = "*".repeat(s.length - 4) + s.slice(-4);
    return result;
}