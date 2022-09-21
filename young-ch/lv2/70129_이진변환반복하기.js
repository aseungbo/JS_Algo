function countOne(arr)
{
    let ret = 0;
    for (let i = 0; i < arr.length; ++i)
    {
        if (arr[i] === '1')
            ret++;
    }
    return ret;
}

function solution(s) {
    let zero = 0;
    let count = 0;
    while (true)
    {
        let arr = s.split("");
        const len = arr.length;
        if (len <= 1)
            break ;
        const newLen = countOne(arr);
        zero += len - newLen;
        count++;
        s = (+newLen).toString(2);
    }
    return [count, zero];
}
