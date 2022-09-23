function solution(s) {
    let map = new Map();
    let i = 1;
    while (i < s.length - 1)
    {
        if (s[i] === '\{')
        {
            ++i;
            let str = "";
            while (s[i] !== '\}' && i < s.length)
                str += s[i++];                
            const arr = str.split(",").map((ele)=> +ele);
            map.set(arr.length, arr);
        }
        ++i;
    }
    const mapArr = [...map].sort((a, b)=> a[0] - b[0]).map((ele)=>ele[1]);
    let answer = [];
    for (let ele of mapArr)
    {
        let temp = answer.slice();
        for (let num of ele)
        {
            const idx = temp.indexOf(num);
            if (idx === -1)
                answer.push(num);
            else
                temp[idx] = 0;
        }
    }
    return answer;
}