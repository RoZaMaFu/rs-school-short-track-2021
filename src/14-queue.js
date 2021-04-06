class Queue {
  constructor() {
    this.queue = [];
  }

  get size() {
    return this.queue.length;
  }

  enqueue(elem) {
    this.queue.push(elem);
  }

  dequeue() {
    return this.queue.shift();
  }
}

module.exports = Queue;
