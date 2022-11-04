const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(ele=>parseInt(ele));
const [inputLen, ...arr] = input;

const pado = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9];

const updatePado = (n) => {
    const len = pado.length;
    for (let i = len; i <= n; ++i) {
        pado.push(pado[i - 1] + pado[i - 5]);
    }
}

for (const n of arr) {
    if (pado[n] !== undefined)
        console.log(pado[n]);
    else {
        updatePado(n);
        console.log(pado[n]);
    }
}