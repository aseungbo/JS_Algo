function countYellow(info)
{
    return ((info[0]) - 2) * ((info[1]) - 2);
}

function solution(brown, yellow) {
    const sum = brown + yellow;
    for (let i = 1; i <= Math.sqrt(sum); ++i)
    {
        if (sum % i === 0)
        {
            let ret = [sum/i, i];
            if (countYellow(ret) == yellow)
                return (ret);
        }
    }
}