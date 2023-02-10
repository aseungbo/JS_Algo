/**
 * Create Node
 */
class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
  show() {
    return this.data;
  }
}
/**
 * Binary Search Tree(BST)
 * 1. 새로운 노드 추가
 *  - root 노드가 비어있다면 root = newNode
 */
class BST {
  constructor() {
    this.root = null;
  }
  getRoot() {
    return this.root;
  }

  insert(data) {
    let newNode = new Node(data, null, null);
    if (this.root === null) this.root = newNode;
    else {
      let current = this.root;
      let parent;
      while (true) {
        parent = current;
        if (data < current.data) {
          current = current.left;
          if (current === null) {
            parent.left = newNode;
            break;
          }
        } else {
          current = current.right;
          if (current === null) {
            parent.right = newNode;
            break;
          }
        }
      }
    }
  }
  inOrder(node) {
    if (!(node == null)) {
      this.inOrder(node.left);
      console.log(node.show());
      this.inOrder(node.right);
    }
  }
  find(data) {
    let current = this.root;
    while (current.data != data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current == null) {
        return null;
      }
    }
    return current;
  }
  getHigh() {
    if (this.root === null) return 0;

    let current = this.root;
    while (current.right) current = current.right;
    return current;
  }
  getRow() {
    let current = this.root;
    while (current.left) current = current.left;
    return current;
  }
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }
  removeNode(node, data) {
    if (node === null) {
      return null;
    }
    if (data === node.data) {
      if (node.left === null && node.right === null) {
        return null;
      }
      if (node.left === null) {
        return node.right;
      }
      if (node.right === null) {
        return node.left;
      }
      let tempNode = this.getSmallest(node.right);
      node.data = tempNode.data;
      node.right = this.removeNode(node.right, tempNode.data);
      return node;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else {
      node.right = this.removeNode(node.right, data);
      return node;
    }
  }
}

const binarySearchTree = new BST();
binarySearchTree.insert(23);
binarySearchTree.insert(45);
binarySearchTree.insert(15);
binarySearchTree.insert(37);
binarySearchTree.insert(3);
binarySearchTree.insert(99);
binarySearchTree.insert(21);
binarySearchTree.insert(40);
binarySearchTree.insert(44);
binarySearchTree.insert(1);
binarySearchTree.insert(65);
console.log(binarySearchTree.getRow());
console.log(binarySearchTree.getHigh());
binarySearchTree.remove(binarySearchTree.getHigh().data);
console.log(binarySearchTree.inOrder(binarySearchTree.getRoot()));
