// https://school.programmers.co.kr/learn/courses/30/lessons/12935
// slice, filter
function solution(arr) {
    var min = arr.slice(0).sort((a, b) => a - b)[0];
    return arr.length === 1 ? [-1] : arr.filter((ele) => ele > min);
}