// 배열로 queue를 만들게되면 shift() 함수를 사용해 간단하게 구현할 수 있지만
// 맨 앞의 요소를 제거하면 배열의 길이만큼 앞으로 당겨야하기 때문에 O(N)의 시간복잡도를 가진다.
// class Queue {
//   constructor() {
//     this._arr = [];
//   }
//   enqueue(item) {
//     this._arr.push(item);
//   }
//   dequeue() {
//     this._arr.shift();
//   }
//   empty() {
//     return this._arr.length === 0 ? 1 : 0;
//   }
//   size() {
//     return this._arr.length;
//   }
//   top() {
//     return this._arr.length !== 0 ? this._arr.at(-1) : undefined;
//   }
// }

// Linked list를 사용한 Queue 생성
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  empty() {
    return this.first === null ? 1 : 0;
  }

  enqueue(data) {
    const node = new Node(data);
    if (this.empty()) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
      console.log("----------");
    }
    this.length++;
  }

  dequeue() {
    if (this.empty()) return;
    const removeNode = this.first;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.length--;
    return removeNode.data;
  }

  size() {
    return this.length;
  }

  display() {
    if (this.empty()) return;
    let curr = this.first;
    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}

const queue = new Queue();

queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.dequeue();
