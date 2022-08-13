export default class CircularQueue<T> {
  private queue: T[];
  private head: number;
  private size: number;

  constructor(capacity: number) {
    this.queue = new Array(capacity);
    this.size = 0;
    this.head = 0;
  }

  isFull(): boolean {
    if (this.size === this.queue.length) {
      return true;
    }
    return false;
  }

  Front(): T {
    return this.size === 0 ? null : this.queue[this.head];
  }

  Rear(): T {
    return this.size === 0
      ? null
      : this.queue[(this.size + this.head - 1) % this.queue.length];
  }

  isEmpty(): boolean {
    if (this.size === 0) {
      return true;
    }
    return false;
  }

  enQueue(item: T): boolean {
    if (this.isFull()) {
      return false;
    }
    this.queue[(this.size + this.head) % this.queue.length] = item;
    this.size++;
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) {
      return false;
    }

    this.head = (this.head + 1) % this.queue.length;
    this.size--;

    return true;
  }
}
