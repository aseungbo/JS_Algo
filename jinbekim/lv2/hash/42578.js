function solution(clothes) {
  var answer = 1;
  const closet = new Map();
  const KIND = 1,
      NAME = 0;
  clothes.forEach((cloth) => {
      const arr = closet.get(cloth[1]);
      if (arr === undefined) {
          closet.set(cloth[KIND], [cloth[NAME]]);
      } else {
          arr.push(cloth[NAME]);
          closet.set(cloth[KIND], arr);
      }
  });
  closet.forEach((kind) => {
      answer *= kind.length + 1;
  });
  return answer - 1;
}
