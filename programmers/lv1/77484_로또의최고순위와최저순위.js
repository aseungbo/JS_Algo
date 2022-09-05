// https://school.programmers.co.kr/learn/courses/30/lessons/77484
function solution(lottos, win_nums) {
    let answer = [0, 0];
    let rtn = [];
    
    lottos.forEach((ele) => {
        if (!ele)
            answer[0] += 1;
        if (win_nums.indexOf(ele) !== -1)
        {
            answer[0] += 1;
            answer[1] += 1;
        }
    });
    answer.forEach((ele) => {
        ele <= 1 ? rtn.push(6) : rtn.push(7 - ele);
    })
    return rtn;
}
