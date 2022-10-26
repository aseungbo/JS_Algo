function checkDia(place, r, c) {
    let info = {};
    if (r - 1 >= 0)
        info["north"] = place[r - 1][c];
    if (r + 1 < 5)
        info["south"] = place[r + 1][c];
    if (c - 1 >= 0)
        info["west"] = place[r][c - 1];
    if (c + 1 < 5)
        info["east"] = place[r][c + 1];

    if (info["north"] && info["west"])
    {
        const pos = place[r - 1][c - 1];
        if (pos === 'P')
        {
            if (info["north"] + info["west"] != "XX")
            {
                return false;                
            }
        }
    }
    if (info["north"] && info["east"])
    {
        const pos = place[r - 1][c + 1];
        if (pos === 'P')
        {
            if (info["north"] + info["east"] != "XX")
            {
                return false;                
            }
        }
    }
    if (info["south"] && info["west"])
    {
        const pos = place[r + 1][c - 1];
        if (pos === 'P')
        {
            if (info["south"] + info["west"] != "XX")
            {
                return false;                
            }
        }
    }
    if (info["south"] && info["east"])
    {
        const pos = place[r + 1][c + 1];
        if (pos === 'P')
        {
            if (info["south"] + info["east"] != "XX")
            {
                return false;
            }
        }
    }
    return true;
}

function checkCol(place) {
    for (let r = 0; r < 5; ++r)
    {
        let stack = [];
        for (let c = 0; c < 5; ++c)
        {
            const pos = place[r][c];
            if (pos == 'P') {
                if (stack.indexOf('P') >= 0)
                    return false;
                stack.push(pos);                
            }
            if (pos == 'X')
                stack = [];
            if (pos == 'O') {
                if (stack[stack.length - 1] == 'O')
                    stack = [];
                else
                    stack.push(pos);                
            }
        }
    }
    return true;
}

function checkRow(place) {
    for (let c = 0; c < 5; ++c)
    {
        let stack = [];
        for (let r = 0; r < 5; ++r)
        {
            const pos = place[r][c];
            if (pos == 'P') {
                if (stack.indexOf('P') >= 0)
                    return false;
                stack.push(pos);                
            }
            if (pos == 'X')
                stack = [];
            if (pos == 'O') {
                if (stack[stack.length - 1] == 'O')
                    stack = [];
                else
                    stack.push(pos);                
            }
        }
    }
    return true;
}

function solution(places) {
    let answer = [];
    for (let place of places)
    {
        let flag = 1;
        if (!checkCol(place) || !checkRow(place))
            flag = 0;
        else {
            for (let r = 0; r < 5 && flag == 1; ++r)
            {
                for (let c = 0; c < 5 && flag == 1; ++c) {
                    if (place[r][c] === 'P' && !checkDia(place, r, c))
                    {
                        console.log(place);
                        flag = 0;      
                    }
                }
            }
        }
        answer.push(flag);
    }
    return answer;
}
