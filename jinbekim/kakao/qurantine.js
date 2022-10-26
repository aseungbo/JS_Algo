function solution(places) {
  let answer = new Array(5).fill(1);
  places.forEach((room, roomNum) =>{
      const cord = new Array(5);
      for (let idx = 0; idx < 5; ++idx) {
          cord[idx] = room[idx].split('');
      }
      for (let rowIdx = 0; rowIdx < 5; ++rowIdx) {
          for (let colIdx = 0; colIdx < 5; ++colIdx) {
              if (cord[rowIdx][colIdx] === 'O') {
                  let pCount = 0;
                  if (colIdx > 0 && cord[rowIdx][colIdx - 1] === 'P') pCount += 1;
                  if (rowIdx > 0 && cord[rowIdx -1][colIdx] === 'P') pCount += 1;
                  if (colIdx < 4 && cord[rowIdx][colIdx + 1] === 'P') pCount += 1;
                  if (rowIdx < 4 && cord[rowIdx + 1][colIdx] === 'P') pCount += 1;
                  if (pCount > 1) {
                      answer[roomNum] = 0;
                      return false;
                  }
              } else if (cord[rowIdx][colIdx] === 'P') {
                  let pCount = 0;
                  if (colIdx > 0 && cord[rowIdx][colIdx - 1] === 'P') pCount += 1;
                  if (rowIdx > 0 && cord[rowIdx -1][colIdx] === 'P') pCount += 1;
                  if (colIdx < 4 && cord[rowIdx][colIdx + 1] === 'P') pCount += 1;
                  if (rowIdx < 4 && cord[rowIdx + 1][colIdx] === 'P') pCount += 1;
                  if (pCount > 0) {
                      answer[roomNum] = 0;
                      return false;
                  }
              }
          }
      }
  });
  return answer;
}
