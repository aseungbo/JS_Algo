function isPrime(n)
{
    if (n === "")
        return false;
    const number = parseInt(n);
    if (number < 2)
        return false;
    for (let i = 2; i <= Math.sqrt(number); ++i)
    {
        if (number % i === 0)
            return false
    }
    return true;
}

function solution(n, k) {
    return n.toString(k).split("0").filter((ele)=>isPrime(ele)).length;
}
