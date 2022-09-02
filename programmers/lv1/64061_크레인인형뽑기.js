// https://school.programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
    let answer = 0;
    let arr = [];
    moves.map((value) => {
        for (let i = 0; i < board.length; i++)
        {
            if (board[i][value - 1] !== 0)
            {
                if (arr[arr.length - 1] === board[i][value - 1])
                {
                    arr.splice(arr.length - 1, 1);
                    answer += 2;
                }
                else
                     arr.push(board[i][value - 1]);
                board[i][value - 1] = 0;
                break ;
            }
        }
    })
    return answer;
}