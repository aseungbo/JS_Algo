// https://school.programmers.co.kr/learn/courses/30/lessons/42862

function theftMe(lost, reserve) {
    for (let i = 0; i < lost.length; i++) 
        if (reserve.indexOf(lost[i]) !== -1)
        {
            reserve.splice(reserve.indexOf(lost[i]), 1);
            lost[i] = 0;
        }
}

function solution(n, lost, reserve) {
    lost.sort((a, b) => a - b);
    theftMe(lost,reserve);
    for (let i = 0; i < lost.length; i++) {
        if (lost[i] === 0)
            continue ;
        let left = lost[i] - 1;
        let right = lost[i] + 1;

        if (left >= 1 && reserve.indexOf(left) !== -1)
            reserve.splice(reserve.indexOf(left), 1);
        else if (right <= n && reserve.indexOf(right) !== -1)
            reserve.splice(reserve.indexOf(right), 1);
        else
            --n;
    }
    return n;
}
