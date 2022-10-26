function solution(str1, str2) {

  // if (str1.length === 0 || str2.length === 0) return 65536;

  const isAlpha = (ch) => {
      if (typeof ch === 'string') {
          const reg = /^[A-Z][A-Z]$/i;
          return ch.match(reg);
      }
      return false;
  }
  const joinTwoChar = (val, idx, arr) => {
      if (arr[idx+1]) return val + arr[idx+1];
      return false;
  }

  const multiset1 = [...str1.toLowerCase()].map(joinTwoChar).filter(isAlpha);
  const multiset2 = [...str2.toLowerCase()].map(joinTwoChar).filter(isAlpha);

  // if (multiset1.length === 0 || multiset2.length === 0) return 65536;
  multiset1.sort();
  multiset2.sort();
  const union = [];
  for (let i = 0, j = 0; i < multiset1.length || j < multiset2.length;) {
      if (!multiset1[i]) {
          union.push(multiset2[j]);
          j += 1;
      } else if (!multiset2[j]) {
          union.push(multiset1[i]);
          i += 1;
      } else if (multiset1[i] === multiset2[j]) {
          i += 1;
          j += 1;
          union.push(multiset1[i]);
      } else if (multiset1[i] < multiset2[j]) {
          union.push(multiset1[i]);
          i += 1;
      } else if (multiset1[i] > multiset2[j]) {
          union.push(multiset2[j]);
          j += 1;
      }
  }
  const intersection = [];
  for (let i = 0, j = 0; i < multiset1.length || j < multiset2.length;) {
      if (!multiset1[i]) j += 1;
      else if (!multiset2[j]) i += 1;
      else if (multiset1[i] === multiset2[j]) {
          i += 1;
          j += 1;
          intersection.push(multiset1[i]);
      }
      else if (multiset1[i] < multiset2[j]) i += 1;
      else if (multiset1[i] > multiset2[j]) j += 1;
  }
  if (union.length === 0) return 65536;
  return Math.floor(intersection.length / union.length * 65536);
}
