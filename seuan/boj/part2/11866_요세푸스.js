class Dequeue {
  constructor(arr = []) {
    this._arr = arr;
    this._length = arr.length;
  }

  enqueueFirst(item) {
    this._arr.unshift(item);
    this._length++;
  }

  enqueueLast(item) {
    this._arr.push(item);
    this._length++;
  }

  dequeueFisrt() {
    this._length--;
    return this._arr.shift();
  }

  dequeueLast() {
    this._length--;
    return this._arr.pop();
  }

  size() {
    return this._length;
  }
}

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const [n, k] = input;
const deq = new Dequeue([...Array(n).keys()].map((ele) => ele + 1));
const res = [];

let idx = 1;
while (deq.size() !== 0) {
  if (idx % k === 0 || deq.size() === 1) {
    res.push(deq.dequeueFisrt());
    idx = 1;
  } else {
    deq.enqueueLast(deq.dequeueFisrt());
    idx++;
  }
}

console.log(`<${res.join(", ")}>`);
