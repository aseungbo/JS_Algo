const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((ele) => ele.split(" "));

const [n, ...data] = input;
const myTableSize = 200000;
const myHashTable = new Array(myTableSize);

const hashKey = (str) => {
  const mod = 1234567891;
  let key = 0;
  let r = 1;

  for (let i = 0; i < str.length; i++) {
    key += (str.charCodeAt(i) % 96) * r;
    key %= mod;
    r *= 31;
    r %= mod;
  }
  return key;
};

let cnt = 0;

// Make hash table
data.map((ele) => {
  const cityKey = hashKey(ele[0].slice(0, 2));
  myHashTable[cityKey] = ele[1];
});

// Find special pair
data.forEach((ele) => {
  const valueToHash = hashKey(ele[1]);
  const cityKey = hashKey(ele[0].slice(0, 2));
  const keyFromHash = myHashTable[valueToHash];
  if (keyFromHash) {
    if (ele[0].slice(0, 2) === keyFromHash) {
      myHashTable[cityKey] = null;
      myHashTable[valueToHash] = null;
      cnt++;
    }
  }
});

console.log(cnt);
