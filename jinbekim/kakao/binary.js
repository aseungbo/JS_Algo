function solution(s) {
  let removedZero = 0;
  let count = 0;

  while (s !== "1") {
      const tmpArr = s.split('');
      const len = tmpArr.length;
      const zeroCount = tmpArr.reduce((prev, curr) => {
          if (curr === '0') return prev + 1;
          return prev;
      }, 0);
      s = (len - zeroCount).toString(2);
      removedZero += zeroCount;
      count += 1;
  }
  return [removedZero, count];
}
