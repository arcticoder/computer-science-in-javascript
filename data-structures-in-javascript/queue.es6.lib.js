/*Complexity

Average
Access	Search	Insertion	Deletion
O(n)	O(n)	O(1)	O(n)
*/
class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
    return this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }

  length() {
    return this.queue.length;
  }

  print() {
    console.log(this.queue.join(' '));
  }
}
