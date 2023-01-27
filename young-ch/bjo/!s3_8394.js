// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim();
// const size = parseInt(input);

// let ret = 0;
// const recursive = (idx) => {
//     if (idx >= size - 1) {
//         ret++;
//         if (ret >= 10)
//             ret = ret - 10;
//         return ;
//     }
//     recursive(idx + 1);
//     recursive(idx + 2);
//     return ;
// }
// recursive(0);
// console.log(ret % 10);

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
const size = parseInt(input);

const arr = new Array(size).fill(0);
arr[0] = 1;
arr[1] = 2;
for (let i = 2; i < size; ++i) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % 10;
}

console.log(arr[size - 1]);