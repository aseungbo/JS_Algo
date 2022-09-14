function solution(cacheSize, cities) {
  let answer = 0;
  const cache = new Set();

  cities.forEach((val) => {
      const city = val.toLowerCase();
      if (cache.has(city)) {
          cache.delete(city);
          cache.add(city);
          answer += 1;
      } else if (cache.size < cacheSize) {
          cache.add(city);
          answer += 5;
      }  else if (cacheSize > 0) {
          const iter = cache.entries();
          cache.delete(iter.next().value[0]);
          cache.add(city);
          answer += 5;
      } else {
          answer += 5;
      }
  });
  return answer;
}
