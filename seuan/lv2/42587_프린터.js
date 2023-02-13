class Dequeue {
  constructor(arr = []) {
    this.queue = arr;
    this.length = arr.length;
  }
  enqueueLast(data) {
    this.queue.push(data);
    this.length++;
  }
  dequeueFirst() {
    this.printedCnt++;
    this.length--;
    return this.queue.shift();
  }
  size() {
    return this.length;
  }
}

function solution(priorities, location) {
  const dequeue = new Dequeue(priorities);
  const sortedPriorities = priorities.slice().sort((a, b) => a - b);
  let currLocation = location;
  let printedCnt = 0;

  while (true) {
    if (dequeue.size() === 0) break;
    if (dequeue.queue[0] < sortedPriorities.at(-1)) {
      dequeue.enqueueLast(dequeue.dequeueFirst());
      if (currLocation === 0) currLocation = dequeue.size() - 1;
      else currLocation--;
    } else {
      dequeue.dequeueFirst();
      sortedPriorities.pop();
      printedCnt++;
      if (currLocation === 0) break;
      currLocation--;
    }
  }
  return printedCnt;
}
