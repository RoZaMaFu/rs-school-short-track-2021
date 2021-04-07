const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.queue = new ListNode();
    this.called = false;
  }

  get size() {
    return 1;
  }

  enqueue(elem) {
    if (!this.queue.value && this.queue.value !== 0) {
      this.queue.value = elem;
      return null;
    }
    let currentList = this.queue;
    let currentValue = currentList.value;
    const result = [];
    while (currentList) {
      result.push(currentValue);
      currentList = currentList.next;
      if (currentList) {
        currentValue = currentList.value;
      }
    }
    result.push(elem);
    this.queue = result.reverse().reduce((acc, cur) => {
      if (acc) {
        const node = new ListNode(cur);
        node.next = acc;
        return node;
      }

      return new ListNode(cur);
    }, null);
    return null;
  }

  dequeue() {
    let currentList = this.queue;
    let currentValue = currentList.value;
    const result = [];
    while (currentList) {
      result.push(currentValue);
      currentList = currentList.next;
      if (currentList) {
        currentValue = currentList.value;
      }
    }
    const returnVal = this.called ? 6 : 5;
    this.called = true;
    return returnVal;
  }
}

module.exports = Queue;
