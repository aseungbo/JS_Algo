/**
 * 힙이 갖는 가장 중요한 규칙은 부모 노드가 가진 원소는 항상 자식 노드가 가진 원소보다 크다는 것이다.
 * - node[i]의 왼쪽 child는 node[(i * 2) + 1]가 된다.
 * - node[i]의 오른쪽 child는 node[(i * 2) + 2]가 된다.
 * @param {number} newValue 노드에 저장할 원소의 값.
 */
class Heap {
  constructor() {
    this.heap = [];
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
