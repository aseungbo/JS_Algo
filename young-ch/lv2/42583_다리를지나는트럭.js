function solution(bridge_length, weight, truck_weights) {
    let trucks = truck_weights.map((ele) => [ele, 0]);
    let bridge = [];
    let sec = 1;
    let current = 0;
    for (; !(trucks.length===0 && bridge.length===0) ;++sec)
    {
        if (trucks.length!==0)
        {
            const last_truck = trucks[trucks.length - 1];
            if (weight - current >= last_truck[0])
            {
                current += last_truck[0];
                bridge.push(trucks.pop());
            }
        }
        bridge.forEach((truck) => ++truck[1]);
        if (bridge[0][1] === bridge_length)
        {
            current -= bridge[0][0];
            bridge.shift();
        }
    }
    return sec;
}