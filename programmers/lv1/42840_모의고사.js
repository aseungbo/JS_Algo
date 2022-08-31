// https://school.programmers.co.kr/learn/courses/30/lessons/42840
function solution(answers) {
    // step 1: Make array
    let one = [1, 2, 3 ,4, 5];
    let two = [2, 1, 2, 3, 2, 4, 2, 5];
    let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let rtn = [0, 0, 0];
    
    // step 2: Check answer
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === one[i % one.length])
            rtn[0] += 1;
        if (answers[i] === two[i % two.length])
            rtn[1] += 1;
        if (answers[i] === three[i % three.length])
            rtn[2] += 1;
    }
    // Math.max로 배열의 최댓값 구하고 비교하기
    let max = Math.max(...rtn);
    let answer = [];
    for (let i = 0; i < rtn.length; ++i)
    {
        if (rtn[i] == max)
            answer.push(i + 1);
    }
    return answer;   
}