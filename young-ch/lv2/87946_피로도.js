function visit (k, ds, arr)
{
    let ret = 0;
    for (let idx of arr)
    {
        if (k >= ds[idx][0])
        {
            k -= ds[idx][1];
            ++ret;
        }
        if (k <= 0)
            break ;
    }
    return ret;
}

function permutation(arr, num) {
  const res = [];
  if (num === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, arr) => {
    const rest = [...arr.slice(0,idx), ...arr.slice(idx+1)];
    const permutations = permutation(rest, num-1);
    const attach = permutations.map((permutation) => [v, ...permutation]);
    res.push(...attach);
  })
  return res;
}

function solution(k, ds) {
    let arr = [];
    for (let i = 0; i < ds.length; ++i) {
        arr.push(i);
    }
    let arrs = permutation(arr, arr.length);
    let ret = 0;
    for (let list of arrs)
    {
        const count = visit(k, ds, list);
        if (count > ret)
            ret = count;
    }
    return ret;
}