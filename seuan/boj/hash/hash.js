const myTableSize = 5;
const myHashTable = new Array(myTableSize);

// 들어온 값을 테이블의 크기로 나눠주고 나머지를 반환하면 된다.
function hashFunction(key) {
  return key % myTableSize;
}

myHashTable[hashFunction(1991)] = 1991;
myHashTable[hashFunction(1234)] = 1234;
myHashTable[hashFunction(5678)] = 5678;

console.log(myHashTable); // [empty, 1991, empty, 5678, 1234]
