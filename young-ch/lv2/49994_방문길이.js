function solution(dirs) {
    let [x, y] = [5, 5];
    const set = new Set();

    for (const step of dirs) {
        const prevX = x;
        const prevY = y;
        if (step === 'U')
            y = Math.max(0, y - 1);
        else if (step === 'D')
            y = Math.min(10, y + 1);
        else if (step == 'L')
            x = Math.max(0, x - 1);
        else
            x = Math.min(10, x + 1);
        if (prevX === x && prevY === y)
            continue ;
        const moveX = prevX < x ? "" + prevX + x : "" + x + prevX;
        const moveY = prevY < y ? "" + prevY + y : "" + y + prevY;
        const move = moveX + moveY;
        set.add(move);     
    }
    return set.size;
}