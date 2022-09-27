function solution(n, words) {
    let answer = [0 , 0];
    let wordSet = new Set();
    for (let i = 0; i < words.length; ++i)
    {
        const word = words[i];
        const prevWord = words[i - 1];
        const who = i % n + 1;
        const turn = Math.ceil((i + 1) / n);
        if (i !== 0 && word[0] !== prevWord[prevWord.length - 1])
            return [who, turn];
        if (wordSet.has(words[i]))
            return [who, turn];
        wordSet.add(words[i]);
    }
    return answer;
}
