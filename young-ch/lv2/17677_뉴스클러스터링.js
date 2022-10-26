function isAlpha(c)
{
    if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z'))
        return true;
    else
        return false;
}

function cutString(str)
{
    let ret = [];
    for (let i = 0; i < str.length; ++i)
    {
        let ele = "";
        if (isAlpha(str[i]) && isAlpha(str[i + 1]))
            ele = str[i] + str[i + 1];
        if (ele !== "")
            ret.push(ele.toLowerCase());
    }
    return ret;
}

function solution(str1, str2) {
    const arr1 = cutString(str1).sort();
    const arr2 = cutString(str2).sort();
    if (arr1.length === 0 && arr2.length === 0)
        return 65536;
    if (arr1.length === 0 || arr2.length === 0)
        return 0;
    let intersection = 0;
    const temp = arr1.slice();
    for (let ele of arr2)
    {
        let idx = temp.indexOf(ele);
        if (idx >= 0)
        {
            temp[idx] = "";
            intersection++;            
        }
    }
    console.log(temp);
    console.log(intersection);
    const union = arr1.length + arr2.length - intersection;
    return Math.floor(65536 * intersection / union);
}