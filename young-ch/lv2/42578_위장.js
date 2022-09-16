function solution(clothes) {
    let disguiseSet = new Map();
    for (let cloth of clothes)
    {
        let count = disguiseSet.get(cloth[1]);
        if (count === undefined)
            disguiseSet.set(cloth[1], 1);
        else
            disguiseSet.set(cloth[1], count + 1);
    }
    let arr = Array.from(disguiseSet.values());
    let result = arr.reduce((acc, ele)=> acc *(ele+1), 1);
    return result - 1;
}