class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) return "Queue is empty";
      return this.items.shift();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  console.log("Dequeue:", queue.dequeue());
  