// https://school.programmers.co.kr/learn/courses/30/lessons/12930
// split, map, toUpperCase, toLowerCase
function solution(s) {
    return s.split(' ').map((ele) => ele.split('').map((val, key) => (key % 2 === 0 ? val.toUpperCase() : val.toLowerCase())).join('')).join(' ');
}