function solution(record) {
    let result = [];
    let map = new Map();
    for (let log of record)
    {
        const logArr = log.split(" ");
        const cmd = logArr[0];
        const uid = logArr[1];
        const nick = logArr[2];

        if (cmd === "Enter")
        {
            map.set(uid, nick);
            result.push([uid, "님이 들어왔습니다."]);
        }
        else if (cmd === "Leave")
        {
            result.push([uid, "님이 나갔습니다."]);
        }
        else if (cmd === "Change")
        {
            map.set(uid, nick);
        }
    }
    return result.map((ele) => map.get(ele[0]) + ele[1]);
}
