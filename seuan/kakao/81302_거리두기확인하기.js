// https://school.programmers.co.kr/learn/courses/30/lessons/81302
const checkDistance = (e) => {
  const TABLE = "O";
  const PARTITION = "X";
  const PEOPLE = "P";
  for (let i = 0; i < e.length; i++)
    for (let j = 0; j < e.length; j++) {
      let cnt = 0;
      if (e[i][j] === PEOPLE) {
        if (j >= 1 && e[i][j - 1] === PEOPLE) return 0;
        else if (j < 4 && e[i][j + 1] === PEOPLE) return 0;
        else if (i >= 1 && e[i - 1][j] === PEOPLE) return 0;
        else if (i < 4 && e[i + 1][j] === PEOPLE) return 0;
      } else if (e[i][j] === TABLE) {
        if (j >= 1 && e[i][j - 1] === PEOPLE) cnt++;
        if (j < 4 && e[i][j + 1] === PEOPLE) cnt++;
        if (i >= 1 && e[i - 1][j] === PEOPLE) cnt++;
        if (i < 4 && e[i + 1][j] === PEOPLE) cnt++;
        if (cnt >= 2) return 0;
      }
    }
  return 1;
};

function solution(places) {
  const answer = Array(places.length).fill(0);
  places.map((e, idx) => {
    if (checkDistance(e)) answer[idx] = 1;
  });
  return answer;
}
