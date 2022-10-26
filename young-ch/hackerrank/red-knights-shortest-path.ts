'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'printShortestPath' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER i_start
 *  3. INTEGER j_start
 *  4. INTEGER i_end
 *  5. INTEGER j_end
 */

function move(i:number, j:number, cmd: string) : number[] {
    if (cmd == "UL")
        return [i - 2, j - 1];
    else if (cmd == "UR")
        return [i - 2, j + 1];
    else if (cmd == "R")
        return [i, j + 2];
    else if (cmd == "LR")
        return [i + 2, j + 1];
    else if (cmd == "LL")
        return [i + 2 , j - 1];
    else if (cmd == "L")
        return [i, j - 2];
}

function isValid(n : number, step : number[]) {
    for (let ele of step) {
        if ((ele > n - 1) || (ele < 0))
            return false;        
    } 
    return true;
}

function printShortestPath(n: number, i_start: number, j_start: number, i_end: number, j_end: number): void {
    // Print the distance along with the sequence of moves.
    // UL, UR, R, LR, LL, L
    const cmds = ["UL", "UR", "R", "LR", "LL", "L"];
    const map = new Map();
    let cord = i_start + ',' + j_start;
    const goal = i_end + ',' + j_end;
    const queue = [cord];
    map.set(cord, "");
    while (queue.length != 0) {
        const current_step = queue.shift();
        const current_cord = current_step.split(",");
        for (let cmd of cmds) {
            const next_cord = move(+current_cord[0], +current_cord[1], cmd);
            const next_step = next_cord.join(",");
            if (isValid(n, next_cord) && !map.has(next_step))
            {
                queue.push(next_step);
                map.set(next_step, map.get(current_step) + " " + cmd);
            }
            if (goal === next_step) {
                const ret = map.get(next_step).trim();
                console.log(ret.split(" ").length);
                console.log(ret);
                return ;
            }
        }
    }
    console.log("Impossible");
}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

    const i_start: number = parseInt(firstMultipleInput[0], 10);

    const j_start: number = parseInt(firstMultipleInput[1], 10);

    const i_end: number = parseInt(firstMultipleInput[2], 10);

    const j_end: number = parseInt(firstMultipleInput[3], 10);

    printShortestPath(n, i_start, j_start, i_end, j_end);
}