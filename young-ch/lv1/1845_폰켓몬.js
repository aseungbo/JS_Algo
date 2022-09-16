function solution(nums) {
    const set = new Set(nums);
    const canGet = Math.floor(nums.length / 2);
    if (canGet < set.size)
        return canGet;
    else
        return set.size;
}
