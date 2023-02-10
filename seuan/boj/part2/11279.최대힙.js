class Heap {
  constructor() {
    this.heap = [];
  }
  isEmpty() {
    return this.heap.length === 0 ? true : false;
  }
  push(newValue) {
    const heap = this.heap;
    heap.push(newValue);
    let index = heap.length - 1,
      parent = Math.floor((index - 1) / 2);
    while (index > 0 && heap[parent] < heap[index]) {
      [heap[parent], heap[index]] = [heap[index], heap[parent]];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }
  pop() {
    const heap = this.heap;
    if (heap.length <= 1) return heap.pop();
    const ret = heap[0];
    heap[0] = heap.pop();
    let here = 0;
    while (1) {
      let left = here * 2 + 1,
        right = here * 2 + 2;
      if (left >= heap.length) break;
      let next = here;
      if (heap[next] < heap[left]) next = left;
      if (right < heap.length && heap[next] < heap[right]) next = right;
      if (next === here) break;
      [heap[here], heap[next]] = [heap[next], heap[here]];
      here = next;
    }
    return ret;
  }
}

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [n, ...info] = input;
const answer = [];
const heap = new Heap();

for (let i = 0; i < n; i++) {
  if (info[i] === 0) {
    heap.isEmpty() ? answer.push(0) : answer.push(heap.pop());
  } else heap.push(info[i]);
}

console.log(answer.join("\n"));
