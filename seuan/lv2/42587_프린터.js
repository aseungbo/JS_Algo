// https://school.programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
    let stack = [];
    let poped = [];
    priorities.map((e, idx) => {
        while (e > stack[stack.length -1])
            poped.push(stack.pop());
        stack.push(idx);
    })
    for (let i = 0; i < poped.length; i++)
        stack.push(poped[i]);
    return (stack.indexOf(location) + 1);
}
