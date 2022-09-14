import collections

def solution(cacheSize, cities):
    cache = collections.deque(maxlen=cacheSize)
    answer = 0
    
    for x in cities:
        s = x.lower()
        if s in cache:
            cache.remove(s)
            cache.append(s)
            answer += 1
        else:
            cache.append(s)
            answer += 5
    return answer