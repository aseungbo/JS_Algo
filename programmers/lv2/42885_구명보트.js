// https://school.programmers.co.kr/learn/courses/30/lessons/42885
function solution(people, limit) {
    let answer = 0;
    
    let low = people.length;
    people.sort((a, b) => b - a);
    for (let i = 0; i < low; i++)
    {
        if (people[i] + people[low - 1] <= limit)
        {
            answer++;
            low--;
        }
        else
            answer++;
    }
    return answer;
}
